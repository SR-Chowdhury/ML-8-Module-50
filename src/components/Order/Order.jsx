import React from 'react';
import './Order.css';

const Order = (props) => {
    const {id} = props.cart;
    console.log(id);

    return (
        <div>
            <h1 className="text-center order-summary-heading">Order Summary</h1>
            <div className="order-info">
                <h3>Selected Item:</h3>
                <h3>Total Price: </h3>
                <h3>Total Shipping Charge: </h3>
                <h3>Tax: </h3>
                <h2>Grand Total: </h2>

                <div>
                    <button className='clear-cart-btn'>Clear Cart</button>
                </div>
                <div>
                    <button className='review-order-btn'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Order;