import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    const {name,picture,price} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default TShirt;