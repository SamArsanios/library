const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

displayBook = (book) => {
    const tbody = document.querySelector('#tbody');
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const read = document.createElement('td');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(read);
    tbody.appendChild(tr);
}

const book1 = new Book('Lord of the Rings', 'R.R. Tolkein', 400, 'Yes');
const book2 = new Book('The Story', 'Steve Nash', 40, 'No');

myLibrary.push(book1, book2);
myLibrary.forEach(book => {
    displayBook(book);
});
