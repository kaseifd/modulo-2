const baseURL = "http://localhost:3000"

displayBooks("/api/books", "GET")

function displayBooks(url, method) {
    fetch(baseURL + url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(books => {
        document.getElementById("books-container").innerHTML = ""
        books.forEach((book, index) => {
            document.getElementById("books-container").innerHTML += `
            <div class="book" id="book-${index}">
                <h2 id="book-${index}-title">${book.title}</h2>
                <p>${book.status}</p>
                <button class="delete-book-btn" onclick="deleteBook(${index})">Borrar libro</button>
                <button class="edit-book-btn" onclick="editBookStatus(${index}, this)">Marcar como leído</button>
            </div>
            `
        });
    })
}

function deleteBook(index) {
    let bookTitle = document.getElementById(`book-${index}-title`).innerText
    displayBooks(`/api/delete-book/${bookTitle}`, "DELETE")
}

function editBookStatus(index, button) {
    let bookTitle = document.getElementById(`book-${index}-title`).innerText
    console.log(button.textContent); // esto no me sirve porque el boton pulsado no es el mismo que el que aparece luego en el dom // buscar otra solucion mañana


    // Se puede actualizar solo el elemento pulsado? o se tienen que cargar todos los libros otra vez?
    displayBooks(`/api/edit-book/${bookTitle}`, "PUT")
    button.textContent = "Marcar como no leído"
    console.log(button.textContent);
    
}