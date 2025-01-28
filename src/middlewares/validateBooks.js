const validateBook = (req, res, next) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({ error: 'Título, autor y año son obligatorios' });
    }

    next();
};

module.exports = validateBook;
