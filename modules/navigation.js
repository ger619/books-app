/** Navigation barn */
const bookListDiv = document.getElementById('table');
const formDiv = document.getElementById('form');
const contactDiv = document.getElementById('contact');
const contactButton = document.getElementById('li-contact');
const liForm = document.getElementById('li-list');
const listAdd = document.getElementById('li-add');

function constructListPage() {
  bookListDiv.style.display = 'block';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'none';
}

function constructFormPage() {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'block';
  contactDiv.style.display = 'none';
}

function constructContactPage() {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'block';
}

contactButton.addEventListener('click', constructContactPage);
listAdd.addEventListener('click', constructFormPage);
liForm.addEventListener('click', constructListPage);

const d = new Date('2015-03-25');
document.getElementById('demo').innerHTML = d;

export { constructListPage, constructFormPage, constructContactPage };