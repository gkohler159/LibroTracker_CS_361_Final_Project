import axios from "axios";
import { BsTrash } from "react-icons/bs";

const TableRow = ({ book, fetchBooks }) => {
  const deleteRow = async () => {
    const deleteConfirmation = window.confirm("Warning: This will delete the book record permanetly. Are you sure?");
    if (!deleteConfirmation){
      return;
    }
    try {
      const URL = import.meta.env.VITE_API_URL + "books/" + book.bookISBN;
      const response = await axios.delete(URL);
      // Ensure flora fauna record deleted successfully
      if (response.status === 204) {
        alert("Book record deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting Book Record");
      console.log(err);
    }
    fetchBooks();
  };
    return(
            <tr key = {book.bookISBN}>
                <td>{book.bookTitle}</td>
                <td>{book.bookAuthor}</td>
                <td>{book.bookGenre}</td>
                <td>{book.dateRead}</td>
                <td>{book.bookISBN}</td>
                <td>
                    <BsTrash onClick={deleteRow} size={25} className="delete-icon" />
                </td>
            </tr>
    );
};

export default TableRow;
