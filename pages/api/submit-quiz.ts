import { NextApiRequest, NextApiResponse } from "next";
import airtable from 'airtable';

interface RequestBody {
  email: string,
  name: string,
  quizId: string,
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const body = req.body as RequestBody;
  if (!body.email || !body.name || !body.quizId) {
    return res.status(400).json({ error: "Bad Request. Include all fields" })
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
    quizIds.push(quiz.get("Id") as number);
  }

  if (!quizIds.includes(Number(body.quizId))) {
    return res.status(400).json({ error: "Invalid Quiz Id" })
  }


  const submissionsBase = base("Submissions");

  try {
    const createRes = await submissionsBase.create([
      {
        "fields": {
          "Name": body.name,
          "Email": body.email,
          "Quiz ID": body.quizId,
        }
      },
    ],)
    return res.status(200).json({ message: "Records created", data: createRes })
  }
  catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Error creating entry", error: e })
  }
}
