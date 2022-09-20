
function onlyPositive(arrayWithProblems) {
    const resultArray = [];

    for (let i = 0; i < arrayWithProblems.length; i++) {
        if (arrayWithProblems[i] >= 0) {
            resultArray.push(arrayWithProblems[i]);
        }
        else {
            return resultArray;
        }
    }
    return resultArray;
}

const arrayToPass = [45, 87, 96, 11, 63, -56, 71, 28];
let result = onlyPositive(arrayToPass);
console.log(result);