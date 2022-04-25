import Book from './modules/books.js';
import BookStore from './modules/BookStore.js';
import showBooks from './modules/showBooks.js';

import { DateTime } from './modules/luxon.js';

const bookListDiv = document.getElementById('table');
const formDiv = document.getElementById('form');
const contactDiv = document.getElementById('contact');
const contactButton = document.getElementById('li-contact');
const liForm = document.getElementById('li-list');
const listAdd = document.getElementById('li-add');

const constructListPage = () => {
  bookListDiv.style.display = 'block';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'none';
};
const constructFormPage = () => {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'block';
  contactDiv.style.display = 'none';
};

const constructContactPage = () => {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'block';
};

contactButton.addEventListener('click', constructContactPage);
listAdd.addEventListener('click', constructFormPage);
liForm.addEventListener('click', constructListPage);

const getTime = () => {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
};

const time = document.getElementById('demo');
setInterval(() => {
  time.innerHTML = getTime();
}, 1000);

document.addEventListener('DOMContentLoaded', showBooks.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  showBooks.addBookToList(book);
  BookStore.addBook(book);
  showBooks.clearFields();
  e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  showBooks.deleteBook(e.target);

  BookStore.removeBook(e.target.parentElement.previousElementSibling.textContent);
});