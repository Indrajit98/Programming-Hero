import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products , initialCart} = useLoaderData();
    const [cart , setCart ] = useState(initialCart)
    // console.log(products);
    const handleRemoveITem = (id) =>{
        // console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)


    }

    const clearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
        <div className="orders-container">
            {
                cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveITem = {handleRemoveITem}></ReviewItem>)
            }
           <div className='status'>
            {
                cart.length === 0 && <h2>NO items for review please <Link to = '/'>Shop more</Link></h2>
            }
           </div>
           
        </div>
        <div className="cart-container"> 
            <Cart clearCart={clearCart} cart={cart}></Cart>
    
        </div>
    </div>
    );
};

export default Orders;