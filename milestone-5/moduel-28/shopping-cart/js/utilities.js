function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber = 0;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 110;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


// phone calculation function 

function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    let newPhoneNumber = 0;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 55;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

function getTextElementValueId(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;

}

// Sub calculation function
function setTextElementValueId(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function CalculateSubTotal() {
    // calculate total 

    const currentPhoneTotal = getTextElementValueId('phone-total');
    const currentCaseTotal = getTextElementValueId('case-total');
    const currentSubtotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueId('sub-total', currentSubtotal);
    
    // calculate tax 
    const taxAmount = currentSubtotal * 0.1;
    setTextElementValueId('tax-amount', taxAmount)

    const finalAmount = currentSubtotal + taxAmount;
    setTextElementValueId('final-amount', finalAmount);
}