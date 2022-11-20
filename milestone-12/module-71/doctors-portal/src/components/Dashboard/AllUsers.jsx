import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const AllUsers = () => {
    const {data: users =[],refetch} = useQuery({
        queryKey: [ 'users'],
        queryFn : () => fetch(`http://localhost:5000/users`)
        .then(res => res.json()) 

    });

    const handleMakeAdmin =id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Make admin successful')
                refetch();

            }
        })

    }



    return (
        <div>
            <h2 className='tex-3xl text-center'>All Users</h2>
            <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => ( 
                <tr key={i}>
                  <th>{i+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role !== 'admin' && <button onClick={ () => handleMakeAdmin (user._id)} className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white'>Make Admin</button> } </td>
                  <td><PrimaryButton>X</PrimaryButton></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default AllUsers;