import express from "express"
import cors from "cors"
import { MongoClient } from "mongodb"

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.listen(3000)

let db = await connectDb()

async function connectDb() {
     const client = await MongoClient.connect("mongodb://admin:admin123@127.0.0.1:27017")
     return client.db("tv")
}

// codigo para meter info en la db

//  db.series.insertMany([
//     {
//         title: "Stranger Things",
//         platform: "Netflix",
//         grade: 9.2
//     },
//     {
//         title: "Dark",
//         platform: "Netflix",
//         grade: 9.5
//     },
//     {
//         title: "The Last of Us",
//         platform: "HBO Max",
//         grade: 9.3
//     },
//     {
//         title: "The Boys",
//         platform: "Prime Video",
//         grade: 8.8
//     },
//     {
//         title: "Juego de tronos",
//         platform: "HBO Max",
//         grade: 9.4
//     },
//     {
//         title: "The Mandalorian",
//         platform: "Disney+",
//         grade: 8.7
//     },
//     {
//         title: "Arcane",
//         platform: "Netflix",
//         grade: 9.6
//     },
//     {
//         title: "Fallout",
//         platform: "Prime Video",
//         grade: 8.9
//     },
//     {
//         title: "La casa de papel",
//         platform: "Netflix",
//         grade: 7.8
//     },
//     {
//         title: "La casa del dragón",
//         platform: "HBO Max",
//         grade: 8.5
//     },
//     {
//         title: "Loki",
//         platform: "Disney+",
//         grade: 8.3
//     },
//     {
//         title: "The Witcher",
//         platform: "Netflix",
//         grade: 7.2
//     },
//     {
//         title: "Severance",
//         platform: "Apple TV+",
//         grade: 9.1
//     },
//     {
//         title: "The Bear",
//         platform: "Disney+",
//         grade: 8.9
//     },
//     {
//         title: "Silo",
//         platform: "Apple TV+",
//         grade: 8.4
//     },
//     {
//         title: "Los anillos de poder",
//         platform: "Prime Video",
//         grade: 6.5
//     },
//     {
//         title: "Miércoles",
//         platform: "Netflix",
//         grade: 7.9
//     },
//     {
//         title: "Chernobyl",
//         platform: "HBO Max",
//         grade: 9.7
//     },
//     {
//         title: "Andor",
//         platform: "Disney+",
//         grade: 9.0
//     },
//     {
//         title: "Good Omens",
//         platform: "Prime Video",
//         grade: 8.2
//     }
// ])

app.get("/series", async (req, res) => {
     let series = await db.collection("series").find().toArray()
     res.send(series)
})

app.get("/series/:title", async (req, res) => {
     let searchedTitle = req.params.title
     let selectedSeries = await db.collection("series").find({ title: { $regex: searchedTitle, $options: "i" } }).toArray()
     res.send(selectedSeries)
})