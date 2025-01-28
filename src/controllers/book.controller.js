const { readFile, writeFile } = require('../data/fs/files/fileManager');

exports.getBooks = async (req, res) => {
    const books = await readFile();
    res.json(books);
};

exports.createBook = async (req, res) => {
    const newBook = req.body;
    const books = await readFile();
    books.push(newBook);
    await writeFile(books);
    res.status(201).json(newBook);
};
