const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
const toggleStatus = (tr) => {
  const createButton = document.createElement('button');

  createButton.addEventListener('click', () => {
    const status = tr.querySelector('td:nth-child(4)');
    if (this.read === 'Yes') {
      status.textContent = 'No';
      this.read = 'No';
    } else {
      status.textContent = 'Yes';
      this.read = 'Yes';
    }
  });

  createButton.textContent = 'Toggle Status';
  createButton.setAttribute('class', 'btn btn-primary');
  tr.appendChild(createButton);
};

const deleteBook = (tr) => {
  const createButton = document.createElement('button');

  createButton.addEventListener('click', () => {
    tr.parentNode.removeChild(tr);
    if (myLibrary.indexOf(this) !== -1) {
      myLibrary.splice(myLibrary.indexOf(this), 1);
    }
  });

  createButton.textContent = 'Delete';
  createButton.setAttribute('class', 'btn btn-danger mr-2 ml-2');
  tr.appendChild(createButton);
};

// Display Books
const displayBook = (book) => {
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
  deleteBook(tr);
  toggleStatus(tr);
  tbody.appendChild(tr);
};
// }

const book1 = new Book('Lord of the Rings', 'R.R. Tolkein', 400, 'Yes');
const book2 = new Book('The Story', 'Steve Nash', 40, 'No');

myLibrary.push(book1, book2);
myLibrary.forEach((book) => {
  displayBook(book);
});

const newForm = document.forms[0];
document.querySelector('#form-btn').addEventListener('click', () => {
  newForm.classList.toggle('d-none');
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
    read = 'No';
  }

  const book = new Book(title, author, pages, read);
  displayBook(book);
  myLibrary.push(book);
});

// Show Form
document.querySelector('#form-btn').addEventListener('click', () => {
  newForm.style.display = 'block';
});

// Hide Form
document.querySelector('#cancel').addEventListener('click', () => {
  newForm.style.display = 'none';
});
