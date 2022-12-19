import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import nodemailer from "nodemailer";
import airtable from 'airtable';
import SMTPTransport from "nodemailer/lib/smtp-transport";

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
    contentObject[level] = { title, body }
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
  const usersTable = usersBase("Testing Users");
  const usersList = await usersTable
    .select({
      view: "Grid view",
    })
    .all();
  for (const user of usersList) {
    const email = user.get("Email");
    const userLevel = (user.get("Level") ?? 0) as number;
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
  const usersTable = usersBase("Testing Users");
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

    const result = transporter.sendMail({
      from: '"Flaq Academy " <welcome@flaq.club>', // sender address
      replyTo: "content@flaq.club",
      to: user.email, // list of  receivers
      subject: content[user.level].title, // Subject line
      html: content[user.level].body, // html  body
    })
    promises.push(result)
  }
  const result = await Promise.all(promises);
  const updateResult = await updateUserLevels(users);
  console.log({ updateResult })



  return res.status(200).json({ success: true, result })
}
