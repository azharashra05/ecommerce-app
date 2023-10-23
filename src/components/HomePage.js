import React from 'react';
import ProductCard from './ProductCard';
import '../Home.css';

const HomePage = ({ products, addToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default HomePage;