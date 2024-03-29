import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';




const BookingModal = ({ treatment, setTreatment, selectedDate,refetch }) => {
    const { name, slots,price } = treatment;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)
    console.log(user);


    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointment: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
            price,

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(data)
                    toast.success('Booking confirmed')
                    refetch();
                }
                else{
                    toast.error(data.message)

                }
            })

        console.log(booking);
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full mt-3" />
                        <select name='slot' className="select select-bordered w-full" >
                            {
                                slots?.map((slot, i) => <option key={i} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full mt-3" required />
                        <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full mt-3" required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full mt-3" required /><br />
                        <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;