const add = (first, second) => first + second;
// implicit return is not declared but happenning 

const fullName = (firstName, lastName) => firstName + ' ' + lastName;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function 

const getPi = () => 3.14;

// one parameter 

const makeDouble = (number) => number * 2;

// one parameter simplified version you may not need to give bracket

const makeTriple = x => x * 3;

// multi line arrow function 
// for multi lines arrow function if you need to return you have to write return like before 
// using second bracket means multi line arrow so need to declare return if necessary

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}

