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

};