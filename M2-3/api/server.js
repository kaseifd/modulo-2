import express from "express"
import cors from "cors"
import animals from "./db.js"

const app = express()
app.use(cors())

app.get("/", (request, response) => {
    response.send(animals)
})


app.get("/add-animal/", (request, response) => {
    animals.push(request.query)
    response.send(animals)
})


//Terminar
app.get("/adopt/", (request, response) => {
    animals.splice()
    request.query.name
    response.send(animals)
})
















































app.listen(3000)