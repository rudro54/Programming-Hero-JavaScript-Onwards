import React, { useState } from 'react';
import "./Shirt.css"

const Shirt = ({ shirt, handleAddToCart }) => {
    const { picture, name, price } = shirt;

    return (
        <div className='shirt'>

            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price :${price}</h4>
            <button onClick={() => handleAddToCart(shirt)}>Buy This</button>
        </div>
    );
};

export default Shirt;