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

