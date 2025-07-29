import express from 'express';

const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json()); 

//In memory array
const books = [];

app.get('/books', async (req, res) => {
    res.json(books);
})

app.get('/books/:bookISBN', async (req, res) => {
    const book = books.find(book => book.bookISBN === req.params.bookISBN);
    if(!book) {
        return res.status(404).json({error: "Book with that ISBN not found"});
    }
    else {
        res.json(book);
    }
});

app.post('/books', async (req, res) => {
    const newBook = {
        bookISBN: req.body.bookISBN, 
        bookTitle: req.body.bookTitle,
        bookAuthor: req.body.bookAuthor, 
        bookGenre: req.body.bookGenre,
        dateRead: req.body.dateRead,
    }
    books.push(newBook);
    res.status(201).json(newBook);
})


app.delete('/books/:bookISBN', async (req, res) => {
    const bookIndex = books.findIndex(book => book.bookISBN === req.params.bookISBN);
    if(bookIndex === -1) {
        return res.status(404).json({error: "Book with that ISBN not found"})
    }
    else{
        books.splice(bookIndex, 1);
        res.status(204).send();
    }

})

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
