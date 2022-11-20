import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-300 m-3 p-6 rounded-md'>
            <div>
                <h2>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200 '>/mon</span>
                </h2>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                >

                </Feature>)

            }
            <button className='bg-green-500 w-full mt-2 rounded-md py-2 text-white font-bold'>Buy Now!!</button>

        </div>
    );
};

export default PriceOption;