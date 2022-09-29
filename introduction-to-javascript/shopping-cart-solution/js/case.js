
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouseCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previouseCaseNumber + 1;
    }
    else {
        newCaseNumber = previouseCaseNumber - 1;
    }



    caseNumberField.value = newCaseNumber;


}






document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});


document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateCaseNumber(false);

});




