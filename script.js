class Library {
  myLibrary = [];
  constructor() {}

  createBook = (name, author, title, read) => {
    this.name = name;
    this.author = author;
    this.title = title;
    this.read = read;
    console.log(this.myLibrary);

    return { name, author, title, read };
  };

  addBookToLibrary = (Book) => {
    this.myLibrary.push(Book);
    Book.index = this.myLibrary.length - 1;
  };

  displayLibrary = () => {
    for (let book of this.myLibrary) {
      this.createCard(book);
    }
  };

  createCard = (Book) => {
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
      this.myLibrary.splice(Book.index, 1);
      console.log(this.myLibrary);
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
  };

  render = () => {
    const btn = document.querySelector(".display");

    btn.addEventListener("click", () => {
      library.displayLibrary();
    });
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

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      dialog.close();
    });
  };
}

let library = new Library();
let hob = library.createBook("The Hobbit", "J.R.R Tolkin", 295, 150);
let xdd = library.createBook("xdd", "xdd", 123, 12);
library.addBookToLibrary(hob);
library.addBookToLibrary(xdd);
library.render();
