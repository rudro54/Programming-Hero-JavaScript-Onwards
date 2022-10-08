// Math.max(you cant send array here, you only can send some numers to check which one is largest);

const max = Math.max(12, 15, 999, 50);
// console.log(max);
const numbers = [12, 90, 999, 88, 66];
//const largestArray = Math.max(numbers); // problem as array
const largest = Math.max(...numbers); // putting ... will solve this 
console.log(largest); // will show Nan cause this is an array putting ... will solve this 

const numbers2 = numbers;
numbers.push(55); // this will effect both arrays as they are reference of each other
numbers2.push(777);// this will effect both arrays as they are reference of each other
// console.log(numbers);
// console.log(numbers2);

// to solve this use spread operator

const numbers3 = [...numbers];
numbers.push(66); // this will effect both arrays as they are reference of each other
numbers3.push(888);// this will effect both arrays as they are reference of each other
console.log(numbers);
console.log(numbers3);

// spread operator 
const numbers4 = [...numbers];
const numbers5 = [45, 66, 88, ...numbers, 90, 999];

