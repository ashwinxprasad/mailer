// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import airtable from "airtable";
import axios from "axios";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
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

    const record = await table.find(recordId)
    console.log(record)
  }

  catch (e) {
    console.log(e)
  }

  res.status(200).json({ name: 'John Doe' })
}
