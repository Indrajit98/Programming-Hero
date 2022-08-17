document.getElementById('btn-withdraw').addEventListener('click',function(){

    // const withdrawField = document.getElementById('withdraw-input');
    // const withdrawFieldString = withdrawField.value;
    // const newWithdrawAmount = parseFloat(withdrawFieldString);
    // withdrawField.value = '';
    const newWithdrawAmount = getInputFiledValueById('withdraw-input')

    // const withdrawTotal = document.getElementById('withdraw-total')
    // const previousWithdrawTotalString = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal
    const newWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total',newWithdrawTotal);

    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotalString = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString)
    const previousBalanceTotal = getElementValueById('balance-total');
    // const newBalanceTotal = previousBalanceTotalAmount - newWithdrawTotal;
    // balanceTotal.innerText = newBalanceTotal;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    setTextElementValueById('balance-total',newBalanceTotal)
    

})