const { fetchBooks, addBooks, deteleBooks, updateBooks, singleFetchBook } = require('../controllers/bookController');

const router = require('express').Router();

router.route("/books").get(fetchBooks).post(addBooks);
router.route("/books/:id").delete(deteleBooks).patch(updateBooks).get(singleFetchBook);

module.exports = router