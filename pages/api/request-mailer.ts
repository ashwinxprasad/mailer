// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import airtable from "airtable";
import axios from "axios";
import nodemailer from "nodemailer";
import { createHtml } from '../../data/email-template-1';


export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
) {
        if (!req.body.base?.id ?? true) {
                return {
                        "error": "Invalid Request"
                }
        }
        const base = airtable.base(req.body.base.id as string);
        const table = base(process.env.TABLE_NAME as string);

        try {

                const payload = await axios.get(`https://api.airtable.com/v0/bases/${req.body.base.id}/webhooks/${req.body.webhook.id}/payloads`, {
                        headers: {
                                Authorization: `Bearer ${process.env.BEARER_TOKEN}`
                        }
                });

                const index = payload.data.cursor - 2;
                const tableId = process.env.TABLE_ID;
                const recordId = (Object.keys(payload.data.payloads[index]['changedTablesById'][tableId!]['changedRecordsById'])[0])

                const record = await (await table.find(recordId)).fetch();
                const fields = record.fields;
                const email = createHtml({
                        title: fields['Article Title'] as string,
                        primaryButton: fields['Article Title'] as string,
                        secondaryBody: fields['Secondary Body'] as string,
                        primaryBody: fields['Primary Body'] as string,
                        articleUrl: fields['Article Link'] as string
                })


                const userData = await base('Testing Users')
                        .select({
                                view: "Grid view",
                        })
                        .all();

                const users: string[] = [];
                for (const user of userData) {
                        console.log(user.get("Email"));
                        users.push(user.get("Email") as string);
                }

                console.log(users)

                let transporter = nodemailer.createTransport({
                        host: process.env.SMTP_HOST,
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                                user: process.env.SMTP_USER, // generated ethereal user
                                pass: process.env.SMTP_PASSWORD, // generated ethereal password
                        },

                });

                const promises: Promise<any>[] = [];
                //
                // for (const user of users) {
                //         promises.push(transporter.sendMail({
                //                 from: '"Flaq Academy 👻" <welcome@flaq.club>', // sender address
                //                 bcc: "",
                //                 to: user, // list of  receivers
                //                 subject: fields["Sub ject"] as string, // Subject line
                //                 html: email, // html  body
                //         }));
                // }
                //
                // const info = await Promise.all(promises);
                // console.log(info)

                res.status(200).json({ seb: "Danke Dear" });

        }

        catch (e) {
                console.log(e)
                res.status(200).json({ name: 'Oops Doe' })
        }

}
