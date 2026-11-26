import express from "express"
import cors from "corss"
import { MongoClient } from "mongodb"

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

let db = await connectDb()

async function connectDb(){
     const client = await MongoClient.connectDb("mongodb://admin:admin123@127.0.0.1:27017")
     return client.db("tv")
}