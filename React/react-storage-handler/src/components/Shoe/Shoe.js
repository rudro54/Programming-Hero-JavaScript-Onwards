import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoe = () => {
    const first = 12;
    const second = 13;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>This is shoe compo</h3>
            <p>Result : {result} and Sum : {sum}</p>


        </div>
    );
};

export default Shoe;