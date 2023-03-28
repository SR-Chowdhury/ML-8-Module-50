import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }
        , []);

    return (
        <div className='shopContainer'>
            <div className="productsContainer">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
            <div className="orderSummaryContainer bg-danger">
                <h1>Order summary</h1>
            </div>
        </div>
    );
};

export default Shop;