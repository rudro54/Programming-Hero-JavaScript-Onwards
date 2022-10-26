// 1. JSON stringify and parse

const student = {

    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

// converting to JSON
//console.log(student);
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// convert JSON to object 

const jsonObject = JSON.parse(studentJSON);
console.log(jsonObject);

// 2. fetch 

//fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))
// you have to check in what format you got the data

// Keys Values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [11, 22, 33, 44, 55, 66, 77, 88];
numbers.forEach(number => console.log(number));
numbers.map(num => num * 2);

// array like object like arguments  for of
// for of  => 
//array like objects getElementsByClassName querySelectorAll
//for in =>
// loop on an object  on objects

// add or remove for an object
const products = [
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'rayban', color: 'black ' },
    { name: 'camera', price: 9000, brand: 'nikon', color: 'gray' }

];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and add new product

const newProducts = { ...products, newProduct };

// create new array without one specific item
// remove phone means create a new array without phone 
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);
