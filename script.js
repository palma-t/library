const myLibrary = [
    {
        title: "Narnia",
        author: "C.S. Lewis",
        pages: 1097,
        readingStatus: "Yes",
    },
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        pages: 9346,
        readingStatus: "Yes",
    },
]
const bookShelf = document.querySelector(".bookshelf");

function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
    this.info = function() {
        return this.title + "by " + this.author + ", " + pages + " pages, " + this.readingStatus
    }
}

function addBookToLibrary(title, author, pages, readingStatus) {
    let newBook = new Book(title, author, pages, readingStatus);
    myLibrary.push(newBook);
}

// Gestion de la boîte de dialogue
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


// Gestion de l'envoi du formulaire
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

const addBook = document.querySelector("#addBook");

addBook.addEventListener("click", () => {
    addBookToLibrary(title.value, author.value, pages.value, "Yes");
    dialog.close();
    bookShelf.innerHTML = '';
    showLibrary(myLibrary);
})

// Gestion de l'affichage des livres

function showLibrary(array) {
    for (const book of array){
        let card = document.createElement("div");
        let tit = document.createElement("h2");
        let aut = document.createElement("h3");
        let bottom = document.createElement("div");
        let pag = document.createElement("div");

        let del = document.createElement("button");
        del.classList.add("del");
        del.innerHTML = '<img src="icons/trash-can-outline.svg" alt="Delete book">';        

        card.classList.add("card");
        bottom.classList.add("bottom");

        tit.innerText = book.title;
        aut.innerText = book.author;
        pag.innerText = book.pages + " p.";

        bottom.appendChild(pag);
        bottom.appendChild(del);

        card.appendChild(tit);
        card.appendChild(aut);
        card.appendChild(bottom);

        bookShelf.appendChild(card);
    }
}

showLibrary(myLibrary)

// Gestion de la suppression d'un livre

const removeButtons = document.querySelectorAll(".del");
const buttonArray = [...removeButtons];

function deleteItem(index){
    myLibrary.splice(index, 1);
    bookShelf.innerHTML = '';
    showLibrary(myLibrary);
}

buttonArray.forEach(function(button, index){
    button.addEventListener("click", function(){
        deleteItem(index);
    });
});