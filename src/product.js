import React from 'react';
import './product.css';

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src="https://example.com/product-image.jpg" alt="Product" />
      </div>
      <div className="product-details">
        <h2 className="product-title">Product Title</h2>
        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla aliquam massa, in maximus nulla luctus a. Sed ac eros sed felis dignissim ullamcorper. Aliquam nec arcu vitae risus tempus iaculis. Fusce lobortis ligula id massa efficitur auctor.</p>
        <p className="product-price">$19.99</p>
        <button className="product-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
