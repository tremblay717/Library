
// backup code for the form section if the event we want to use it the future. 

const newBook = document.querySelector('#addBook');

// User enters book information in a form that appears when you click "ADD BOOK"
const bookForm = document.createElement('form');

// bookForm.addEventListener('submit', function (e) {
//     e.preventDefault();
// });

// Form is split into 2 div; 

// Left Div
const bookUlLeft = document.createElement('ul');
bookForm.appendChild(bookUlLeft);

// Book Name Section
const bookTitleLi = document.createElement('li');
const bookTitleLabel = document.createElement('label');
bookTitleLabel.textContent = "Book Title:";
const bookTitleInput = document.createElement('input');
bookTitleInput.id = "formBook"
bookTitleInput.type = 'text';

bookTitleLi.appendChild(bookTitleLabel);
bookTitleLi.appendChild(bookTitleInput);
bookUlLeft.appendChild(bookTitleLi);

// Author's Name Section
const authorLi = document.createElement('li');
const authorLabel = document.createElement('label');
authorLabel.textContent = "Author's Name:";
const authorInput = document.createElement('input');
authorInput.id = "formBook"
authorInput.type = 'text';

authorLi.appendChild(authorLabel);
authorLi.appendChild(authorInput);
bookUlLeft.appendChild(authorLi);

// Right Div

const bookUlRight = document.createElement('ul');
bookForm.appendChild(bookUlRight);
// Number of pages Section
const bookPagesLi = document.createElement('li');
const bookPagesLabel = document.createElement('label');
bookPagesLabel.textContent = "Number of pages:"
const bookPagesInput = document.createElement('input');
bookPagesInput.id = "formBook"
bookPagesInput.type = 'number';

bookPagesLi.appendChild(bookPagesLabel);
bookPagesLi.appendChild(bookPagesInput);
bookUlRight.appendChild(bookPagesLi);

// Reading Status
const statusLi = document.createElement('li');
const statusLabel = document.createElement('label');
statusLabel.textContent = "Reading Status:"
const readingInput = document.createElement('input');
readingInput.type = "text";

statusLi.appendChild(statusLabel);
statusLi.appendChild(readingInput);
bookUlRight.appendChild(statusLi);

// Adding button so user can submit its book information

const submitButton = document.createElement('button');
submitButton.textContent = "Submit";
bookForm.appendChild(submitButton);

// Right Part Div with Remove Form "X"; Form  box will disapear from screen;
const removeFormDiv = document.createElement('div');
removeFormDiv.setAttribute('style', 'width:10%;padding-right:1%;')


const removeForm = document.createElement('p');
removeForm.style.cursor = "pointer";
removeForm.style.textAlign = "right"
removeForm.textContent = "X"

removeFormDiv.appendChild(removeForm);

