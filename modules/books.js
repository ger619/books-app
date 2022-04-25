/* eslint-disable max-classes-per-file */
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class bookStore {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = bookStore.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(author) {
        const books = bookStore.getBooks();

        books.forEach((book, index) => {
            if (book.author === author) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

class showBooks {
    static displayBooks() {
        const books = bookStore.getBooks();

        books.forEach((book) => showBooks.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title} <b>by</b></td>
        <td>${book.author}</td>
        <td><button class="delete">Remove book</button></td>
      `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
    }
}

document.addEventListener('DOMContentLoaded', showBooks.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const book = new Book(title, author);
    showBooks.addBookToList(book);
    bookStore.addBook(book);
    showBooks.clearFields();
    e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
    showBooks.deleteBook(e.target);

    bookStore.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

export default Book;