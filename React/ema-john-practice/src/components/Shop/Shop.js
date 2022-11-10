import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //loading data use state 
    const [products, setProducts] = useState([]);
    // now need useState to fetch data
    useEffect(() => {

        fetch('products.json') // fetching from local file
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // this last array is dependency injection 

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}


                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>order summary</h1>
            </div>
        </div>
    );
};
// copy src>fakedata>product.json into public folder

export default Shop;