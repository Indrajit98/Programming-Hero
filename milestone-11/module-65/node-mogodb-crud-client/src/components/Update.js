import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storeUser= useLoaderData();
    // console.log(user);
    const [user, setUser] = useState(storeUser)
    
    const handleAddUser = e => {
        e.preventDefault();
        // console.log(user);  
        fetch(`http://localhost:5000/users/${storeUser._id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount > 0)
            alert('user update successfully')
            console.log(data)
        })

    }
    const handleInputChange = e => {
        const value = e.target.value;
        const field = e.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser)
    }

    return (
        <div>
            <h3>Update: {storeUser.name}  </h3>
            <form onSubmit={handleAddUser}>
                <input onChange={handleInputChange} defaultValue={storeUser.name} type="text" name='name' placeholder='name' required /><br /><br />
                <input onChange={handleInputChange} defaultValue={storeUser.address} type="text" name='address' placeholder='address' required /><br /><br />
                <input onChange={handleInputChange} defaultValue={storeUser.email} type="email" name='email' placeholder='email' required /><br />
                <button type='submit'>Update user</button>
            </form>
        </div>
    );
};

export default Update;