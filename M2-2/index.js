import express, { request, response } from "express"
import cors from "cors"

const app = express()
app.use(cors())


// Ejercicio 1

app.get("/", (request, response) => {
    response.send("<h1>Hola Mundo desde express</h1>")
})



// Ejercicio 2
function randomNumber(maxNumber) {
    return parseInt(Math.random() * maxNumber + 1)
}

app.get("/:maxNumber", (request, response) => {
    let maxNumber = request.params.maxNumber
    response.send(randomNumber(maxNumber))
})


// Ejercicio 3

let names = ["Marta", "Jorge", "Hugo", "Carlos", "Melisa"]

app.get("/person", (request, response) => {
    response.send(names)
})

// app.get("/person/:personName", (request, response) => {
//     let personName = request.params.personName



//     response.send(personName)
// })

app.listen(3000)