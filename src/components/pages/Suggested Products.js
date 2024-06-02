import React from 'react';
import './Suggested Products.css'; // Import CSS styles for this component
import product1 from '../../images/p1.png'; // Sample product image
import product2 from '../../images/p2.png'; // Sample product image
import product3 from '../../images/p3.png'; // Sample product image
import product5 from '../../images/p5.png'; // Sample product image

const SuggestedProducts = () => {
  return (
    <div className="suggested-products">
      <h2 className="center">Suggested Products</h2>
      <div className="product-line">
        <div className="product-box-large">
          <img src={product1} alt="Main Product" className="product-image-large" />
          <div className="product-info-large">
            <h3 className="product-title">Haze Measurement Devices</h3>
            <h4 className="product-title">Color & Haze meter NHM-101</h4>
            <p className="product-description">This is a detailed description of the main product, highlighting its key features and benefits.</p>
            <button className="view-button">View</button>
          </div>
        </div>

        <div className="product-box-small">
          <img src={product2} alt="Product 2" className="product-image-small" />
          <h3 className="product-title">Melt Flow Indexer</h3>
          <h4 className="product-title">NMFI-101</h4>
          <div className="product-buttons">
            <button className="view-button">View</button>
            <button className="catalog-button">Catalog</button>
          </div>
        </div>

        <div className="product-box-small">
          <img src={product3} alt="Product 3" className="product-image-small" />
          <h3 className="product-title">Melt Flow Indexer</h3>
          <h4 className="product-title">NMFI-101</h4>
          <div className="product-buttons">
            <button className="view-button">View</button>
            <button className="catalog-button">Catalog</button>
          </div>
        </div>

        <div className="product-box-small">
          <img src={product5} alt="Product 4" className="product-image-small" />
          <h3 className="product-title">Melt Flow Indexer</h3>
          <h4 className="product-title">NMFI-101</h4>
          <div className="product-buttons">
            <button className="view-button">View</button>
            <button className="catalog-button">Catalog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
