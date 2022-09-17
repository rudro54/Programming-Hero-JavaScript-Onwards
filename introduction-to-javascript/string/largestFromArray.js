function getTheLargestNumber(numbers) {

    let largestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {


        if (numbers[i] > largestNumber) {

            largestNumber = numbers[i];
        }

    }
    return largestNumber;

}

function getTheSmallestNumber(numbers) {

    let smallestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {


        if (numbers[i] < smallestNumber) {

            smallestNumber = numbers[i];
        }

    }
    return smallestNumber;

}

function reverseWord(str) {
    const words = str.split(' ');

    const resultArray = [];

    for (i = words.length - 1; i >= 0; i--) {
        resultArray.push(words[i]);
    }
    const reversed = resultArray.join(' ');
    return reversed;

}





// const numbers = [167, 190, 185, 256, 900, 5];
// let largestNumberAfterCalculation = getTheLargestNumber(numbers);
// let smallestNumberAfterCalculation = getTheSmallestNumber(numbers);
// console.log(largestNumberAfterCalculation);
// console.log(smallestNumberAfterCalculation);

const myString = `i am a good boy`;
const resultAfterReverse = reverseWord(myString);
console.log(resultAfterReverse);