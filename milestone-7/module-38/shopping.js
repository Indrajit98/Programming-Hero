
const getInputValueId = id => {
    const inputFiled = document.getElementById(id);
    const inputValue = inputFiled.value;
    inputFiled.value = ''
    return inputValue;
}

const addProduct = () =>{
    const product = getInputValueId('product-name-field');
    const quantity = getInputValueId('product-quantity-field');

    console.log(product, quantity)
    // save to local storage
    // localStorage.setItem(product,quantity)
    saveItemToLocalStorage(product,quantity)

    addProductToDisplay(product, quantity)
}

const getShoppingCart = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {}
    if(savedCart){
        cart = JSON.parse(savedCart)
    }
    return cart;


}

const saveItemToLocalStorage = (product,quantity)=>{
    const cart = getShoppingCart();
    cart[product] = quantity;
    const cartStringiFied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringiFied)

}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = ` ${product}: ${quantity}

    `;
    productContainer.appendChild(li);
}
const displayStoreProducts = () =>{
    const cart = getShoppingCart();
    for(const product in cart){
        const quantity = cart[product]; 
        console.log(product,quantity)
        addProductToDisplay(product,quantity)
    }
}
displayStoreProducts()