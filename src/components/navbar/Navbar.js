import React from 'react';
import './Navbar.css';
import product1 from '../../images/p1.png';
import product2 from '../../images/p2.png';
import product3 from '../../images/p3.png';

const products = [
    { id: 1, img: product1, title: 'Melt Flow Indexer 1', company: 'Company A' },
    { id: 2, img: product2, title: 'Melt Flow Indexer 2', company: 'Company B' },
    { id: 3, img: product3, title: 'Melt Flow Indexer 3', company: 'Company C' }
];

const  Navbar= () => {
    // Slice the products array to get only the first three products
    const trendingProducts = products.slice(0, 3);

    return (
        <section className="trending-at-labnix">
            <h2>Trending at Labnix</h2>
            <div className="products-grid">
                {trendingProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.title} className="product-image"/>
                        <div className="product-info">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-company">{product.company}</p>
                            <div className="product-buttons">
                                <button className="view-button">View</button>
                                <button className="quote-button">Quote</button>
                                <button className="catalog-button">Catalog</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Navbar;
