import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect ( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart =(product) => {
        // console.log(product)
        const newCart = [...cart,product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>

           <div className="products-container">
                {
                    products.map(product => <Product product = {product} handleAddToCart = {handleAddToCart} key={product.id} ></Product>)
                }
           </div>

           <div className="cart-container">

            <h4>Order Summary</h4>
            <p>Seletect Item : {cart.length}</p>

           </div>
        </div>
    );
};

export default Shop;