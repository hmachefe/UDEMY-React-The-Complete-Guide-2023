// POST /api/new-meetup
// Will be reached by the front-end through await fetch("/api/new-meetup");

import { MongoClient } from "mongodb";

async function handler(request, response) {
    if (request.method === "POST") {
        const data = request.body;

        try {
            const client = await MongoClient.connect(
                "mongodb://hugomachefer:vzY78MBcRdw4lFhj@cluster0-shard-00-00.2jphb.mongodb.net:27017,cluster0-shard-00-01.2jphb.mongodb.net:27017,cluster0-shard-00-02.2jphb.mongodb.net:27017/?ssl=true&replicaSet=atlas-5092v5-shard-0&authSource=admin&retryWrites=true&w=majority"
            );

            const db = client.db("meetups"); // Replace with your database name
            const meetupsCollection = db.collection("meetups"); // Replace with your collection name

            // Insert data into the collection
            const result = await meetupsCollection.insertOne(data);
            console.log("Insert result:", result);

            client.close();
            response.status(201).json({ message: "Meetup inserted successfully!" });
        } catch (error) {
            console.error("Database connection error:", error);
            response.status(500).json({ message: "Failed to connect to the database." });
        }
    } else {
        response.setHeader("Allow", ["POST"]);
        response.status(405).end(`Method ${request.method} Not Allowed`);
    }
}

export default handler;
