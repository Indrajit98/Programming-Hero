import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import BookingModal from "./BookingModal";



const AvailableAppointment = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch(`appointmentOptions.json`)
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))

    }, [])

    return (
        <section className="mt-16">
            <div className="text-center font-semibold text-secondary">
                <p>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
                {
                    appointmentOptions.map(option => <div key={option._id}>
                        <div>
                            <div className="card shadow-xl md:p-8">
                                <div className="card-body text-center">
                                    <h2 className="card-title text-secondary justify-center text-2xl font-semibold">{option.name}</h2>
                                    <p>{option.slots.length > 0 ? option?.slots[0] : 'Try Another day'}</p>
                                    <p>{option.slots.length} {option.slots > 1 ? 'spaces' : 'space'} available</p>
                                    <label onClick={() => setTreatment(option)} disabled={option.slots.length === 0} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white md:w-1/2 mx-auto mt-4">Book Appointment</label>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                {
                    treatment && <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>
                }
            </div>


        </section>
    );
};

export default AvailableAppointment;
