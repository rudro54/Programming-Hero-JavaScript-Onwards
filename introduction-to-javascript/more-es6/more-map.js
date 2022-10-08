const numbers = [12, 56, 87, 44];
const makeHalf = numbers.map(x => x / 2);
const thirds = numbers.map(x => x / 3);
console.log(makeHalf);
console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruize', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);

const products = [

    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }

];

//const items = products.map(product => console.log(product));
//console.log(items); // this will show undefined , undefined , undefined, undefined cause
// console does not return anything thats is why the value of items are undefined

const items = products.map(product => product.name);
console.log(items);
const prices = products.map(product => product.price);
console.log(prices);




