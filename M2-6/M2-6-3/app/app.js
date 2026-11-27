const baseURL = "http://localhost:3000"

let seriesList = await getData(baseURL + `/series`)

let searchButton = document.getElementById("search-btn")
let addButton = document.getElementById("add-btn")


async function getData(url) {
    const result = await fetch(url)
    return await result.json()
}

async function postData(url, body) {
    const result = await fetch(url , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    return await result.json()
}

function displaySeries(series) {
    document.getElementById("series-container").innerHTML = ""
    series.forEach(serie => {
        document.getElementById("series-container").innerHTML += `
        <div class="serie">
            <h2>${serie.title}</h2>
            <p>${serie.platform}</p>
            <p>${serie.grade}</p>
        </div>
        `
    });
}

async function searchByTitle() {
    let searchValue = document.getElementById("search-input").value
    
    let searchedSeries = await getData(baseURL + `/series/${searchValue}`)

    displaySeries(searchedSeries)
}

function addEventToButton() {
    searchButton.addEventListener("click", () => {searchByTitle()})
    addButton.addEventListener("click", () => {addSerie()})

}

async function addSerie() {
    let titleValue = document.getElementById("title-input").value
    let platformValue = document.getElementById("platform-input").value
    let gradeValue = document.getElementById("grade-input").value

    let serie = {
        title: titleValue,
        platform: platformValue,
        grade: gradeValue
    }

    let apiResponse = await postData(baseURL+ `/addSerie`, serie)

    if (apiResponse.acknowledged) {
        serie._id = apiResponse.insertedId
        seriesList.push(serie)
        displaySeries(seriesList)
    }
}

addEventToButton()
displaySeries(seriesList)