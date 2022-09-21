
// Answer to question number one 

function radianToDegree(radianValue) {
    if (isNaN(radianValue) || typeof radianValue !== 'number') {
        throw new Error('your parameter must be a numeric one');
    } // validation if the parameter is taking numeric value or not

    const pi = Math.PI; // or i could use pi value directly here i.e const pi =3.14;
    let degreeValue = radianValue * (180 / pi);
    return degreeValue.toFixed(2); // used toFixed() for setting only 2 digits after decimal point.

}
console.log(radianToDegree('54'));

// answer to question number two 

function isJavaScriptFile(fileName) {


    let fileTypeCheck = fileName.endsWith('.js'); // checking the extension
    if (fileTypeCheck === true) {
        return true;
    }
    else {
        return false;
    }
}


// answer to question number three 

function oilPrice(dieseltQuantity, petrolQuantity, octaneQuantity) {


    let dieselAmount = dieseltQuantity * 114; // diesel price 114 taka per unit
    let petrolAmount = petrolQuantity * 130; // petrol price 130 taka per unit
    let octaneAmount = octaneQuantity * 135; // octane price 135 taka per unit

    totalAmount = dieselAmount + petrolAmount + octaneAmount;
    return totalAmount;

}

// answer to question number four 

function publicBusFare(totalPassengers) {
    let restPeopleAfterPrivateBus = totalPassengers % 50; // remainder of 50 person per each bus goers 
    return (restPeopleAfterPrivateBus % 11) * 250;  // remainder of 11 person per each micro-goers times fare
}



// answer to question number five 

function isBestFriend(firstFriend, secondFriend) {

    if ((firstFriend.name === secondFriend.friend) && (firstFriend.friend === secondFriend.name)) {
        return true;
    }
    else {
        return false;
    }


}





