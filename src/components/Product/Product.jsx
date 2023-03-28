import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, name, img, price, seller, ratings } = props.product;
    return (
        <div className="single-product h-100">
            <div className="product-image">
                <img src={img} alt="Product Image" />
            </div>
            <div className="product-info">
                <h2 className="product-title">{name}</h2>
                <h4 className="product-price">Price: ${price}</h4>
                <h5 className='product-manufacturer'>Manufacturer: {seller}</h5>
                <h5 className='product-rating'>Rating: {ratings} star</h5>
            </div>
            <button className='add-to-cart'>Add to cart</button>
        </div>
    );
};



export default Product;