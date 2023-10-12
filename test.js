const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.read = pages == read ? true : false;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, not read yet`;
  };
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295, 150);
addBookToLibrary(theHobbit);

function addBookToLibrary(Book) {
  myLibrary.push(Book);
  myLibrary.push(Book);
  myLibrary.push(Book);
  myLibrary.push(Book);
}

function displayLibrary() {
  for (let book of myLibrary) {
    console.log(book.info());
  }
}

const btn = document.querySelector(".display");

btn.addEventListener("click", () => {
  const book = myLibrary[0];
  createCard(book.title, book.author, book.pages, book.read);
});

function createCard(name, author, pages, read) {
  const cards = document.querySelector(".cards");
  const display = document.createElement("div");
  display.className = "display-card";
  const bookName = document.createElement("p");
  bookName.textContent = name;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = author;

  const bookPages = document.createElement("p");
  bookPages.textContent = pages;

  const bookRead = document.createElement("p");
  bookRead.textContent = read;

  display.appendChild(bookName);
  display.appendChild(bookAuthor);
  display.appendChild(bookPages);
  display.appendChild(bookRead);

  cards.appendChild(display);
}
