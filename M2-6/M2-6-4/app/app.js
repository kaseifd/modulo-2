const baseURL = "http://localhost:3000"

async function getData(url) {
    const result = await fetch(url)
    return await result.json()
}
let menusList = await getData(baseURL + "/restaurant/menus")

async function displayMenus(menusList) {
    document.getElementById("menus-container").innerHTML = ""
    menusList.forEach(menu => {
        document.getElementById("menus-container").innerHTML += `
        <div class="menu" id="menu-${menu.number}">
            <div>
                <h2>Menú ${menu.number}</h2>
                <p>${menu.firstCourse}</p>
                <p>${menu.secondCourse}</p>
                <p>${menu.dessert}</p>
                <p>${menu.price} €</p>
            </div>
            <button id="delete-menu-${menu.number}-btn">Borrar menú</button>
        </div>
        `
    });
}

displayMenus(menusList)