//import { useState } from 'react'
import './App.css'
import BooksDisplay from './pages/BooksDisplay.jsx'
import Home from './pages/Home.jsx'
import NavBar from './components/Navbar.jsx'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <div>
          <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/*" element={<BooksDisplay />} />
          </Routes>
        </main>
      </div>
      <footer>
        &copy; 2025 Grace Kohler
      </footer>
      </Router>
    </>
  );
};

export default App
