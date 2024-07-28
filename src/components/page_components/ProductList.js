// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../css/product.css"; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const clothingProducts = response.data.filter(product =>
          product.category === "men's clothing" || product.category === "women's clothing"
        );

        // Extract unique categories
        const uniqueCategories = Array.from(new Set(clothingProducts.map(product => product.category)));
        setCategories(['All', ...uniqueCategories]);

        const sortedProducts = clothingProducts.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
        const filteredProducts = selectedCategory === 'All' ? sortedProducts : sortedProducts.filter(product => product.category === selectedCategory);

        setProducts(filteredProducts.slice(0, 8));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory, sortOrder]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  if (selectedProduct) {
    return (
      <div className="product-details">
      <img src={selectedProduct.image} alt={selectedProduct.title} />
      <div className="details">
        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description}</p>
        <h3>${selectedProduct.price}</h3>
        <button onClick={handleBackClick}>Back</button>
      </div>
    </div>
    
    );
  }

  return (
    <div>
      <div className='product_head'>
        <div></div>
      <center>
        <h1>Featured Products</h1>
        <p>Summer Collection New Morden Design</p>
      </center>
      <div className="filters">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      </div>

      <div className="product-section">
        {products.map((product, index) => (
          <div
            className="product-cart"
            key={index}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.title} />
            <span>{product.category}</span>
            <h4>{product.title}</h4>
            <div className="stars">
              {[...Array(5)].map((star, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
            <h4 className="price">${product.price}</h4>
            <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
