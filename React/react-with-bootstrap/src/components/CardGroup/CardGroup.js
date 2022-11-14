import React from 'react';
import Card from './Card/Card';

const CardGroup = () => {

    // need data to send as props

    const products = [


        { id: 1, name: 'macbook pro', price: 145000 },
        { id: 2, name: 'macbook crow', price: 155000 },
        { id: 3, name: 'macbook grow', price: 165000 }

    ];





    return (

        <div class="card-group">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)

            }



        </div>
    );
};

export default CardGroup;