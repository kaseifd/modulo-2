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
                <p id="book-${index}-status">${book.status}</p>
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
    fetch(baseURL + `/api/edit-book/${bookTitle}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(editedBook => {
        console.log(editedBook);
        
        document.getElementById(`book-${index}-status`).innerText = editedBook.status

        editedBook.status == "Leído" ? button.textContent = "Marcar como no leído" : button.textContent = "Marcar como leído"
    })
}