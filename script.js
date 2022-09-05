const newBook = document.querySelector('#addBook');

// Object constructor 
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// A few book objects to display our library when a user access the page
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", "310", "Read");
const harryPotter = new Book("Harry Potter and the Philosopher's Stone", "JK. Rowling", "500", "Not Read");
const dune = new Book("Dune", "Frank Herbert", "412", "Reading it");

const myLibrary = [hobbit, harryPotter, dune];

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
    titleHeader = document.createElement('h3');
    titleHeader.textContent = "Book Title";
    titleHeader.className = 'boxHeader';

    // h4 element for author's name
    authorName = document.createElement('h4');
    authorName.textContent = "Author's Name";
    authorName.className = 'boxHeader';


    // h4 element for number of pages
    pages = document.createElement('h4');
    pages.textContent = "Number of pages";
    pages.className = 'boxHeader';

    // h4 element for reading Status
    readingStatus = document.createElement('h4')
    readingStatus.textContent = "Reading Status";
    readingStatus.className = 'boxHeader';

    // h4 element for removing book
    removingBook = document.createElement('h4')
    removingBook.textContent = "Remove Book?";
    removingBook.className = 'boxHeader';

    // h4 element for editing reading status
    editReading = document.createElement('h4')
    editReading.textContent = "Change reading status?";
    editReading.className = 'boxHeader';


    bookHeader.appendChild(titleHeader);
    bookHeader.appendChild(authorName);
    bookHeader.appendChild(pages);
    bookHeader.appendChild(readingStatus);
    bookHeader.appendChild(removingBook);
    bookHeader.appendChild(editReading);

    bookGrid.appendChild(bookHeader);

}

// function to add book lines
function createBookLinesLibrary() {

    for (let i = 0; i < myLibrary.length; i++) {
        //Creating a div for each book in our library
        addingBook = document.createElement('div');
        addingBook.className = "addingBook";


        // h3 element for our book title
        addBookTitle = document.createElement('h3');
        addBookTitle.textContent = myLibrary[i].title;
        addBookTitle.id = myLibrary[i].title;
        addBookTitle.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addBookTitle.className = 'box';

        // h4 element for author's name
        addBookAuthor = document.createElement('h4');
        addBookAuthor.textContent = myLibrary[i].author;
        addBookAuthor.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addBookAuthor.className = 'box';


        // h4 element for number of pages
        addBookPages = document.createElement('h4');
        addBookPages.textContent = myLibrary[i].pages + " pages";
        addBookPages.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addBookPages.className = 'box';


        // h4 element for reading Status
        addreadingStatus = document.createElement('h4');
        addreadingStatus.textContent = myLibrary[i].status;
        addreadingStatus.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        addreadingStatus.className = 'box';


        // h4 element for removing book
        removingBook = document.createElement('h4');
        removingBook.id = myLibrary[i].title;
        removingBook.setAttribute('style', 'border-right-style:solid;border-right-width:1px');
        removingBook.textContent = "X";
        removingBook.className = 'box';

        // h4 element for editing reading status
        editReading = document.createElement('h4');
        editReading.id = myLibrary[i].title;
        editReading.textContent = "Yes";
        editReading.className = 'box';

        // No bottom Border for boxes in last row
        if (i != myLibrary.length - 1) {
            addingBook.setAttribute('style', 'border-bottom-style:solid;border-bottom-width:1px;');
        };

        bookGrid.appendChild(addingBook);
        addingBook.appendChild(addBookTitle);
        addingBook.appendChild(addBookAuthor);
        addingBook.appendChild(addBookPages);
        addingBook.appendChild(addreadingStatus);
        addingBook.appendChild(removingBook);
        addingBook.appendChild(editReading);

    }
}

const odin = document.querySelector("#odin");

newBook.onclick = function () {
    const livre = new Book();

    const title = prompt("Enter Book Title");
    const author = prompt("Enter Author's Name");
    const pages = prompt("Enter Number of pages");
    const status = prompt("Have you read the book?");

    livre.title = title;
    livre.author = author;
    livre.pages = pages;
    livre.status = status;

    myLibrary.push(livre);

    // We make sure to clear our book Grid of every element named after the addingBook Class. 
    let i = 0;
    while (i < document.querySelectorAll('.addingBook').length) {
        let addingBookClass = document.querySelector('.addingBook');
        addingBookClass.remove();
    }

    // Calling our grid functions to display our books;
    bookGridHeader();
    createBookLinesLibrary();

};

// Calling our grid functions
bookGridHeader();
createBookLinesLibrary();