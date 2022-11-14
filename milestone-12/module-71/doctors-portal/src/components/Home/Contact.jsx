import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section className='bg-appointment mt-20'>
            <div className='text-center pt-16'>
                <h4 className='text-2xl text-primary font-semibold'>Contact Us</h4>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <div className="md:hero px-3 lg:pt-10 pt-5" >
                    <div className="card md:w-1/2">
                            <div className="form-control">
                                <input type="text" placeholder="email" className="input input-bordered my-4" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered my-4" />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea  my-4" placeholder="Your Message"></textarea>
                            </div>
                           <div className='mx-auto my-4'>
                           <PrimaryButton>Submit</PrimaryButton>
                           </div>
                    </div>
            </div>


        </section>
    );
};

export default Contact;