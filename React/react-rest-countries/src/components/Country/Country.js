import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, region, area, population, flags } = props.country;
    // console.log(props.country);
    return (
        <div className='country'>
            <h2>Country Name :{name.common}</h2>
            <small>Region : {region}</small>
            <br />
            <img src={flags.png} alt="" />
            <br />
            <small>Area :{area}</small>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;