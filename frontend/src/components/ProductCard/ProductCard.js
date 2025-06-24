import React, { useState } from 'react';
import './ProductCard.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useWallet } from '../../context/WalletContext';

const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { purchaseItem } = useWallet();

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
    };

    const handleBuyNow = () => {
        purchaseItem(product);
    };

    const isOutOfStock = product.stock === 0;

    return (
        <div className="product-card">
            <div className="carousel-container">
                <img src={product.images[currentImageIndex].url} alt={`${product.name} view ${currentImageIndex + 1}`} className="product-image" />
                {product.images.length > 1 && (
                    <>
                        <button onClick={prevImage} className="carousel-btn prev-btn">‹</button>
                        <button onClick={nextImage} className="carousel-btn next-btn">›</button>
                    </>
                )}
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    <span className="original-price">${product.cuttedPrice.toFixed(2)}</span>
                </div>

                <div className="variant-selector">
                    <label htmlFor="size-select">Size:</label>
                    <select id="size-select" name="size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>

                <div className="action-buttons">
                    <button className="add-to-cart-btn" disabled={isOutOfStock}>
                        {isOutOfStock ? 'Out of Stock' : <><FaShoppingCart /> Add to Cart</>}
                    </button>
                    <button className="buy-now-btn" disabled={isOutOfStock} onClick={handleBuyNow}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 