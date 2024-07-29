import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import ProductList from './components/page_components/ProductList';
import Hero_section from './components/page_components/Hero_section.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Hero_section></Hero_section>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
