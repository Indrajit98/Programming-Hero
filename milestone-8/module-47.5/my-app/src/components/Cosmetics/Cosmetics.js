import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'



const Cosmetics = () => {
const comestics = [
    {
      "_id": "632e1d9b65cb13eac9eb50ae",
      "price": 0,
      "age": 36,
      "eyeColor": "brown",
      "name": "Chambers Barron"
    },
    {
      "_id": "632e1d9b7600880a8379d203",
      "price": 1,
      "age": 28,
      "eyeColor": "blue",
      "name": "Kent Garrett"
    },
    {
      "_id": "632e1d9b3c7e7b79b627be18",
      "price": 2,
      "age": 26,
      "eyeColor": "green",
      "name": "Nettie Boyle"
    },
    {
      "_id": "632e1d9b9b7af3781018e062",
      "price": 3,
      "age": 39,
      "eyeColor": "green",
      "name": "Summer Avila"
    },
    {
      "_id": "632e1d9b0ec804be4d788737",
      "price": 4,
      "age": 39,
      "eyeColor": "blue",
      "name": "Graves Nguyen"
    }
  ]

    return (
        <div>
            <h1>welcome to my Cosmetics store</h1>
           <div className='cosmetics'>
           {
               comestics.map(cosmetic => <Cosmetic cosmetic = {cosmetic}  key={cosmetic._id} ></Cosmetic> )
            }
           </div>
            
        </div>
    );
};

export default Cosmetics;