// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import airtable from "airtable";
import axios from "axios";
import { createHtml } from '../data/email-template-1';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  if (!req.body.base?.id ?? true) {
    return {
      "error": "Invalid Request"
    }
  }
  const base = airtable.base(req.body.base.id as string);
  const table = base(process.env.TABLE_NAME as string);

  // const record = await table.find("")
  //

  try {

    const payload = await axios.get(`https://api.airtable.com/v0/bases/${req.body.base.id}/webhooks/${req.body.webhook.id}/payloads`, {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    });

    const index = payload.data.cursor - 2;
    const tableId = process.env.TABLE_ID;
    const recordId = (Object.keys(payload.data.payloads[index]['changedTablesById'][tableId!]['changedRecordsById'])[0])
    console.log({ recordId })

    const record = await (await table.find(recordId)).fetch();
    const fields = record.fields;
    const email = createHtml({
      title: fields['Article Title'] as string,
      primaryButton: fields['Article Title'] as string,
      secondaryBody: fields['Secondary Body'] as string,
      primaryBody: fields['Primary Body'] as string,
      articleUrl: fields['Article Link'] as string
    })
    res.status(200).send(email);
  }

  catch (e) {
    console.log(e)
    res.status(200).json({ name: 'Oops Doe' })
  }

}
