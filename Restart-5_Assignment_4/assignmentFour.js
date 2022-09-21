
// Answer to question number one 

function radianToDegree(radianValue) {
    if (isNaN(radianValue)) {
        throw new Error('your parameter must be a numeric one');
    } // validation if the parameter is taking numeric value or not

    const pi = Math.PI; // or i could use pi value directly here i.e const pi =3.14;
    let degreeValue = radianValue * (180 / pi);
    return degreeValue.toFixed(2); // used toFixed() for setting only 2 digits after decimal point.

}


// answer to question number two 

function isJavaScriptFile(fileName) {

    if (typeof fileName !== 'string') { // to check if a string is passed or not
        throw new Error('your parameter must be a string type');
    }

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

    if (arguments.length != 3) {  // to check if 3 arguments are passed correctly
        throw new Error('You must provide three separate parameters');
    }
    else if (isNaN(dieseltQuantity) || isNaN(petrolQuantity) || isNaN(octaneQuantity)) {
        throw new Error('All of your parameters must be numeric ones');
    }



    let dieselAmount = dieseltQuantity * 114; // diesel price 114 taka per unit
    let petrolAmount = petrolQuantity * 130; // petrol price 130 taka per unit
    let octaneAmount = octaneQuantity * 135; // octane price 135 taka per unit

    totalAmount = dieselAmount + petrolAmount + octaneAmount;
    return totalAmount;

}



// answer to question number four 

function publicBusFare(totalPassengers) {

    if (isNaN(totalPassengers)) {
        throw new Error('your parameter must be a numeric one');
    } // validation if the parameter is taking numeric value or not

    let restPeopleAfterPrivateBus = totalPassengers % 50; // remainder of 50 person per each bus goers 
    return (restPeopleAfterPrivateBus % 11) * 250;  // remainder of 11 person per each micro-goers times fare
}



// answer to question number five 

function isBestFriend(firstFriend, secondFriend) {

    if (arguments.length != 2) {  // to check if 2 arguments are passed correctly
        throw new Error('You must provide two separate parameters');
    }
    else if (typeof firstFriend !== Object && typeof secondFriend !== Object) {
        throw new Error('You must provide two separate objects'); // to check if 2 arguments are objects 
    }


    if ((firstFriend.name === secondFriend.friend) && (firstFriend.friend === secondFriend.name)) {
        return true;
    }
    else {
        return false;
    }


}







