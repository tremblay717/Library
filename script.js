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



const bookSection = document.getElementById('#bookSection');

// Creating empty div 
const enterBook = document.createElement('div');
enterBook.className = "enterBook";

const enterBookDiv = document.querySelector('#enterBookDiv');


newBook.onclick = function () {
    enterBook.appendChild(bookForm);
    enterBook.appendChild(removeFormDiv);
    enterBookDiv.appendChild(enterBook);
};


removeForm.onclick = function () {
    enterBookDiv.removeChild(enterBook);
    bookTitleInput.value = "";
    authorInput.value = "";
    bookPagesInput.value = "";
    readingInput.value = "";
};


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", "2200", "Read")

const harryPotter = new Book("Harry Potter and the Philosopher's Stone", "JK. Rowling", "500", "Not Read")

const dune = new Book("Dune", "Frank Herbert", "900", "Reading it")

const myLibrary = [hobbit, harryPotter, dune];

const bookList = document.querySelector('#bookList');

const bookGrid = document.createElement('div');
bookGrid.id = "booKGrid";
bookGrid.setAttribute('style', 'display: grid; border-style:solid; border-color:black; border-width:2px; background-color: #F3F3F3;padding:0px;')

if (myLibrary.length > 0) {
    bookList.appendChild(bookGrid);

    // Grid header 
    const bookHeader = document.createElement('div');
    bookHeader.className = "addingBook";

    // h3 element for our book title
    titleHeader = document.createElement('h3')
    titleHeader.textContent = "Book Title"
    titleHeader.className = 'boxHeader'

    // h4 element for author's name
    authorName = document.createElement('h4');
    authorName.textContent = "Author's Name";
    authorName.className = 'boxHeader';


    // h4 element for number of pages
    pages = document.createElement('h4')
    pages.textContent = "Number of pages";
    pages.className = 'boxHeader';

    // h4 element for reading Status
    readingStatus = document.createElement('h4')
    readingStatus.textContent = "Reading Status";
    readingStatus.className = 'boxHeader'


    bookHeader.appendChild(titleHeader);
    bookHeader.appendChild(authorName);
    bookHeader.appendChild(pages);
    bookHeader.appendChild(readingStatus);
    bookGrid.appendChild(bookHeader);


    for (let i = 0; i < myLibrary.length; i++) {
        //Creating a div for each book in our library
        addingBook = document.createElement('div');
        addingBook.className = "addingBook";


        // h3 element for our book title
        addBookTitle = document.createElement('h3')
        addBookTitle.textContent = myLibrary[i].title;
        addBookTitle.setAttribute('style', 'border-right-style:solid;border-right-width:1px')
        addBookTitle.className = 'box'

        // h4 element for author's name
        addBookAuthor = document.createElement('h4')
        addBookAuthor.textContent = myLibrary[i].author;
        addBookAuthor.setAttribute('style', 'border-right-style:solid;border-right-width:1px')
        addBookAuthor.className = 'box'


        // h4 element for number of pages
        addBookPages = document.createElement('h4')
        addBookPages.textContent = myLibrary[i].pages + " pages";
        addBookPages.setAttribute('style', 'border-right-style:solid;border-right-width:1px')
        addBookPages.className = 'box'


        // h4 element for reading Status
        addreadingStatus = document.createElement('h4')
        addreadingStatus.textContent = myLibrary[i].status;
        addreadingStatus.className = 'box'

        // No bottom Border for boxes in last row
        if (i != myLibrary.length - 1) {
            addingBook.setAttribute('style', 'border-bottom-style:solid;border-bottom-width:1px;')
        }

        bookGrid.appendChild(addingBook);
        addingBook.appendChild(addBookTitle);
        addingBook.appendChild(addBookAuthor);
        addingBook.appendChild(addBookPages);
        addingBook.appendChild(addreadingStatus);
    }

} else {
    bookList.removeChild(bookGrid);
}



submitButton.onclick = function () {


    // if ((bookTitleInput.value.length > 0) && (authorInput.value.length > 0) &&
    // (bookPagesInput.value.length>0) && (readingInput.value.length > 0)) {
        const lastBook = new Book(bookTitleInput.value, authorInput.value, bookPagesInput.value,readingInput.value);
        console.log(lastBook);

        myLibrary.push(lastBook);

         //Creating a div for each book in our library
         addingBook = document.createElement('div');
         addingBook.className = "addingBook";
 
 
         // h3 element for our book title
         addBookTitle = document.createElement('h3')
         addBookTitle.textContent = myLibrary[3].title;
         addBookTitle.setAttribute('style', 'border-right-style:solid;border-right-width:1px')
         addBookTitle.className = 'box'
 
         // h4 element for author's name
         addBookAuthor = document.createElement('h4')
         addBookAuthor.textContent = myLibrary[3].author;
         addBookAuthor.setAttribute('style', 'border-right-style:solid;border-right-width:1px')
         addBookAuthor.className = 'box'
 
 
         // h4 element for number of pages
         addBookPages = document.createElement('h4')
         addBookPages.textContent = myLibrary[3].pages + " pages";
         addBookPages.setAttribute('style', 'border-right-style:solid;border-right-width:1px')
         addBookPages.className = 'box'
 
 
         // h4 element for reading Status
         addreadingStatus = document.createElement('h4')
         addreadingStatus.textContent = myLibrary[3].status;
         addreadingStatus.className = 'box'
 
         // No bottom Border for boxes in last row
         if (myLibrary[3] != myLibrary.length - 1) {
             addingBook.setAttribute('style', 'border-bottom-style:solid;border-bottom-width:1px;')
         }
 
         bookGrid.appendChild(addingBook);
         addingBook.appendChild(addBookTitle);
         addingBook.appendChild(addBookAuthor);
         addingBook.appendChild(addBookPages);
         addingBook.appendChild(addreadingStatus);
         console.log(myLibrary);
         return lastBook;
    // } else {
    //     return;
    // }
         console.log(myLibrary);
}

console.log(myLibrary);











// function Book (title,author,pages,status){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
//     this.info =  function() {console.log(title + " by " + author + ", " + String(pages) + " pages, " + status)
//     };
//     return this.info();
//   }

//   const hobbit = new Book("The Hobbit","J.R.R. Tolkien",295,"not read yet")