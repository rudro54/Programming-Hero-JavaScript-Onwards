
// step 1 : add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 2 : get the deposit amount from the deposit input field 
    // for input field use .value to get the value from the input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3 : get the current deposit total amount 
    // for non input element ( element other than  input textarea ) use innerText to
    // get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4 : add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 : get current balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

    // step 6 : calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step : clear the deposit field 
    depositField.value = ' ';


});