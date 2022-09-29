function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousePhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousePhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousePhoneNumber - 1;
    }



    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
};


function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
};


function getTextElementById(elementId) {
    const totalCalculatedPrice = document.getElementById(elementId);
    const totalCalculatedPriceString = totalCalculatedPrice.innerText;
    const totalCalculated = parseInt(totalCalculatedPriceString);
    return totalCalculated;
};

function calculateSubTotal() {

    // calculate total 
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

}




document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();



});


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
});