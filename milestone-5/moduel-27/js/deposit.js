document.getElementById('btn-deposit').addEventListener('click',function(){

    // const depositField = document.getElementById('deposit-input');
    // const depositFieldString = depositField.value;
    // const newDepositAmount = parseFloat(depositFieldString);
    // depositField.value = '';
    const newDepositAmount = getInputFiledValueById('deposit-input');

    // const depositTotal = document.getElementById('deposit-total')
    // const previousDepositTotalString = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(previousDepositTotalString);
    const previousDepositTotal = getElementValueById('deposit-total');
    
    // const newDepositTotal = previousDepositTotal + newDepositAmount;
    // depositTotal.innerText = newDepositTotal
    const newDepositTotal =previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total',newDepositTotal);

    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotalString = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString)
    const previousBalanceTotal = getElementValueById('balance-total');

    // const newBalanceTotal = previousBalanceTotalAmount + newDepositTotal;
    // balanceTotal.innerText = newBalanceTotal;
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})