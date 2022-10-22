let first;
console.log(first);
function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result);

function third(a, b, c, d) {
    const result = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 5);

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    else {
        return a + b;
    }
}
let resultNoNegative = noNegative(5, -2);
console.log(resultNoNegative);

const fifth = { name: 'zayed', age: 43 };
console.log(fifth.salary);

const sixth = [89, 99, 0, 77, 98, 400];
// you should not do it , instead use splice   
delete sixth[1]; // deleting explicitely
console.log(sixth[1], sixth[30], sixth[500]);
console.log(sixth); // will create a hole here 
const eight = undefined;
// better way
const nine = null;

const data = { results: [], updated: null }; // null is an object
console.log(typeof undefined);
console.log(typeof null);