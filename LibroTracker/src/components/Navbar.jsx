import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <header>
            <h1>LibroTracker</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;