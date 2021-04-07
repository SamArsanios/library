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

newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = newForm.querySelector('input[name="title"').value;
    const author = newForm.querySelector('input[name="author"').value;
    const pages = newForm.querySelector('input[name="pages"').value;
    const readValues = newForm.querySelectorAll('input[name="read"');

    let read;
    if (readValues[0].checked) {
        read = 'Yes';
    } else {
        read = 'No'
    }

    const book = new Book(title, author, pages, read);
    displayBook(book);
    myLibrary.push(book);

});