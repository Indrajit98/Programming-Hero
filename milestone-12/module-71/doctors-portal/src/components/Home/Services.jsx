import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images//whitening.png'

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening,
        },
    ]




    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='text-xl font-bold text-primary uppercase'>Our Services</h2>
                <h3 className='text-3xl'>Service We Provide</h3>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 my-8 gap-8'>
                {
                    servicesData.map(service => <div key={service.id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={service.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Services;