import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h3>Show Me All The Phones You Have</h3>
            <h5>I got :{phones.length}</h5>
            {
                phones.map(ph => <li><Link to={`phones/${ph.id}`}>{ph.name}</Link></li>)
            }
        </div>
    );
};

export default Home;