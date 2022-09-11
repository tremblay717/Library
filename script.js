// Object constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// A few book objects to display our library when a user access the page
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", "310", "No");
const harryPotter = new Book("Harry Potter and the Philosopher's Stone", "JK. Rowling", "500", "Yes");
const dune = new Book("Dune", "Frank Herbert", "412", "Yes");

let myLibrary = [hobbit, harryPotter, dune];

// Creating a book Grid
const bookList = document.querySelector('#bookList');
const bookGrid = document.createElement('div');
bookGrid.id = "booKGrid";
bookGrid.setAttribute('style', 'display: grid; border-style:solid; border-color:black; border-width:2px; background-color: #F3F3F3;padding:0px;');


// function to add a header to our book Grid
function bookGridHeader() {

    bookList.appendChild(bookGrid);

    // Grid header
    const bookHeader = document.createElement('div');
    bookHeader.className = "addingBook";

    // h3 element for our book title
    const titleHeader = document.createElement('h3');
    titleHeader.textContent = "Book Title";
    titleHeader.className = 'boxHeader';

    // h4 element for author's name
    const authorName = document.createElement('h4');
    authorName.textContent = "Author's Name";
    authorName.className = 'boxHeader';


    // h4 element for number of pages
    const pages = document.createElement('h4');
    pages.textContent = "Number of pages";
    pages.className = 'boxHeader';

    // h4 element for reading Status
    const readingStatus = document.createElement('h4')
    readingStatus.textContent = "Reading Status";
    readingStatus.className = 'boxHeader';

    // h4 element for removing book
    const removingBook = document.createElement('h4')
    removingBook.textContent = "Remove Book?";
    removingBook.className = 'boxHeader';

    // h4 element for editing reading status
    const editReading = document.createElement('h4')
    editReading.textContent = "Change reading status?";
    editReading.className = 'boxHeader';


    bookHeader.appendChild(titleHeader);
    bookHeader.appendChild(authorName);
    bookHeader.appendChild(pages);
    bookHeader.appendChild(readingStatus);
    bookHeader.appendChild(editReading);
    bookHeader.appendChild(removingBook);

    bookGrid.appendChild(bookHeader);

}

// function to add book lines
function createBookLinesLibrary(library) {

    for (let i = 0; i < library.length; i++) {
        //Creating a div for each book in our library
        const addingBook = document.createElement('div');
        addingBook.className = "addingBook";


        // h3 element for our book title
        const addBookTitle = document.createElement('h3');
        addBookTitle.textContent = library[i].title;
        addBookTitle.id = library[i].title;
        addBookTitle.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addBookTitle.className = 'box';

        // h4 element for author's name
        const addBookAuthor = document.createElement('h4');
        addBookAuthor.textContent = library[i].author;
        addBookAuthor.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addBookAuthor.className = 'box';


        // h4 element for number of pages
        const addBookPages = document.createElement('h4');
        addBookPages.textContent = library[i].pages + " pages";
        addBookPages.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addBookPages.className = 'box';


        // h4 element for reading Status
        const addreadingStatus = document.createElement('h4');
        addreadingStatus.textContent = library[i].status;
        addreadingStatus.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addreadingStatus.className = 'box';


        // h4 element for editing reading status
        const editReading = document.createElement('h4');
        editReading.id = library[i].title;
        editReading.setAttribute('style', 'display:grid; align-items:center;justify-content:center;border-right-style:solid;border-right-width:1px');
        editReading.className = 'box';

        //Button to edit reading status
        const editReadingButton = document.createElement('button');
        editReadingButton.id = library[i].title;
        editReadingButton.style.backgroundColor = "#0c8254";
        editReadingButton.className = "removeChange";
        editReadingButton.textContent = "Change Status";
        editLibrary = library;

        editReadingButton.setAttribute('onclick', 'changeStatus(this.id,editLibrary)')
        editReading.appendChild(editReadingButton);

        // h4 element for removing book
        const removingBook = document.createElement('h4');
        removingBook.setAttribute('style', 'display:grid; align-items:center;justify-content:center;border-right-style:solid;border-right-width:1px');
        removingBook.id = library[i].title;
        removingBook.className = 'box';

        //Button to remove book
        const removeBookButton = document.createElement('button');
        removeBookButton.id = library[i].title;
        removeBookButton.style.backgroundColor = "#3f0000";
        removeBookButton.className = "removeChange";
        removeBookButton.textContent = "Remove Book ";
        filtlibrary = library;

        removeBookButton.setAttribute('onclick', 'removeBook(this.id,filtlibrary)')
        removingBook.appendChild(removeBookButton);

        // No bottom Border for boxes in last row
        if (i != library.length - 1) {
            addingBook.setAttribute('style', 'border-bottom-style:solid;border-bottom-width:1px;');
        };

        bookGrid.appendChild(addingBook);
        addingBook.appendChild(addBookTitle);
        addingBook.appendChild(addBookAuthor);
        addingBook.appendChild(addBookPages);
        addingBook.appendChild(addreadingStatus);
        addingBook.appendChild(editReading);
        addingBook.appendChild(removingBook);
    }

}


// Calling our grid functions
bookGridHeader();
createBookLinesLibrary(myLibrary);


function removeBook(id, library) {

    const newLibrary = library.filter(book => book.title != id);

    // My library equals = our filtered library
    myLibrary = newLibrary;

    // We make sure to clear our book Grid of every element named after the addingBook Class.
    const addingBookClass = document.querySelectorAll('.addingBook');

    for (let i = 0; i < addingBookClass.length; i++) {

        addingBookClass[i].remove();
    }

    // Calling our grid functions to display our books;
    bookGridHeader();
    createBookLinesLibrary(myLibrary);

}

function changeStatus(id, library) {

    const myLibrary = library

    const bookname = myLibrary.find(({
        title
    }) => title === id);

    const booknameIndex = myLibrary.indexOf(bookname);

    if (myLibrary[booknameIndex].status == "Yes") {

        myLibrary[booknameIndex].status = "No"

    } else {

        myLibrary[booknameIndex].status = "Yes"
    }

    const addingBookClass = document.querySelectorAll('.addingBook');

    for (let i = 0; i < addingBookClass.length; i++) {

        addingBookClass[i].remove();

    }

    // Calling our grid functions to display our books;
    bookGridHeader();
    createBookLinesLibrary(myLibrary);

}

const bookTitleTest = document.getElementById('bookTitle');
const authorNameTest = document.getElementById('AuthorName');
const pageNumberTest = document.getElementById('pageNumber');
const statusTest = document.getElementById('status');

const submitbutton = document.getElementById('foo');


//Arrays and functions to prevent user to submit bad data 
let checkTitle = [];
let checkAUthor = [];
let checkPages = [];


function titleCheck() {
    checkTitle.push(bookTitleTest.value);
}

function authorCheck() {
    checkAUthor.push(authorNameTest.value);
}

function pagesCheck() {
    checkPages.push(pageNumberTest.value);
}



submitbutton.onclick = function () {


    const livre = new Book(bookTitleTest.value, authorNameTest.value, pageNumberTest.value, statusTest.value);
    console.log(bookTitleTest.value)
    title = bookTitleTest.value
    author = authorNameTest.value
    pages = pageNumberTest.value

    statusReading = statusTest.value

    if (statusTest.checked == true) {
        livre.status = "Yes"
    } else if (statusTest.checked == false) {
        livre.status = "No"
    }

    myLibrary.push(livre);

    if (checkTitle.length == 0 || myLibrary[myLibrary.length - 1].title == '' || checkAUthor.length == 0 || myLibrary[myLibrary.length - 1].author == '' || (checkPages.length > 0 && checkPages.value > 0)) {
        myLibrary.pop();

    } else {

        // We make sure to clear our book Grid of every element named after the addingBook Class.

        const addingBookClass = document.querySelectorAll('.addingBook');

        for (let i = 0; i < addingBookClass.length; i++) {

            addingBookClass[i].remove();
        }
        // Calling our grid functions to display our books;
        bookGridHeader();
        createBookLinesLibrary(myLibrary);

        checkTitle = [];
        checkAUthor = [];
        checkPages = [];

        bookTitleTest.value = "";
        authorNameTest.value = "";
        pageNumberTest.value = "";
        statusTest.checked = false;

    }

}