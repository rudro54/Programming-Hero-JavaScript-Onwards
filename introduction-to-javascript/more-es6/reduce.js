// map forecah filter find reduce

const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction , initial value)
// accumulationFunction has two parameters

//const sum = numbers.reduce((previous, current) => previous + current, 0);
const sum = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current

}, 0);
console.log(sum);

