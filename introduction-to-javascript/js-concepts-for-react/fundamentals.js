
//1.how to declare a varialbe using let and const 

const fatherName = 'Arnold';
let weather = 'winter';

//2. conditions 
// 6 basic conditions : >,<,===, !== , <= ,>=
//multiple conditions : && ||

if (fatherName === 'arnold' || season === 'rainy') {

} else if (fatherName === 'Arnold') {

}

//3. array declare
// index
// length , push , 

const numbers = [89, 35, 9];
numbers[0] = 65;

//4. fundamental for loop

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// function 

function multiply(number1, number2) {
    const result = number1 * number2;
    return result;
}

const output = multiply(35, 78);

//6.object 
// 3 ways to access propertry by name

const student = {

    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const myVariable = name;

console.log(student.age);//direct by propetry
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in
// a variable