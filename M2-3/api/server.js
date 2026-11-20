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

//da error por la mierda del array con import
//modificar array no igualarlo con splice o lo que sea
app.get("/adopt/", (request, response) => {
    let animalName = request.query.name
    // animals = animals.filter(animal => animal.name != animalName)

    response.send(animals)
})
















































app.listen(3000)