document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

    CalculateSubTotal()
})
document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);
    CalculateSubTotal()

})
