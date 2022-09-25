import React from 'react';

const Cart = ({cart}) => {
    // const {name} = props.cart
    // console.log(props);
    return (
        <div>
            <h4>Order Summary </h4>
            <p>Seletect Item : {cart.length}</p>

            
        </div>
    );
};

export default Cart;