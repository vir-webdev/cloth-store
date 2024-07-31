import React, { useState } from 'react';
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="header-logo-start">
        <Link to="/">Logo</Link>
      </div>
      <div className="header-list">
        <div className={`header-list-nav ${isOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
          <div className="header-list-icon">
            <Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          </div>
        </div>
      </div>
      <div className="header-icon-end">
        <Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link>
        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

export default Navbar;
