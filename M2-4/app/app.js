const baseURL = "http://localhost:3000"

fetch(baseURL + "/people")
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


function savePerson() {
    fetch(baseURL + "/people", {
        method: "POST",
        headers: {
           "Content-Type": "application.json"
        },
        body: JSON.stringify({
            name: "Carlos",
            surname: "Sainz",
            age: 17
        }),
    })
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

}
