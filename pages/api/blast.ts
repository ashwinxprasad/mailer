import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import nodemailer from 'nodemailer'
import airtable from 'airtable'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { createWeeklyEmail } from '../../data/email-template-2'
import { Collection, ObjectId } from 'mongodb'
import { makeUserCollection } from '../../lib/collections/user'
import clientPromise from '../../lib/mongodb'
import { makeBlastCollection } from '../../lib/collections/blast'

async function prepareContent() {
    // A simple object is more convenient than a classed object?
    const contentObject: any = {}
    const contentBase = airtable.base('app4EhvQviha2jIWp')
    const contentTable = contentBase('Content')
    const contentList = await contentTable
        .select({
            view: 'Grid view',
        })
        .all()

    for (const content of contentList) {
        const title = content.get('Title')
        const body = content.get('Body')
        const level = content.get('Level') as number
        const link = content.get('Link') as string
        const imageUrl = content.get('ImageUrl') as string
        contentObject[level] = { title, body, link, imageUrl }
    }
    return contentObject
}

interface User {
    email: string
    level: number
    id: ObjectId
}

async function getUsers(userCollection: Collection) {
    const users: User[] = []
    const data = await userCollection.find({}).toArray()
    // const usersBase = airtable.base('appkw1kgjwo6TWrFK')
    // const usersTable = usersBase('Landing Page Users')
    // const usersList = await usersTable
    //     .select({
    //         view: 'Grid view',
    //     })
    //     .all()
    for (const user of data) {
        const email = user['email']
        const userLevel = (user['level'] ?? 1) as number
        const id = user['_id']
        if (!email) {
            continue
        }
        users.push({
            email: email as string,
            level: userLevel,
            id,
        })
    }
    return users
}

async function updateUserLevels(users: User[], userCollection: Collection) {
    try {
        return await userCollection.updateMany({}, { $inc: { level: 1 } })
    } catch (e) {
        console.log('Error updating users')
        console.log(e)
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await NextCors(req, res, {
        // Options
        methods: ['POST', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    let transporter: nodemailer.Transporter

    try {
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // generated ethereal user
                pass: process.env.SMTP_PASSWORD, // generated ethereal password
            },
        })
    } catch (e) {
        console.log('Error creating transporter')
        return res
            .status(400)
            .json({ success: false, error: (e as any).toString() })
    }

    const client = await clientPromise
    const userCollection = await makeUserCollection(client)
    const content = await prepareContent()
    const users = await getUsers(userCollection)
    const promises: Promise<SMTPTransport.SentMessageInfo>[] = []

    for (const user of users) {
        // Check if the content even exists
        if (!content[user.level]) {
            continue
        }

        const emailHtml = createWeeklyEmail({
            body: content[user.level].body,
            title: content[user.level].title,
            button_text: 'READ MORE',
            button_link: content[user.level].link,
            image_url: content[user.level].imageUrl,
        })
        const result = transporter.sendMail({
            from: '"Flaq Academy " <welcome@flaq.club>', // sender address
            replyTo: 'content@flaq.club',
            to: user.email, // list of  receivers
            subject: `Flaq - ${content[user.level].title}`, // Subject line
            html: emailHtml, // html  body
        })
        promises.push(result)
    }
    const result = await Promise.all(promises)
    let updateResult
    try {
        updateResult = await updateUserLevels(users, userCollection)
        await transporter.sendMail({
            from: '"Flaq Academy " <welcome@flaq.club>', // sender address
            replyTo: 'content@flaq.club',
            to: 'ashwin@flaq.club,content@flaq.club', // list of  receivers
            subject: `Flaq - Email Sent Report`, // Subject line
            html: `<h2>Email Report</h2> - <br/><br/><pre>${JSON.stringify(
                result,
                null,
                3
            )}</pre><br/><br/><h2>Level Update Report</h2> - <br/><br/><pre>${JSON.stringify(
                updateResult,
                null,
                3
            )}</pre> <br/> Flaq Tech`, // html  body
        })
    } catch (e) {
        console.log('Error')
        console.log(e)
    }
    const blastCollection: Collection = await makeBlastCollection(client)
    await blastCollection.insertOne({
        createdAt: new Date(),
        count: result.length,
    })
    return res.status(200).json({ success: true, result })
}
