import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
   /*  queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }, */
    queryFn : () => fetch(url,{
        headers:{
            authorization:`bearer ${localStorage.getItem('access_token')}`
        }

    })
    .then(res => res.json())
  });

  return (
    <div>
      <h2 className="text-2xl mb-4">My Appointments</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Time</th>
                <th>payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, i) => ( 
                <tr key={i}>
                  <th>{i+1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointment}</td>
                  <td>{booking.slot}</td>
                  {
                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-success btn-sm">Pay</Link>
                  }
                  {
                    booking.price && booking.paid && <button className="text-success">Paid</button>
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
