import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';

import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }
    , []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shopContainer'>
            <div className="productsContainer">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="orderSummaryContainer">
                {/* <Order cart = {cart}/> */}
                {cart.length}
            </div>
        </div>
    );
};

export default Shop;