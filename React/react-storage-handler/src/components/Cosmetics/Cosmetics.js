import React, { useEffect, useState } from 'react'; // importing from node_modules as No ./ is there
import { getTotalPrice } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
//import { add } from '../../utilities/calculate';



const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first, second);
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))

    }, [])


    const total = getTotalPrice(cosmetics);//you must write array
    return (
        <div>
            <h2>Welcome To My Cosmetics World!!</h2>
            <p>Price :{total}</p>
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