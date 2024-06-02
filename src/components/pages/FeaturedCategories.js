import React from 'react';
import './FeaturedCategories.css';
import product1 from '../../images/p1.png';
import product2 from '../../images/p2.png';
import product3 from '../../images/p3.png';
import product5 from '../../images/p5.png';
import product6 from '../../images/p6.png';
import product7 from '../../images/p7.png';
import product8 from '../../images/p8.png';

const products = [
    { id: 1, img: product1, title: 'Salt Spray Chamber Stand' },
    { id: 2, img: product2, title: 'Salt Spray Chamber Stand' },
    { id: 3, img: product3, title: 'Salt Spray Chamber Stand' },
    { id: 5, img: product5, title: 'Salt Spray Chamber Stand' },
    { id: 6, img: product6, title: 'Salt Spray Chamber Stand' },
    { id: 7, img: product7, title: 'Salt Spray Chamber Stand' },
    { id: 8, img: product8, title: 'Salt Spray Chamber Stand' },
    { id: 9, img: product1, title: 'Salt Spray Chamber Stand' },
];

const trendingProducts = [
    { id: 1, img: product1, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NMFI-101' },
    { id: 2, img: product2, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NMFI-101' },
    { id: 3, img: product3, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NMFI-101' },
    { id: 4, img: product5, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NMFI-101' },
    { id: 5, img: product6, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NMFI-101' },
    { id: 6, img: product7, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NMFI-101' },
];

const FeaturedCategories = () => {
    return (
        <section className="featured-categories">
            <h2>Featured Categories</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.title} />
                        <p>{product.title}</p>
                    </div>
                ))}
            </div>
            <h2>Trending at Labnix</h2>
            <div className="product-boxes">
                {trendingProducts.map(product => (
                    <ProductBox
                        key={product.id}
                        image={product.img}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>
                </section>
    );
};

const ProductBox = ({ image, title, description }) => {
    return (
        <div className="product-box">

            <div className="product-box-info">
                <div class="wrap">
                    <img src={image} alt={title} className="product-box-image" />
                </div>
                <div class="inner">
                    <h3 className="product-box-title">{title}</h3>
                    <p className="product-box-description">{description}</p>
                </div>
            </div>
            <div className="product-box-buttons">
                <button className="view-button">View</button>
                <button className="quote-button">Quote</button>
                <button className="catalog-button">Catalog</button>
            </div>
        </div>
    );
};

export default FeaturedCategories;
