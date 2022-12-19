import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import nodemailer from "nodemailer";

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

  const result = await transporter.sendMail({
    from: '"Flaq Academy " <welcome@flaq.club>', // sender address
    replyTo: "content@flaq.club",
    to: 'ashwin@flaq.club', // list of  receivers
    subject: "Cron Ran", // Subject line
    html: "Cron Ran at " + Date.now().toString(), // html  body
  })
  console.log("Cron Calle")

  return res.status(200).json({ success: true, res: result })
}
