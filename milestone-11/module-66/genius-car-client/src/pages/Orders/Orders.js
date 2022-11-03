import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState({})
    console.log(orders);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div>
            <h2>Order number:{orders.length}</h2>

        </div>
    );
};

export default Orders;