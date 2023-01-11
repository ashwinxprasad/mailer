import clientPromise from '../mongodb'

export const makeBlastCollection = async (client: any) => {
    const collection = client.db('flaq').collection('blastReport')
    return collection
}
