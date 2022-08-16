document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFiled= document.getElementById('withdraw-input')
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawFiled.value = ''

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number')
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString)
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Sorry,the current balance is not this amount')
        return
    }
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount; 
    withdrawTotal.innerText = currentWithdrawAmount;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;

    
})