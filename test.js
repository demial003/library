const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, not read yet`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
  myLibrary.push(Book);
  myLibrary.push(Book);
  myLibrary.push(Book);
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295);
addBookToLibrary(theHobbit);

for (let book of myLibrary) {
  console.log(book.info());
}
