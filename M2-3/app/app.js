const baseURL = "http://localhost:3000"

displayAnimals()

function getHTML(id) {
    return document.getElementById(id)
}

async function displayAnimals() {
    const result = await fetch(baseURL)
    const data = await result.json()
    getHTML("animals-container").innerHTML = ""
    data.forEach((animal) => {
        getHTML("animals-container").innerHTML += `
            <div id="animal-${animal.name}">
                <h2>${animal.name}</h2>
                <p>${animal.age} años</p>
                <p>${animal.species}</p>
            </div>
            `
    });

    getHTML("add-animal-btn").addEventListener("click", () => {
        addAnimal()
    })
}


async function addAnimal() {
    let animalNameValue = getHTML("name-input").value
    let animalAgeValue = getHTML("age-input").value
    let animalspeciesValue = getHTML("species-input").value

    const result = await fetch(baseURL + `/add-animal/?name=${animalNameValue}&age=${animalAgeValue}&species=${animalspeciesValue}`)
    displayAnimals()
    return await result.json()


}


