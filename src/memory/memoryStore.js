let books = [];

const getMemoryBooks = () => books;

const setMemoryBooks = (newBooks) => {
    books = newBooks;
};

module.exports = { getMemoryBooks, setMemoryBooks };
