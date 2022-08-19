document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    CalculateSubTotal()

})



document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newCaseNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newCaseNumber);
    
    CalculateSubTotal()

})