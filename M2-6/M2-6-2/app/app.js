const baseURL = "http://localhost:3000"

displayBooks()

function displayBooks() {
    fetch(baseURL + "/api/books").then(res => res.json()).then(books => {
        books.forEach(book => {
            document.getElementById("books-container").innerHTML += `
            <div class="book">
                <h2>${book.title}</h2>
                <p>${book.status}</p>
                <button id="delete-book-btn" onclick="deleteBook()">Borrar libro</button>
                <button id="edit-book-btn" onclick="editBookStatus()">Marcar como leído</button>
            </div>
            `
        });
    })
}

