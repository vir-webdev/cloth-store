// src/components/Header.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import '../css/Navbar.css'; // Ensure you have a CSS file for styling


const Header = () => {
  return (
    <header>
      <div id="header">
        <div className="header-logo">
          <a href="index.html"><img src="images/logo.png" alt="Logo" /></a>
        </div>
        <div className="header-list">
          <nav className="header-list-nav">
            <ul>
              <li><a className="active" href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </nav>
          <div className="header-list-icon">
            <a href="#"><i className="fa fa-bag-shopping"></i></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
