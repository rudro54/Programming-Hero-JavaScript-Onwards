import React from 'react';
import './Product.css'

const Product = (props) => {
    // destructuring so that we need not to write big names

    const { name, img, seller, ratings, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p>{name}</p>
                <p>price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;