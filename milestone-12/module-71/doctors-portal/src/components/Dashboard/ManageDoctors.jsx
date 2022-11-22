import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal';

const ManageDoctors = () => {
    const [ deletingDoctor,setDeletingDoctor]=useState(null)

    const closeModal = () => {
        setDeletingDoctor(null)
    }
   
    const { data: doctor ,refetch } = useQuery({
        queryKey: 'doctor',
        queryFn: () => fetch(`http://localhost:5000/doctors`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())

    })

    // console.log(doctor)

    const handleDeleteDoctor = doctor =>{
        // console.log(doctor)
        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Doctor ${doctor.name} deleted Successfully`)
            }
          
           
        })
    }



    return (
        <div>
            <h2 className='text-2xl '>Manage Doctors : {doctor?.length}</h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctor?.map((doctor, i) => <tr key={doctor._id}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={doctor?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error">
                                           X
                                        </label>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deletingDoctor && <ConfirmationModal 
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}.It is cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    modalData = {deletingDoctor}
                    closeModal = {closeModal}
                    ></ConfirmationModal>
                }

            </div>

        </div>
    );
};

export default ManageDoctors;