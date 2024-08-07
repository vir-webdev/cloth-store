// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faTelegram, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="contact">
          <a href="index.html"><img src="images/logo.png" alt="Logo" /></a>
          <br /><br /><br />
          <h3>Contact</h3>
          <address>
            <p><b>Address:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b>Phone:</b> Wellington Road, Street 32. San Francisco</p>
            <p><b>Hours:</b> 10:00 - 18:00. Mon - Sat</p>
          </address>
          <h3>Follow Us</h3>
          <br />
          <div className="socials">
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
        <div className="about">
          <h3>About</h3>
          <br />
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="myaccount">
          <h3>My account</h3>
          <br />
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="install">
          <h3>Install App</h3>
          <br />
          <p>From App Store or Google Play</p>
          <div className="download">
            <a href="#"><img src="images/pay/app.jpg" alt="App Store" /></a>
            <a href="#"><img src="images/pay/play.jpg" alt="Google Play" /></a>
          </div>
          <p>Secured Payment Gateways</p>
          <img src="images/pay/pay.png" alt="Payment Gateways" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
