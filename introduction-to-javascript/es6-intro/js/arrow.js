// function declaration 

function add(first, second) {
    const total = first + second;
    return total;

}

// another way function expression like const value = 5 ; this is variable expression
// below one is function expression 
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// functio expression with anonymous function 
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

// arrow function 

const add3 = (first, second) => first + second;
const result = add3(30, 20);
console.log(result);
