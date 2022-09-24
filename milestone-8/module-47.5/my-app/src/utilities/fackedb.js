const addToDb = _id =>{
    let shoppingCart = {};

// get the shopping Cart
const storeCart = localStorage.getItem('shopping-cart')
if(storeCart){
    shoppingCart = JSON.parse(storeCart)
}
    // add quantity
    const quantity = shoppingCart[_id]
    if(quantity){
        // console.log(' already exists');
        const newQuantity = quantity + 1;
        shoppingCart[_id] = newQuantity;
        // localStorage.setItem(_id,newQuantity)
    }
    else{
        // console.log('new item');
        shoppingCart[_id] = 1;
       /*  localStorage.setItem(_id , 1) */
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

    
}
// delete storeCart 
const removeCardDb = _id => {
    // console.log('indrajit'  + _id);

    const storeCart = localStorage.getItem('shopping-cart')
    if (storeCart ) {
        const shoppingCart = JSON.parse(storeCart);
        if(_id in shoppingCart) {
            localStorage.removeItem (_id)
            delete shoppingCart[_id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
            console.log(_id)
        }
    }


}

export {addToDb , removeCardDb};