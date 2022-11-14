import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import '../../Style/Banner.css'

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm every day',
            icon: clock,
            bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary',
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00 pm every day',
            icon: marker,
            bgClass: 'bg-accent',
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00 pm every day',
            icon: phone,
            bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary',
        },
    ]


    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-20 '>
            {
                cardData.map(info => <div key={info.id}>
                    <div className={`card lg:card-side shadow-xl p-6 text-white ${info.bgClass}`}>
                        <figure><img src={info.icon} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default InfoCards;