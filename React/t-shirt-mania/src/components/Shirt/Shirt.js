import React from 'react';

const Shirt = ({ shirt }) => {
    const { picture, name } = shirt;
    return (
        <div>
            <h2>Name : {name}</h2>
            <img src={picture} alt="" />
        </div>
    );
};

export default Shirt;