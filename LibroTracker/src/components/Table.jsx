import { useState, useEffect } from 'react'
import TableRow from './TableRow.jsx';
import axios from "axios";

function BookTable() {
    const [ books, setBooks ] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
 
    const fetchBooks = async () => {
        try {
        const URL = import.meta.env.VITE_API_URL + "books";
        const response = await axios.get(URL);
        setBooks(response.data);
        } catch (error) {
        alert("Error fetching books from the server.");
        console.error("Error fetching book record:", error);
        }
    };

    
    useEffect(() => {
        fetchBooks();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        if (query){
            const filteredBooks = books.filter((book) => {
                return (
                    book.bookTitle.toLowerCase().includes(query.toLowerCase()) ||
                    book.bookAuthor.toLowerCase().includes(query.toLowerCase()) ||
                    book.bookGenre.toLowerCase().includes(query.toLowerCase())
                );
            });
            setFilteredBooks(filteredBooks);
            }
        }

     useEffect(() => {
        setFilteredBooks(books); // Set filtered books to all books initially
    }, [books]);


    return(
        <div>
            <input
            type="text"
            placeholder="Search by title, author, or genre"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Year Read</th>
                        <th>ISBN</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {filteredBooks.map((book) => (
                <TableRow key={book.bookISBN} book={book} fetchBooks={fetchBooks} />
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default BookTable;