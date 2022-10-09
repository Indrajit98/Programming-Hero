import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Cousin</h2>
            {ring}
        </div>
    );
};

export default Cousin;