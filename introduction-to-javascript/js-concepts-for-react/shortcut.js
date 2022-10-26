// 'almas' , 5 , true , {}, []
//'' , 0 , false , null , undefined

let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything 
if (!myMoney) {

}


const money = 800;
let food;
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha-biscuit';
}

// all those 7 lines of biriyani and cha bisucuit can be written 
// ternary operator 
let food1 = money > 100 ? 'biriyani' : 'cha-biscuit';
//console.log(food1);
let drink = (money > 100 && myVar > 100) ? 'coke' : 'tap-water';
//console.log(drink);

// shorcut to convert number to string 
// by adding one empty string 
// const number = 52;
// console.log(number);
// const numStr = number + '';
// console.log(numStr);

// convert string to number 
// add one +before string 

const input = '560';
const inputNum = +input;
//console.log(inputNum);

const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

//isActive ? showUser() : hideUser();
isActive && showUser(); // shortcut to run one after another 
// if isActive false then wont check showUser
// use && if left side is true then the right side will be 
// executed
// use || if the left side is false then right side will
// be executed

isActive || hideUser();
// toogle boolean
isActive = !isActive;
