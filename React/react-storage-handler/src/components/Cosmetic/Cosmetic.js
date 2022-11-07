import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, id, price } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }

    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy This : {name} </h2>
            <p>Only for ${price}</p>
            <strong>id : {id}</strong>
            <br />
            <br />
            <button onClick={addToCartWithParam}>Add To Cart</button>
            <br />
            <br />
            <button onClick={() => addToCart(id)}>Add To Cart : shortcut</button>
            <br />
            <br />
            <button onClick={() => addToCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;