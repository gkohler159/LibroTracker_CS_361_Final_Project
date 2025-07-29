const express = requires("express");
const router = express.Router();
const {
    getBooks,
    getBookByID,
    createBook,
    deleteBook,
} = require("../controllers/BooksController");

router.get("/", getBooks);
router.get("/:bookISBN", getBookByID);
router.post("/", createBook);
router.delete("/:bookISBN", deleteBook);

module.exports = router;