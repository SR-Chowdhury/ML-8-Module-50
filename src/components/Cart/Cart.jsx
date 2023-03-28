import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // Option 1
    // const cart = props.cart; 

    // Option 2
    const {cart} = props;
    // console.log(cart);

    const total = cart.reduce( (prev, curr) => prev + curr.price, 0);

    return (
        <div>
            <h1 className="text-center cart-summary-heading">Order Summary</h1>
            <div className="cart-info">
                <h3>Selected Item: {cart.length}</h3>
                <h3>Total Price: {total}</h3>
                <h3>Total Shipping Charge: </h3>
                <h3>Tax: </h3>
                <h2>Grand Total: </h2>

                <div>
                    <button className='clear-cart-btn'>Clear Cart</button>
                </div>
                <div>
                    <button className='review-cart-btn'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;