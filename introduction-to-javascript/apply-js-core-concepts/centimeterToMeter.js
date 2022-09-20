function centimeterToMeter(centimeterAmount) {
    let result = centimeterAmount / 100;
    return result;
}

let amountInMeter = centimeterToMeter(1000);
console.log("Your desired meter is :", amountInMeter + ' meter'); 