import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name, img, seller, price, ratings} = props.product;



    return (
        <div className='product'>
            <img src={img} alt="noImage" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
           
                <button className='btn-card' onClick={ () => props.handleAddToCart(props.product.name)} >
                    <p>add to card </p>
                     <FontAwesomeIcon icon = { faShoppingCart}></FontAwesomeIcon>
                </button>
           
        </div>
    );
};

export default Product;