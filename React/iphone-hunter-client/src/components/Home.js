import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>Show Me All The Phones You Have</h3>
            <h5>I got :{users.length}</h5>
        </div>
    );
};

export default Home;