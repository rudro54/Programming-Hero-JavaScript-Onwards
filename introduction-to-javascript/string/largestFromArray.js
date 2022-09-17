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





const numbers = [167, 190, 185, 256, 900, 5];
let largestNumberAfterCalculation = getTheLargestNumber(numbers);
let smallestNumberAfterCalculation = getTheSmallestNumber(numbers);
console.log(largestNumberAfterCalculation);
console.log(smallestNumberAfterCalculation);