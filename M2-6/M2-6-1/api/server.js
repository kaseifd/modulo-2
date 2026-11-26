import express from "express"
import cors from "cors"
import { products } from "./db.js"
import { connectDb } from "./db.js"

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

let db = await connectDb()
let newTable = {
    type: "table",
    size: {
        heightInCm: 60,
        widthInCm: 80,
        lengthInCm: 120,
    },
    color: "blue",
    material: ["plastic"],
    legNumber: 4,
}

// Crear la base de datos de manera "fácil"
// app.post("/create-data", async (req, res) => {
//     let result = await db.collection("products").insertMany(products)
//     res.send(result)
// })


app.get("/api/tables", async (req, res) => {
    let tables = await db.collection("products").find({ type: "table" }).toArray()
    res.send(tables)
})

app.post("/api/add", async (req, res) => {
    await db.collection("products").insertOne(req.body)
    let products = await db.collection("products").find().toArray()
    res.send(products)
})

app.put("/api/mod/:color", async (req, res) => {
    await db.collection("products").updateMany({color: req.params.color} ,{$set: {color: "burgundy"}})
    let products = await db.collection("products").find().toArray()
    res.send(products)
})

app.delete("/api/delete/:legs", async (req, res) => {
    await db.collection("products").deleteMany({legNumber: parseInt(req.params.legs)})
    let products = await db.collection("products").find().toArray()
    res.send(products)
})

app.listen(3000)