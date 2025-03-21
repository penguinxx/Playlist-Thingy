import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/style.css';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
