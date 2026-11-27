const baseURL = "http://localhost:3000"

let series = await getData(baseURL + `/series`)
let searchButton = document.getElementById("search-btn")

async function getData(url) {
    const result = await fetch(url)
    return await result.json()
}

async function displaySeries(series) {
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
    console.log(searchValue);
    
    let searchedSeries = await getData(baseURL + `/series/${searchValue}`)
    displaySeries(searchedSeries)
}

function addEventToButton() {
    searchButton.addEventListener("click", () => {searchByTitle()} )
}

addEventToButton()
displaySeries(series)