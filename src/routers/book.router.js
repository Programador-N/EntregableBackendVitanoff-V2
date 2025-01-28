const express = require('express');
const { getBooks, createBook } = require('../controllers/book.controller');
const validateBook = require('../middlewares/validateBooks');
const router = express.Router();

router.get('/', getBooks);
router.post('/', validateBook, createBook);

module.exports = router;
