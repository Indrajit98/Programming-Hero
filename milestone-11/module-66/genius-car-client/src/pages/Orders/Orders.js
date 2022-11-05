import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user,logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    // console.log(orders);

    useEffect(() => {
        fetch(`https://genius-car-server-sand-pi.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status ===401 || res.status ===403){
                  return logOut()
                }

               return res.json()
            })
            .then(data => {

                // console.log('inside order',data)
                setOrders(data)
            })
    }, [user?.email,logOut])

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if(proceed){
            fetch(`https://genius-car-server-sand-pi.vercel.app/orders/${id}`,{
                method:'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }

            })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert('delete successfully')
                    const remaining = orders.filter(odr => odr._id !== id)
                    console.log(remaining);
                    setOrders(remaining)
                }
            })
        }

    }
    const handleStatus = id =>{
        fetch(`https://genius-car-server-sand-pi.vercel.app/orders/${id}`,{
            method:'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({status:'Approved'}),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                const remaining = orders.filter(odr => odr._id !==id)
                const approving = orders.find(ord=> ord._id === id)
                approving.status = 'Approved'
                const newOrders = [approving, ...remaining ]
                setOrders(newOrders)


            }
        })

    }
    return (
        <div>
            <h2>Order number:{orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} order = {order} handleDelete={handleDelete} handleStatus={handleStatus}></OrderRow>)
                        }
                        
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Orders;