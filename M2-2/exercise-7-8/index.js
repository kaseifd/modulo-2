import express, { request } from "express"

const app = express()



// Ejercicio 7
import { getRandomNumber } from "./functions.js"

let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

app.get("/ejercicio-7-8", (request, response) => {
    nums[getRandomNumber()]++
    response.send(nums)
})

// Ejercicio 8

app.get("/ejercicio-7-8/borrar/:numero", (request, response) => {
    nums[request.params.numero] = 0 
    response.send(nums)
})

app.listen(3000)