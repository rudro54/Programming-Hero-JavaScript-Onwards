import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, region, area, population } = props.country
    return (
        <div className='country'>
            <h2>Country Name :{name.common}</h2>
            <small>Region : {region}</small>
            <br />
            <small>Area :{area}</small>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;