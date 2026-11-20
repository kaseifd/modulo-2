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

app.get("/ejercicio-2/:maxNumber", (request, response) => {
    let maxNumber = request.params.maxNumber
    response.send(randomNumber(maxNumber))
})


// Ejercicio 3

app.get("/ejercicio-3/person", (request, response) => {
    let names = ["Marta", "Jorge", "Hugo", "Carlos", "Melisa"]
    response.send(names)
})


app.get("/ejercicio-3/person/:personName", (request, response) => {
    let personName = request.params.personName
    let responseError = "La persona no existe"

    for (let i = 0; i < names.length; i++) {
        if (personName.toLowerCase() == names[i].toLowerCase()) {
            response.send(`${names[i]} existe`)
        }
    }

    response.send(responseError)
})


// Ejercicio 4

import { saludarEnExpress } from "./functions.js"

app.get("/ejercicio-4/saludar", (request, response) => {
    response.send(saludarEnExpress())
})


// Ejercicio 5

let person = {
    name: null,
    surname: null,
    age: null
}


app.get("/ejercicio-5/person/", (request, response) => {
    response.send(person)
})

app.get("/ejercicio-5/register-name/:name", (request, response) => {
    person.name = request.params.name
    response.send(person)
})

app.get("/ejercicio-5/register-surname/:surname", (request, response) => {
    person.surname = request.params.surname
    response.send(person)
})

app.get("/ejercicio-5/register-age/:age", (request, response) => {
    person.age = parseInt(request.params.age)
    response.send(person)
})


// Ejercicio 6

let classroomNames = ["Marta", "Jorge", "Hugo", "Carlos", "Melisa"]

app.get("/ejercicio-6/classroom", (request, response) => {
    response.send(classroomNames)
})

app.get("/ejercicio-6/add-teacher/:teacher", (request, response) => {
    classroomNames.push(request.params.teacher)
    response.send(classroomNames)
})

app.listen(3000)