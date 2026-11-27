import express from "express"
import cors from "cors"
import { MongoClient } from "mongodb"

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json()) 
app.listen(3000)

// db.menus.insertMany([{
//          number: 1,
//          firstCourse: "Ensalada César",
//          secondCourse: "Pollo asado con patatas",
//          dessert: "Tarta de queso",
//          price: 15.50
//      },
//      {
//          number: 2,
//          firstCourse: "Crema de calabaza",
//          secondCourse: "Salmón a la plancha",
//          dessert: "Flan de vainilla",
//          price: 18.00
//      },
//      {
//          number: 3,
//          firstCourse: "Macarrones a la boloñesa",
//          secondCourse: "Filete de ternera",
//          dessert: "Helado de chocolate",
//          price: 16.50
//      },
//      {
//          number: 4,
//          firstCourse: "Gazpacho",
//          secondCourse: "Merluza al horno",
//          dessert: "Arroz con leche",
//          price: 17.00
//      },
//      {
//          number: 5,
//          firstCourse: "Risotto de setas",
//          secondCourse: "Berenjenas rellenas",
//          dessert: "Tiramisú",
//          price: 14.50
//      },
//      {
//          number: 6,
//          firstCourse: "Sopa de verduras",
//          secondCourse: "Lomo con salsa de pimienta",
//          dessert: "Mousse de chocolate",
//          price: 16.00
//      },
//      {
//          number: 7,
//          firstCourse: "Ensalada de burrata",
//          secondCourse: "Entrecot con patatas",
//          dessert: "Brownie",
//          price: 22.50
//      },
//      {
//          number: 8,
//          firstCourse: "Lentejas estofadas",
//          secondCourse: "Tortilla de patatas",
//          dessert: "Fruta de temporada",
//          price: 12.50
//      }
//  ])

let db = await connectDb()

async function connectDb() {
    const client = await MongoClient.connect("mongodb://admin:admin123@127.0.0.1:27017")
    return client.db("restaurant")
}



app.get("/restaurant/menus", async (req, res) => {
    let menus = await db.collection("menus").find().toArray()
    res.send(menus)
})

app.post("/restaurant/add-menu", async (req, res) => {
    let newMenu = req.body
    let response = await db.collection("menus").insertOne(newMenu)
    res.send(response)
})

app.put("/restaurant/edit-menu", async (req, res) => {
    let editedMenu = req.body

//     esta forma tiene editedMenu {
//     number: 9,
//     firstCourse: "Croquetas de jamón",
//     secondCourse: "Bacalao al pil pil",
//     dessert: "Tarta de manzana",
//     price: 19.50
//     }

    let response = await db.collection("menus").updateOne({number: editedMenu.number}, 
    {$set: {
        firstCourse: editedMenu.firstCourse, 
        secondCourse: editedMenu.secondCourse, 
        dessert: editedMenu.dessert, 
        price: editedMenu.price
        }
    })

    res.send(response)
})


app.delete("/restaurant/delete-menu", async (req, res) => {
    let selectedMenu = req.body
    let response = await db.collection("menus").deleteOne({number: selectedMenu.number})
    res.send(response)
})