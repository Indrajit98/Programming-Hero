import React from 'react';
import { useState } from 'react';
import { addToDb, removeCardDb } from '../../utilities/fackedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const {name,eyeColor,_id} =(props.cosmetic);
    // console.log(_id)
    // const [count,setCount ] = useState[1]

  function addToCard(_id){
      addToDb(_id)
    }

    function removeCard(_id){
       removeCardDb(_id)
    }

    return (
        <div className='cosmetic'>
            <h1>Name: { name}</h1>
            <h4>Color: {eyeColor}</h4>
            <button className='btn' onClick={ () => addToCard(_id)}>add to card</button>
            <button className='btn' onClick={ () => removeCard(_id)}>remove</button>
        </div>
    );
};

export default Cosmetic;