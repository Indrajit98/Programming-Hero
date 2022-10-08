import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {

    return (
        <div>
            <p>Order summary</p>
            <h5>Order quantity {cart.length}</h5>
            <div>
                {
                    cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveItem(tshirt)}>x</button></p>)
                }
            </div>
        </div>
    );
};

export default Cart;