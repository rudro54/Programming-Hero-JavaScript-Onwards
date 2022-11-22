import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css'


const Home = () => {

    const shirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (shirt) => {
        const newCart = [...cart, shirt];
        setCart(newCart);
    }


    return (
        <div className='home-container'>
            <div className="shirt-container">
                {
                    shirts.map(shirt => <Shirt
                        key={shirt.id}
                        shirt={shirt}
                        handleAddToCart={handleAddToCart}
                    >
                    </Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;