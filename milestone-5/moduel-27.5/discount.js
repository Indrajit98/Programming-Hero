document.getElementById('btn-discount').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    const discountValue = (30 * inputValue) / 100;
    const discountPrice = inputValue - discountValue;
    inputField.value = '';

    const price = document.getElementById('price')
    price.style.display = 'block'
    price.innerText = discountPrice;
    
    const inputPromoCode = document.getElementById('input-promo')
    inputPromoCode.value = ''

})
document.getElementById('input-promo').addEventListener('keyup', function (event) {
    const promoCode = event.target.value;
    const applyButton = document.getElementById('btn-discount');

    if (promoCode === 'DOM') {
        applyButton.removeAttribute('disabled')
        applyButton.style.backgroundColor = "rgb(194 65 12)";
    }
    else {
        applyButton.setAttribute('disabled', true)
        applyButton.style.backgroundColor = "rgb(249 115 22)";
    }

})