import React from 'react'; // importing from node_modules as No ./ is there
import Cosmetic from '../Cosmetic/Cosmetic';
//import { add } from '../../utilities/calculate';



const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first, second);
    const cosmetics = [

        { id: 1, name: 'alta', price: '100' },
        { id: 2, name: 'palis', price: '200' },
        { id: 3, name: 'malis', price: '300' },
        { id: 4, name: 'nalis', price: '400' },
        { id: 5, name: 'balis', price: '500' },


    ];


    return (
        <div>
            <h2>Welcome To My Cosmetics World!!</h2>
            {/* <p>Total : {total}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}


                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;