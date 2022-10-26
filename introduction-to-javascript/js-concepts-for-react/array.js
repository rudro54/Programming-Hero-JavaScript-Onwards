// 1. array of objects

const products = [
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'rayban', color: 'black ' },
    { name: 'camera', price: 9000, brand: 'nikon', color: 'gray' }

]

// 2. map
const brands = products.map(product => product.brand);
// do somethign and create a  array and return that 
//console.log(brands);
const prices = products.map(product => product.price);
//console.log(prices);
// if you dont need to return then
//products.forEach(product => console.log(product)); // all
//products.forEach(product => console.log(product.color)); // color
products.forEach(product => {
    // multi line


})

// 3. filter depending on some logic will return an array

const cheap = products.filter(product => product.price <= 5000);
//console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
//console.log(specificName);

// find will only return the first one

const specificNameUsingFind = products.find(product => product.name.includes('n'));
console.log(specificNameUsingFind);
