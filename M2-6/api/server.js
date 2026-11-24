import express from "express"
import cors from "cors"
import { tables } from "./db.js"
import { connectDb } from "./db.js"

const app = express()
app.use(cors())



let db = await connectDb()

// Crear la base de datos de manera "fácil"
app.post("/create-data", async (req, res) => {
    let result = await db.collection("products").insertMany(tables)
    res.send(result)
})


app.get("/api/tables", (req, res)=> {
    let tables = db.collection("products").find()
    res.send()
})

app.listen(3000)