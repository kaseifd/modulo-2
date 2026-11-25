import express, { urlencoded } from "express"
import cors from "cors"
import { MongoClient } from "mongodb"

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// codigo para meter info en la db

//  db.books.insertMany([
//     {
//         title: "Los juegos del hambre",
//         status: "Leído"
//     },

//     {
//         title: "El Principito",
//         status: "No leído"
//     },

//     {
//         title: "1984",
//         status: "Leído"
//     },
//     {
//         title: "La Biblia",
//         status: "No leído"
//     },
//     {
//         title: "Flora, el mundo secret de las plantas",
//         status: "Leído"
//     },
// ]

const client = await MongoClient.connect("mongodb://admin:admin123@127.0.0.1:27017");
let db = client.db("books")




app.get("/api/books", async (req, res) => {
    let books = await db.collection("books").find().toArray()
    res.send(books)
})

app.get("/api/books/:title", async (req, res) => {
    let requestedBook = await db.collection("books").find({ title: { $regex: req.params.title, $options: "i" } }).toArray()
    res.send(requestedBook)
})


app.post("/api/new-book/:title", async (req, res) => {
    let newBook = await db.collection("books").insertOne({ title: req.params.title, status: "No leído" })
    let books = await db.collection("books").find().toArray()
    res.send(books)
})

app.put("/api/edit-book/:title", async (req, res) => {
    await db.collection("books").updateOne({ title: { $regex: req.params.title, $options: "i" } }, { $set: { status: "Leído" } })
    let editedBook = await db.collection("books").find({ title: { $regex: req.params.title, $options: "i" } }).toArray()
    let books = await db.collection("books").find().toArray()
    res.send(books)
})

app.delete("/api/delete-book/:title", async (req, res) => {
    await db.collection("books").deleteOne({ title: { $regex: req.params.title, $options: "i" } })
    let books = await db.collection("books").find().toArray()
    res.send(books)
})


app.listen(3000)