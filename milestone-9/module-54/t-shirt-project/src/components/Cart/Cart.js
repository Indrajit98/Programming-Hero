import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item</p>
    }
    else{
        message= <p>Thanks for buying</p>
    }


    return (
        <div>
            <p>Order summary</p>
            <h5>Order quantity {cart.length}</h5>
            <div>
                {
                    cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveItem(tshirt)}>x</button></p>)
                }
            </div>
            {
                message
            }
        </div>
    );
};

export default Cart;