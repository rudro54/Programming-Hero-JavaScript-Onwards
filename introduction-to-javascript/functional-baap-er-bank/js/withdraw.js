document.getElementById('btn-withdraw').addEventListener('click', function () {

    const oldWithdrawValue = getDisplayElementValue('withdraw-total');
    const newWithdrawValue = getInputTextValue('withdraw-amount');
    const totalWithdrawValue = oldWithdrawValue + newWithdrawValue;

    setDisplayElementValue('withdraw-total', totalWithdrawValue);

    const oldBalanceValue = getDisplayElementValue('balance-total');
    const newBalanceValue = oldBalanceValue - newWithdrawValue;
    setDisplayElementValue('balance-total', newBalanceValue);



})