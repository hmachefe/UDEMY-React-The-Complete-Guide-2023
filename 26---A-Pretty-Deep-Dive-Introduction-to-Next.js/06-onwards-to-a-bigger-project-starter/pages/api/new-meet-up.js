// api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(request, response) {
    if (request.method === "POST") {
        const data = request.body;
        // const { title, image, address, description } = data;

        const client = await MongoClient.connect(
            "mongodb+srv://hugomachefer:vzY78MBcRdw4lFhj@cluster0.mongodb.net/?retryWrites=true&w=majority"
        );
        const db = client.db("meetups"); // Replace with your database name
        const meetupsCollection = db.collection("meetups"); // Replace with your collection name, could differ from DB

        const result = meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        response.status(201).json({
            message: "meetup inserted !"
        });
    }
}

export default handler;

