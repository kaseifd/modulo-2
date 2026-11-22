const baseURL = "http://localhost:3000"

fetch(baseURL+ "/people")
    .then(res => res.json())
    .then(data => {
        data.forEach((person, index) => {
            document.getElementById("people-container").innerHTML += `
            <div id="person-${index}">
                <h2>${person.name} ${person.surname}</h2>
                <p>${person.age} años</p>
            </div>`
        });
    })