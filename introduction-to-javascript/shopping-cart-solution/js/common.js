function getTextElementById(elementId) {
    const totalCalculatedPrice = document.getElementById(elementId);
    const totalCalculatedPriceString = totalCalculatedPrice.innerText;
    const totalCalculated = parseInt(totalCalculatedPriceString);
    return totalCalculated;
};

function setElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {

    // calculate total 
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('sub-total', currentSubTotal);

    // calculate tax 
    const taxAmount = currentSubTotal * 0.1;
    setElementValueById('tax-amount', taxAmount);

    // calculate final total 

    const finalTotal = currentSubTotal + taxAmount;
    setElementValueById('final-total', finalTotal);


};