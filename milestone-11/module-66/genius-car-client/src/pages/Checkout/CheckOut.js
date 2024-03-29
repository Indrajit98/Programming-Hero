import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { title ,price ,_id} = useLoaderData()
    const {user} = useContext(AuthContext)

    const handlePlaceOrder = e =>{
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer:name,
            email,
            phone,
            message,
        }
      /*   if(phone.length>10){
            alert('phone number should be 10 characters longer')
        }
        else{

        } */
        fetch('https://genius-car-server-sand-pi.vercel.app/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order placed successfully')
                form.reset();

            }
        })
        .catch(err => console.error(err))

    }



    return (
        <div>
            <h2 className='text-4xl' >You are about to order: {title}</h2>
            <h3 className='text-3xl' >Price: {price}</h3>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid gird-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " /> 
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your message"></textarea>
                <input  className='btn' type="submit" value='Place Your Order' />
            </form>
        </div>
    );
};

export default CheckOut;