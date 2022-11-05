import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [service,setServices] = useState([])
    useEffect(() =>{
        fetch('https://genius-car-server-sand-pi.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
        

    },[])

    return (
        <div className='my-6'>
            <div className='text-center md:w-1/2 mx-auto my-5'>
                <p className='text-2xl font-bold  text-orange-600'>Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-d2 lg:grid-cols-3 gap-6'>
                {
                    service.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;