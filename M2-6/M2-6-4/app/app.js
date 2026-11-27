const baseURL = "http://localhost:3000"

let menusList = await getData(baseURL + "/restaurant/menus")

async function getData(url) {
    const result = await fetch(url)
    return await result.json()
}

function addEventsToButtons(buttonId, eventType, callback) {
    document.getElementById(buttonId).addEventListener(eventType, callback)
}

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


async function addMenu() {
    console.log("añadir");
    
}

async function editMenu() {
    console.log("editar");
    
}

async function deleteMenu() {
    console.log("borrar");  
}

displayMenus(menusList)
addEventsToButtons("add-menu-btn", "click", addMenu)
addEventsToButtons("edit-menu-btn", "click", editMenu)
// addEventsToButtons("delete-menu-btn", "click", deleteMenu)