import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css'


const Home = () => {

    const shirts = useLoaderData();
    console.log(shirts);

    return (
        <div className='home-container'>
            <div className="shirt-container">
                {
                    shirts.map(shirt => <Shirt
                        key={shirt.id}
                        shirt={shirt}

                    >
                    </Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;