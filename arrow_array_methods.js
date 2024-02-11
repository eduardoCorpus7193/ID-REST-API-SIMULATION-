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

console.log(getBook("9781408855652"));
console.log(getBooks());