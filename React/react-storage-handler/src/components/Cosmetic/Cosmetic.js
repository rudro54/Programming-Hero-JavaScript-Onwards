import React from 'react';

const Cosmetic = (props) => {
    const { name, id, price } = props.cosmetic;

    return (
        <div>
            <h2>Buy This : {name} </h2>
            <p>Only for ${price}</p>
            <strong>id : {id}</strong>
        </div>
    );
};

export default Cosmetic;