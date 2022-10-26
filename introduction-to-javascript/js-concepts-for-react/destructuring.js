//1. array destructuring
// old way
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// new way
//const [x, y] = [42, 65]
//or 
const [x, y] = numbers;
console.log(x, y);

// desxtructuring function into array

function boxify(number1, number2) {
    const numbers = [number1, number2];
    return numbers;
}
const [first, second] = boxify(90, 34);

const student = {

    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const [firstMovie, secondMovie] = student.movies;

// object destructuring 

//const { name, age } = { name: 'alu', age: 32 };
const { name, age } = { id: 12, name: 'alu', salary: 32000, age: 32 };

//detailed

const employee = {

    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'

        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee.specification.watch;

//  optional chaining if no specification there you dont know
//const { brand } = employee?.specification?.watch;


