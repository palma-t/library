const myLibrary = []

const bookShelf = document.querySelector(".bookshelf");

function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
}

Book.prototype.toggleReadStatus = function () {
    this.readingStatus = !this.readingStatus;
}

addBookToLibrary("Narnia","C.S. Lewis", 1097, true);
addBookToLibrary("Harry Potter","J.K. Rowling", 9436, false);

function addBookToLibrary(title, author, pages, readingStatus) {
    let newBook = new Book(title, author, pages, readingStatus);
    console.log(newBook);
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
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let readingStatus = document.querySelector("#readingStatus").checked;

    addBookToLibrary(title.value, author.value, pages.value, readingStatus);
    dialog.close();
    bookShelf.innerHTML = '';
    showLibrary(myLibrary);
})

function deleteItem(index){
    myLibrary.splice(index, 1);
    bookShelf.innerHTML = '';
    showLibrary(myLibrary);
}

function createLibrary(array){
    for (const book of array){
        let card = document.createElement("div");
        
        let tit = document.createElement("h2");
        let aut = document.createElement("h3");
        let bottom = document.createElement("div");
        let subBottom = document.createElement("div");
        let pag = document.createElement("div");
        let read = document.createElement("div");
        read.innerHTML = 
        `<label class="toggle">
            <input type="checkbox" checked>
            <span class="slider"></span>
        </label>`;

        //fonctionne pas, ça fait en double
        read.addEventListener("click", function() {
            book.toggleReadStatus();
            console.log(book);
        })

        let del = document.createElement("button");
        del.classList.add("del");
        del.innerHTML = '<img src="icons/trash-can-outline.svg" alt="Delete book">';        

        del.addEventListener("click", function(){
                deleteItem(book);
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
    };
}


function showLibrary(array) {
    createLibrary(array);
}


showLibrary(myLibrary)

// Gestion de la suppression d'un livre

/* const removeButtons = document.querySelectorAll(".del");
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
*/

/*
const switchButtons = document.querySelectorAll('.toggle input[type="checkbox"]');
const switchArray = [...switchButtons];

switchArray.forEach(function(checkbox, index){
    checkbox.addEventListener("click", function(){
        myLibrary[index].toggleReadStatus();
        console.log(myLibrary[index]);
       // checkbox.checked = myLibrary[index].readingStatus;
    });
});
*/

/*
Bugs to fix
- can't delete more than one card;
- toggle doesn't respect checked or not when adding book
Solution: putting delete and toggle inside showLibrary ?
*/