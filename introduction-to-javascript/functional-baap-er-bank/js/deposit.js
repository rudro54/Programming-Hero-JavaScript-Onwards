document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositValue = getInputTextValue('deposit-amount');
    const oldDepositvalue = getDisplayElementValue('deposit-total');
    const totalDepositValue = newDepositValue + oldDepositvalue;
    setDisplayElementValue('deposit-total', totalDepositValue);


    const oldBalanceValue = getDisplayElementValue('balance-total');
    const newBalanceValue = getDisplayElementValue('deposit-total');
    const totalBalanceValue = oldBalanceValue + newBalanceValue;
    setDisplayElementValue('balance-total', totalBalanceValue);



})