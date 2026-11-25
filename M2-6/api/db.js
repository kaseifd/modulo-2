import { MongoClient } from "mongodb"

export async function connectDb() {
    try {
        const client = await MongoClient.connect("mongodb://admin:admin123@127.0.0.1:27017");
        return client.db("shop")
    } catch (error) {
        console.log(error, "Fail to connect");

    }

}

export let products = [
    {
        type: "table",
        size: {
            heightInCm: 40,
            widthInCm: 40,
            lengthInCm: 40,
        },
        color: "black",
        material: ["iron", "glass"],
        legNumber: 3,
    },
    {
        type: "table",
        size: {
            heightInCm: 70,
            widthInCm: 90,
            lengthInCm: 60,
        },
        color: "white",
        material: "pine",
        legNumber: 3,
    },
    {
        type: "table",
        size: {
            heightInCm: 60,
            widthInCm: 120,
            lengthInCm: 170,
        },
        color: "brown",
        material: "olive",
        legNumber: 3,
    },
]