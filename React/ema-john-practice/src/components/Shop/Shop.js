import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //loading data use state 
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // now need useState to fetch data
    useEffect(() => {

        fetch('products.json') // fetching from local file
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // this last array is dependency injection 

    useEffect(() => {

        const storedCart = getStoredCart();
        // inside object we are looping with for--in
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);


    }, [products])


    // this was supposed to be in product but 
    // now we are using here as js cant send data upward
    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...Cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}


                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
// copy src>fakedata>product.json into public folder

export default Shop;