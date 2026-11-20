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

app.get("/adopt/", (request, response) => {
    let animalName = request.query.name
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name == animalName) {
            animals.splice(i, 1)
            i = animals.length
        }    
    }

    response.send(animals)
})
















































app.listen(3000)