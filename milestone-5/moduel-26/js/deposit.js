document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = ''
    
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number')
        return;
    }
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString)
    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = currentDepositAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = currentBalanceTotal;
    
})