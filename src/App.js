import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar.js';
import Hero_section from "./components/page_components/Hero_section.js"
import ProductList from './components/page_components/ProductList.js'
import './App.css';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Services() {
  return <h2>Services Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Cart() {
  return <h2>Cart Page</h2>;
}

function App() {
  return (<>
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
    <Hero_section></Hero_section>
    <ProductList></ProductList>
    </>
  );
}

export default App;
