
// 1. range error , not that happens in js frequently 

let numbers = [3, 4, 5, 6];
numbers.length = 2; // never do this , this will delete the rest two numbers
console.log(numbers);
console.log(numbers[25]); // out of range 

// console.log(money); //reference error calling something befor initializing 
//var money = 90; // hoesting happens

// for (let i = 0; i < 5 i++) {

// }
// syntax error without ; after 5


// cannot read properties of undefined  : very common error 

// let student = {};
// console.log(student.name); // undefined
// console.log(student.address); // undefined 
// console.log(student.address.city); // cannot read properties of undefined 