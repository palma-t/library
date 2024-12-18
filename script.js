const bookShelf = document.querySelector(".bookshelf");

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    deleteBook(index) {
        this.books.splice(index, 1);
       // myLibrary.showLibrary(bookShelf) ?
    }

    getBooks(){
        return this.books;
    }

    showLibrary(bookShelf) {
        bookShelf.innerHTML = '';
        for (const book of this.books){
            let card = document.createElement("div");
            
            let tit = document.createElement("h2");
            let aut = document.createElement("h3");
            let bottom = document.createElement("div");
            let subBottom = document.createElement("div");
            let pag = document.createElement("div");
            let read = document.createElement("div");

            let toggleLabel = document.createElement("label");
            let toggleInput = document.createElement("input");
            let slider = document.createElement("span");

            toggleLabel.classList.add("toggle");
            toggleInput.type = "checkbox";
            toggleInput.checked = book.readingStatus;
            slider.classList.add("slider");

            toggleLabel.appendChild(toggleInput);
            toggleLabel.appendChild(slider);
            read.appendChild(toggleLabel);

            toggleInput.checked = book.readingStatus

            toggleInput.addEventListener("click", function() {
                book.toggleReadStatus();
                toggleInput.checked = book.readingStatus;
            })

            let del = document.createElement("button");
            del.classList.add("del");
            del.innerHTML = '<img src="icons/trash-can-outline.svg" alt="Delete book">';        

            del.addEventListener("click", function(){
                card.remove();
                myLibrary.deleteBook(book);
            }); 

            card.classList.add("card");
            bottom.classList.add("bottom");
            subBottom.classList.add("subBottom")

            tit.innerText = book.title;
            aut.innerText = book.author;
            pag.innerText = book.pages + " p.";

            bottom.appendChild(pag);
            subBottom.appendChild(read);
            subBottom.appendChild(del);
            bottom.appendChild(subBottom);

            card.appendChild(tit);
            card.appendChild(aut);
            card.appendChild(bottom);

            bookShelf.appendChild(card);
        }
    }

}

const myLibrary = new Library();


class Book {
    constructor(title, author, pages, readingStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readingStatus = readingStatus;
    }

    toggleReadStatus() {
        this.readingStatus = !this.readingStatus;
       // console.log(this.readingStatus);
    }
}

let book1 = new Book("Narnia","C.S. Lewis", 1097, true);
let book2 = new Book("Harry Potter","J.K. Rowling", 9436, false);
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// Gestion de la boite de dialogue
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

const addBookBut = document.querySelector("#addBook");

addBookBut.addEventListener("click", () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readingStatus = document.querySelector("#readingStatus").checked;
    let newBook = new Book(title, author, pages, readingStatus);

    myLibrary.addBook(newBook);
    dialog.close();
    myLibrary.showLibrary(bookShelf);
})

// Lancement
myLibrary.showLibrary(bookShelf)