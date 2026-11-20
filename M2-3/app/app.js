const baseURL = "http://localhost:3000"

displayAnimals(await getAnimalsData(baseURL))

function getHTML(id) {
    return document.getElementById(id)
}

async function getAnimalsData(url) {
    const result = await fetch(url)
    return await result.json()
}

function displayAnimals(data) {
    getHTML("animals-container").innerHTML = ""
    data.forEach((animal, index) => {
        getHTML("animals-container").innerHTML += `
            <div id="animal-${animal.name}">
                <h2>${animal.name}</h2>
                <p>${animal.age} años</p>
                <p>${animal.species}</p>
                <button id="adopt-${index}-btn" >Adoptar</button>
            </div>
            `
    });

    addEventToAdoptButton(data)

}

function addEventToAdoptButton(data) {
    data.forEach((animal, index) => {
        let animalName = animal.name
        getHTML(`adopt-${index}-btn`).addEventListener("click", async () => {
            displayAnimals(await getAnimalsData(baseURL + `/adopt/?name=${animalName}`))
        })
    });
}



getHTML("add-animal-btn").addEventListener("click", () => {
    addAnimal()
})

async function addAnimal() {
    let animalNameValue = getHTML("name-input").value
    let animalAgeValue = getHTML("age-input").value
    let animalspeciesValue = getHTML("species-input").value

    const addAnimalUrl = baseURL + `/add-animal/?name=${animalNameValue}&age=${animalAgeValue}&species=${animalspeciesValue}`
    console.log(addAnimalUrl);

    displayAnimals(await getAnimalsData(addAnimalUrl))

}


