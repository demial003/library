const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.finished = true;
  this.index = 0;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, not read yet`;
  };
}

Book.prototype.readBook = function () {
  this.finished = !this.finished;
};

let theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295, 150);
let xdd = new Book("xdd", "xdd", 123, 12);
addBookToLibrary(theHobbit);
addBookToLibrary(xdd);
console.log(theHobbit);

function addBookToLibrary(Book) {
  myLibrary.push(Book);
  Book.index = myLibrary.length - 1;
  Book.readBook();
  console.log(Book.index);
}

function displayLibrary() {
  for (let book of myLibrary) {
    createCard(book);
  }
}

const btn = document.querySelector(".display");

btn.addEventListener("click", () => {
  displayLibrary();
});

function createCard(Book) {
  const cards = document.querySelector(".cards");
  const display = document.createElement("div");
  display.className = "display-card";
  const bookName = document.createElement("p");
  bookName.textContent = Book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = Book.author;

  const bookPages = document.createElement("p");
  bookPages.textContent = Book.pages;

  const bookRead = document.createElement("p");
  bookRead.textContent = Book.read;

  const remove = document.createElement("button");
  remove.textContent = "Remove from Library";

  const readStatus = document.createElement("button");
  readStatus.className = "toggle";

  remove.addEventListener("click", () => {
    myLibrary.splice(Book.index, 1);
    console.log(myLibrary);
    display.remove();
  });

  readStatus.addEventListener("click", () => {
    Book.readBook();
    console.log(Book);
  });

  display.appendChild(bookName);
  display.appendChild(bookAuthor);
  display.appendChild(bookPages);
  display.appendChild(bookRead);
  display.appendChild(remove);
  display.appendChild(readStatus);

  cards.appendChild(display);
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector(".submit");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

submitButton.addEventListener("click", () => {
  event.preventDefault();
  dialog.close();
});

console.log(dialog);
console.log(showButton);
console.log(closeButton);
