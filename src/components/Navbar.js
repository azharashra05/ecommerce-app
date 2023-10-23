import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        E-Commerce Website
      </Link>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar__item">
          <Link to="/register">Register</Link>
        </li>
        <li className="navbar__item">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
