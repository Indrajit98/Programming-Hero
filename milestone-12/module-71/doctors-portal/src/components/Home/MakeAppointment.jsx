import React from 'react';
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section className='bg-appointment mt-32 lg:p-12'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" rounded-lg -mt-48 md:w-1/2 hidden lg:block" />
                    <div className='text-white'>
                        <h4 className='text-xl text-primary font-semibold'>Appointment</h4>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                       <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;