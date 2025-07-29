
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBookEntry(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        bookISBN: "",
        bookTitle: "",
        bookAuthor: "",
        bookGenre: "",
        dateRead: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            bookISBN: formData.bookISBN, 
            bookTitle: formData.bookTitle,
            bookAuthor: formData.bookAuthor, 
            bookGenre: formData.bookGenre,
            dateRead: formData.dateRead,
        };

        try {
            const URL = import.meta.env.VITE_API_URL + "books";
            const response = await axios.post(URL, newBook);
            if (response.status === 201){
                navigate("/books/table");
            }
            else{
                alert("Error creating book entry")
            }}
            catch (error){
                alert("Error creating book entry");
                console.error("Error creating book entry:", error);

            }
            resetFormFields();
        }

        const handleInputChange = (e) => {const { name, type, value, checked } = e.target;
        setFormData((prevData) => ({
                    ...prevData,
        [name]: type === "checkbox" ? checked : value,
        }));
         };


        const resetFormFields = () => {
            setFormData({
                bookISBN: "",
                bookTitle: "",
                bookAuthor: "",
                bookGenre: "", 
                dateRead: "",
            })
        };
        return(
            <div>
                <h2>Add New Book</h2>
                <button type="button" onClick={(e) => {const confirmed = window.confirm("Warning: Canceling will erase all progress");
                if (confirmed) navigate("/books/table")}}>Cancel</button>
                <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="bookISBN">ISBN</label>
                        <input
                        type="text"
                        name="bookISBN"
                        value={formData.bookISBN}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="bookTitle">Title</label>
                         <input
                        type="text"
                        name="bookTitle"
                        value={formData.bookTitle}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="bookAuthor">Author</label>
                         <input
                        type="text"
                        name="bookAuthor"
                        value={formData.bookAuthor}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="bookGenre">Genre</label>
                         <input
                        type="text"
                        name="bookGenre"
                        value={formData.bookGenre}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="dateRead">Date Read</label>
                         <input
                        type="date"
                        name="dateRead"
                        value={formData.dateRead}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        );
    };

export default CreateBookEntry;