import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Order Quantity : {cart.length}</h5>
        </div>
    );
};

export default Cart;