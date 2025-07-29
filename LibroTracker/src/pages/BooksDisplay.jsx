import { Routes, Route, Link } from "react-router-dom";
import BookTable from '../components/Table.jsx';
import CreateBookEntry from './CreateEntry.jsx';


function BooksDisplay()
{
    return (
        <div>
            <h2>Book Display</h2>
            <nav>
                <ul>
                    <li><Link to="/books/table">Books</Link></li>
                    <li><Link to="/books/addNew">Add New Entry</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="table" element={<BookTable /> }/>
                <Route path="addNew" element={<CreateBookEntry />} />
            </Routes>
        </div>
    );
};

export default BooksDisplay;