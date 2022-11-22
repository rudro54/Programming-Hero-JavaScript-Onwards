import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>please buy at least one item !!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <p>আমার জন্য একটা নাও</p>
            <p>তোমার নিজের জন্য তো নিলাই,</p>
            <p>এবার আমার জন্য একটা নাও</p>


        </div>
    }
    else {
        message = <p>Thanks for shopping !!</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `salmon`}>Order Summery</h3>
            <h5 className={`bold ${cart.length === 2 ? 'greenyellow' : 'lightcoral'}`}>Order Quantity : {cart.length}</h5>
            {
                cart.map(shirt => <p
                    key={shirt._id}
                >
                    {shirt.name}
                    <button onClick={() => handleRemoveItem(shirt)}> X</button>


                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>তিন জনরে গিফট দিবা ?</p> : <p> কিনো ..</p>
            }
            <p>And Operator </p>
            {
                cart.length === 2 && <h3>double trouble!!</h3>
            }
            <p>Or operator </p>
            {
                cart.length === 4 || <h4>চারটা আইটেম নিতে পারলা না ? হে হে </h4>
            }
        </div>
    );
};

export default Cart;

/* 
conditional rendering 
1. use element in a variable and use  if-else to set value
2. use ternary means if else in one line
3. && operator if condition is true i wan to show something 
4. || operator , if condition is false i want to show something 


*/