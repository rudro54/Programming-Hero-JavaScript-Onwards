const numbers = [2, 8, 4, 6, 3];



function getDouble(numbers) {

    const output = [];

    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }

    return output;

}

function doubleItOld(number) {
    return number * 2;
}

const doubleIt = x => x * 2;

const result = getDouble(numbers);
console.log(result);

/* 

purpose :
1. get an array
2. for every element of an array , do something
3. store the result in an array
4. return the result array


*/

const makeDouble = numbers.map(doubleIt); // call back function 
console.log(makeDouble);
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);
const makeDoubleShortCut = numbers.map(x => x * 2);
console.log(makeDoubleShortCut);
const makeFiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(makeFiveTimes);