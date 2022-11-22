import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css'


const Home = () => {

    const shirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (shirt) => {
        const exists = cart.find(ts => ts._id === shirt._id)
        if (exists) {
            alert('item already taken')
        } else {
            const newCart = [...cart, shirt];
            setCart(newCart);
            // alert('added successfully')

        }
    }

    const handleRemoveItem = shirt => {
        const remaining = cart.filter(ts => ts._id !== shirt._id);
        setCart(remaining);
    }


    return (
        <div className='home-container'>
            <div className="shirt-container">
                {
                    shirts.map(shirt => <Shirt
                        key={shirt._id}
                        shirt={shirt}
                        handleAddToCart={handleAddToCart}
                    >
                    </Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;