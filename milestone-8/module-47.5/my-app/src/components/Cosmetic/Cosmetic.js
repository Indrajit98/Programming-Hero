import React from 'react';
import { useState } from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const {name,eyeColor} =(props.cosmetic);
    // const [count,setCount ] = useState[1]

  function btn(name){
       console.log(name);
    }

    return (
        <div className='cosmetic'>
            <h1>Name: { name}</h1>
            <h4>Color: {eyeColor}</h4>
            <button className='btn' onClick={ () => btn(props.cosmetic)}>add to card</button>
        </div>
    );
};

export default Cosmetic;