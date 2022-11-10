import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    //console.log(cart);
    let total = 0; // as the value will be updated you can use reducer here
    let shipping = 0; // update able
    let quantity = 0;
    for (const product of cart) {

        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 0.10).toFixed(2)); // used parseFloat
    const grandTotal = total + shipping + tax;  // this will show a big number as 
    // using toFixed  made the shipping a string

    return (
        <div className='cart'>
            <h1>order summary</h1>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax :{tax}</p>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;