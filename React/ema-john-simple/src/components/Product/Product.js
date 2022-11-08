import React from 'react';
import './Product.css'

const Product = (product, handleAddToCart) => {

    // const { handleAddToCart, product } = props;
    const { name, price, img, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price :${price}</p>
                <p><small>Seller :{seller}</small></p>
                <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => handleAddToCart(product)}>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;