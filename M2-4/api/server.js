import express from "express"
import cors from "cors"
import people from "./db.js"


const app = express()
app.use(cors())

app.get("/people", (request, response) => {
    response.send(people)
})

app.post("/people", (request, response) => {
    people.push(request.query)
    response.send(people)
})

app.put("/people", (request, response) => {
    let name = request.query.name
    people.forEach(person => {
        if (name == person.name) {
            person.surname = request.query.surname
            person.age = request.query.age
        }
    });

    response.send(people)
})

app.delete("/people", (request, response) => {
    let name = request.query.name
    people.forEach((person, index) => {
        if (name == person.name) {
            people.splice(index, 1)
        }
    });
    
    response.send(people)
})

app.listen(3000)