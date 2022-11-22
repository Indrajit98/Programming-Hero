import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Pk)
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const {treatment,price,appointment,slot} = booking;

    if(navigation.state === ' loading'){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text 3xl font-semibold'>Payment for {treatment}</h3>
            <p className='tex-xl'>Please pay $<strong>{price}</strong> for your appointment on {appointment} at {slot} </p> 
            <div className='w-1/2 mt-6'>
            <Elements stripe={stripePromise}>
                <CheckOutForm booking ={booking}></CheckOutForm>
            </Elements>
            </div>

        </div>
    );
};

export default Payment;