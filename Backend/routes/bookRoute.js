const { fetchBooks, addBooks, deleteBooks, updateBooks, singleFetchBook } = require('../controllers/bookController');

const router = require('express').Router();

router.route("/books").get(fetchBooks).post(addBooks);
router.route("/books/:id").delete(deleteBooks).patch(updateBooks).get(singleFetchBook);

module.exports = router