import React from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const {name} =(props.cosmetic);
    return (
        <div>
            <h1>Name: { name}</h1>
        </div>
    );
};

export default Cosmetic;