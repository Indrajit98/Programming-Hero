import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col md:flex-row flex justify-around">
                    <img src={treatment} alt='' className="md:max-w-sm rounded-lg shadow-2xl lg:w-1/2" />
                    <div className='lg:w-1/2'>
                        <h1 className="md:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Treatment;