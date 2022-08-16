document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFiled= document.getElementById('withdraw-input')
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(depositAmount)
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString)
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    
    withdrawTotal.innerText = currentWithdrawAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = currentBalanceTotal;
    withdrawFiled.value = ''
})