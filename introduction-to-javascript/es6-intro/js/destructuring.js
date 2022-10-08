const fish = {
    name: 'king hilsha',
    address: 'chandpur',
    color: 'silver',
    phone: '01751626374',
    price: 4000

}

//basic way
// console.log(fish.price);
// console.log(fish.price);
// console.log(price);
// console.log(name);

//  or you can declaring same variable name as the object's property

//const price = fish.price;
// const phone = fish.phone;
// const name = fish.name;



//the easy way of doing this 

const { price } = fish;
//console.log(price);

const { name, age } = { name: 'zayed', age: 43, sex: 'male' };
console.log(age);
console.log(name);

// same way 

const { address } = fish;
console.log(address);


//array destructuring : you can use any name as variable not the same exact name as object
const [first, another] = [44, 66, 99, 00, 88];
console.log(first, another); // they will take the first two as two are declared 

const nayoks = ['shakib', 'bappa', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

