const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

displayBook = () => {
    const tbody = document.querySelector('#tbody');
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const read = document.createElement('td'); 

    title.textContent = this.title;
    author.textContent = this.author;
    pages.textContent = this.pages;
    pages.textContent this.read;
}