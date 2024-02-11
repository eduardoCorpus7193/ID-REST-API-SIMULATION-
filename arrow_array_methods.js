const books = require('./books.json');

const getBook = (searchTerm) => {  
    const foundBook = books.find(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(foundBook){
        return {
            code: 200,
            body: foundBook,
            msg: "Book '" + foundBook.title + "' found",
        }
    }
    return {
        code: 400,
        body: null,
        msg: "Couldn't find the book",
    }
}
const getBooks = () => {
    return {
        code: 200,
        body: books,
        msg: "All books",
    }
}

const addBook = (newBook) => {
    books.push(newBook);
    return {
        code: 201,
        body: books,
        msg: "Book added",
    }
}

const removeBookByTitleOrISBN = (searchTerm) => {
    const index = books.findIndex(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(index !== -1){
        const deletedBookName = books[index].title;
        const deletedBook = books.splice(index,1)[0];
        return {
            code: 200,
            body: books,
            msg: "Book " + deletedBookName + " deleted",
        }
    }
    return {
        code: 400,
        body: null,
        msg: "Couldn't find the book",
    }
}

const filterBy = (property,searchTerm) => {
    const filteredBooks = books.filter(book => book[property] === searchTerm);
    return {
        code: 200,
        body: filteredBooks,
        msg: "Filtered books",
    }
}

const listBooks = () => {  
    const formattedBooks = books.map(book => `${book.title} - ${book.author} - ${book.year}`);
    return {
        code: 200,
        body: formattedBooks,
        msg: "Listed books",
    }
}

const getBooksByYear = (year) => {
    const filteredBooks = books.filter(book => book.year === year);
    return {
        code: 200,
        body: filteredBooks,
        msg: "Filtered books by the year: " + year,
    }
}

const genreFullAvailability = (genre) => {  
    const allAvailable = books.every(book => book.genre === genre && book.stock > 0);
    if (allAvailable) {
        return {
            code: 200,
            body: "True",
            msg: "Genre " + genre + " is full available",
        }
    }
    return {
        code:   400 ,
        body: "False",
        msg: "Genre " + genre + " is not full available",
    }
}


const genrePartialAvailability = (genre) => {
    const partialAvailable = books.filter(book => book.genre === genre && book.stock > 0);
    if(partialAvailable.length === 0){
        return {
            code: 400,
            body: "False",
            msg: "Genre" + genre + " is not available",
        }
    }
    return {
        code: 200,
        body: "True",
        msg: "Genre " + genre + " is available at least once",
    }
}

const getCountBy = (property, searchTerm) => {
    const count = books.filter(book => book[property] === searchTerm).length;
    return {
        code: 200,
        body: count,
        msg: "Count of books by " + property + " " + searchTerm,
    } 
}

console.log(getBook("9781408855652"));
console.log(getBooks());
console.log(addBook({ "title": "The hunger games", "ISBN": "9780439023528", "year": 2008, "genre": "Adventure, science fiction", "author": "Suzanne Collins", "stock": 7, "publisher": "Scholastic Press" }));
console.log(removeBookByTitleOrISBN("9780984782857"));
console.log(filterBy("author","Suzanne Collins"));
console.log(listBooks());
console.log(getBooksByYear(2008));
console.log(genreFullAvailability("Fantasy"));
console.log(genrePartialAvailability("Fantasy"));
console.log(filterBy("author","Suzanne Collins"));
