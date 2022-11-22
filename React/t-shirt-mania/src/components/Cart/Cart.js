import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Order Quantity : {cart.length}</h5>
            {
                cart.map(shirt => <p
                    key={shirt._id}
                >
                    {shirt.name}
                    <button onClick={() => handleRemoveItem(shirt)}> X</button>


                </p>)
            }
        </div>
    );
};

export default Cart;

/* 
conditional rendering 
1. use element and if-else


*/