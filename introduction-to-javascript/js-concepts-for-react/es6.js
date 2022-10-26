const numbers = [89, 35, 9];
const student = {

    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} 
has number ${numbers[2]} also liked ${student.movies[0]}`;

console.log(about);

// 2. arrow function 

const getFiftyFive = () => 55; // no parameter returns 55
const addSixtyFive = number => number + 65;  // one parameter 
// retruns adding 65 with that . no need bracket if one param
const isEven = x => x % 2 == 0; // return will be automatically
// true or false 

// multiple parameter 
const addThree = (x, y, z) => x + y + z;
// multi line will { } and do not return anything unless
// you write directly return

const doMath = (number1, number2) => {

    const sum = number1 + number2;
    return sum;
}

// spread operator
numbers.push(99);



const newNumbers = [...numbers];
numbers.push(55);
numbers.push(65);
numbers.push(33);



// create a new array from an older array and add an element
const currentNumbers = [...numbers, 100000, 500000];
console.log(newNumbers);
console.log(numbers);
console.log(currentNumbers);




