import React from 'react';

const Product = (props) => {
    const { name, price, img, ratings, seller } = props.product;
    return (
        <div>
            <img src={img} alt=""></img>
        </div>
    );
};

export default Product;