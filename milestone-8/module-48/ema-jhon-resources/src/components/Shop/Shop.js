import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(products)

    useEffect ( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect ( () =>{
        const storedCart = getStoredCart();
        const saveCart = [];

        // console.log(storedCart);
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id ===id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
                console.log(addedProduct);
            }
        }
        setCart(saveCart)


    } ,[products])

    const handleAddToCart =(product) => {
        // console.log(product)
        const newCart = [...cart,product];
        setCart(newCart);

        addToDb(product.id)

    }


    return (
        <div className='shop-container'>

           <div className="products-container">
                {
                    products.map(product => <Product product = {product} handleAddToCart = {handleAddToCart} key={product.id} ></Product>)
                }
           </div>

           <div className="cart-container">
            <Cart cart = {cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;