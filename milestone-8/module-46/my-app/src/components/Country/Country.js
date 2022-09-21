import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {name,flags,population,area} = props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Area: {area}</p>
        
        </div>
    );
};

export default Country;