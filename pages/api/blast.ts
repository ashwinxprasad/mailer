import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import nodemailer from "nodemailer";
import airtable from 'airtable';
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { createWeeklyEmail } from "../../data/email-template-2";

async function prepareContent() {
  // A simple object is more convenient than a classed object?
  const contentObject: any = {};
  const contentBase = airtable.base('app4EhvQviha2jIWp');
  const contentTable = contentBase("Content")
  const contentList = await contentTable
    .select({
      view: "Grid view",
    })
    .all();

  for (const content of contentList) {
    const title = content.get("Title");
    const body = content.get("Body");
    const level = content.get("Level") as number;
    const link = content.get("Link") as string;
    const imageUrl = content.get("ImageUrl") as string;
    contentObject[level] = { title, body, link, imageUrl }
  }
  return contentObject;
}

interface User {
  email: string,
  level: number,
  id: string,
}

async function getUsers() {
  const users: User[] = [];
  const usersBase = airtable.base("appkw1kgjwo6TWrFK");
  const usersTable = usersBase("Landing Page Users");
  const usersList = await usersTable
    .select({
      view: "Grid view",
    })
    .all();
  for (const user of usersList) {
    const email = user.get("Email");
    const userLevel = (user.get("Level") ?? 1) as number;
    const id = user.getId();
    if (!email) { continue; }
    users.push({
      email: email as string, level: userLevel, id
    })
  }
  return users;
}

async function updateUserLevels(users: User[]) {
  const usersBase = airtable.base("appkw1kgjwo6TWrFK");
  const usersTable = usersBase("Landing Page Users");
  const updateObject: any = []; // not modeling the airtable object
  for (const user of users) {
    updateObject.push({
      id: user.id,
      fields: {
        Level: user.level + 1
      }
    })
  }
  return await usersTable.update(updateObject)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  await NextCors(req, res, {
    // Options
    methods: ['POST', 'OPTIONS'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });


  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });

  const content = await prepareContent();
  const users = await getUsers();
  const promises: Promise<SMTPTransport.SentMessageInfo>[] = [];

  for (const user of users) {
    // Check if the content even exists
    if (!content[user.level]) { continue; }

    const emailHtml = createWeeklyEmail({
      body: content[user.level].body,
      title: content[user.level].title,
      button_text: "READ MORE",
      button_link: content[user.level].link,
      image_url: content[user.level].imageUrl,
    })
    const result = transporter.sendMail({
      from: '"Flaq Academy " <welcome@flaq.club>', // sender address
      replyTo: "content@flaq.club",
      to: user.email, // list of  receivers
      subject: `Flaq - ${content[user.level].title}`, // Subject line
      html: emailHtml, // html  body
    })
    promises.push(result)
  }
  const result = await Promise.all(promises);
  let updateResult;
  try {
    updateResult = await updateUserLevels(users);
  }
  catch (e) {
    console.log(e)
  }
  await transporter.sendMail({
    from: '"Flaq Academy " <welcome@flaq.club>', // sender address
    replyTo: "content@flaq.club",
    to: "ashwin@flaq.club,content@flaq.club", // list of  receivers
    subject: `Flaq - Email Sent Report`, // Subject line
    html: `<h2>Email Report</h2> - <br/><br/><pre>${JSON.stringify(result, null, 3)}</pre><br/><br/><h2>Level Update Report</h2> - <br/><br/><pre>${JSON.stringify(updateResult, null, 3)}</pre> <br/> Flaq Tech`, // html  body
  })



  return res.status(200).json({ success: true, result })
}
