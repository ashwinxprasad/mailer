import { NextApiRequest, NextApiResponse } from "next";
import airtable from 'airtable';
import NextCors from "nextjs-cors";
import validator from "validator";

interface RequestBody {
  email: string,
  name: string,
  groupId: string,
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
  const body = req.body as RequestBody;
  if (!body.email || !body.name || !body.groupId) {
    return res.status(400).json({ error: "Bad Request. Include all fields" })
  }

  if (!validator.isEmail(body.email)) {
    console.log("Error validating", body.email)
    return res.status(400).json({ error: "Invalid Email" })
  }

  const base = airtable.base("appx2tBkSX4tjNtOA");
  const table = base("Quizzes")

  const data = await table
    .select({
      view: "Grid view",
    })
    .all();
  const quizIds: number[] = [];
  for (const quiz of data) {
    quizIds.push(quiz.get("Group Id") as number);
  }

  if (!quizIds.includes(Number(body.groupId))) {
    return res.status(400).json({ error: "Invalid Quiz Group Id" })
  }


  const base2 = airtable.base("appaaeyWRls5fW96l")
  const submissionsBase = base2("Submissions");

  try {
    const _createRes = await submissionsBase.create([
      {
        "fields": {
          "Name": body.name,
          "Email": body.email,
          "Quiz Group Id": body.groupId,
        }
      },
    ],)
    return res.status(200).json({ message: "Records created" })
  }
  catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Error creating entry", error: e })
  }
}
