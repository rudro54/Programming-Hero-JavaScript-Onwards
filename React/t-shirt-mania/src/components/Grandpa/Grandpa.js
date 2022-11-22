import React, { createContext } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const RingContext = createContext('Matir Ring');

const Grandpa = () => {
    const house = 7;
    const ring = "gold ring";
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunt house={house}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;