// breakup with var
// no more var
// let : let it to reassign
// const : do not let it to reassign


// let money = 25;
// money = 35;
// console.log(money);

// const pakhi = 'jaan pakhi';
// //pakhi = 'moyna pakhi';
// const message = pakhi + '  potas potas';
// console.log(message);


const numbers = [12, 89, 65, 45];
// reassign no allowed 
//numbers = [77, 66, 55, 22, 99]; // this is not allowed
// but we can modify the previus value inside the array means partial modification possible not
// the full array or object
numbers.push(123);
numbers[1] = 90;
//console.log(numbers);

// same goes for object

const student = {
    name: 'mofiz',
    address: 'rongpur'

}

// student ={name : 'mofazzol} // not allowed as we are trying to change the whole object

student.name = "mofazzol"; // this is allowed as partial modification

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]; // this is creating every time so const is not problem here 
    sum = sum + number;
}

console.log(number); // will get error cause const have block scope and outside for loop it has no 
//existance
// if we declare the number as var it would be visible cause hoisting will be performed 
// means in case of hoising they took the item in the top


