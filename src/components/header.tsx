import React from 'react';
import { Link } from "react-router-dom";
import '../style/header.css'

const Header = () => {
    return (
        <nav className="header">
            <div className="header__form">
                <Link to="/home">👁 Shiniasse</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/blog">Projects</Link>
                <Link to="/projects">Blog</Link>
                <Link to="/books">Books</Link>
            </div>
        </nav>
    );
};

export default Header;