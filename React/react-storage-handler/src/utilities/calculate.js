const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

// const numbers = [20, 24 35, 65, 89];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);

// const items = [

//     { id: 1, name: 'alta', price: 100 },
//     { id: 2, name: 'feeta', price: 200 },
//     { id: 3, name: 'nailPolish', price: 300 },
//     { id: 4, name: 'churi', price: 400 },
//     { id: 5, name: 'nakful', price: 500 },


// ]
// const sumReducer = (previous, current) => previous + current.price;
// // in case of object current you need to specify the object value you need
// // to calculate 
// const itemTotal = items.reduce(sumReducer, 0);

const getTotalPrice = cosmetics => {
    const reducer = (previous, current) => previous + current.price;
    const total = cosmetics.reduce(reducer, 0);
    return total;
}




export {
    add,
    multiply,
    getTotalPrice
};
