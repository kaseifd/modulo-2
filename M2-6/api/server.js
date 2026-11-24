import express from "express"
import cors from "cors"
import { MongoClient } from "mongodb"

const app = express()
app.use(cors())

app.listen(3000)