
// step 1 : add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 2 : get the deposit amount from the deposit input field 
    // for input field use .value to get the value from the input field

    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount);
});