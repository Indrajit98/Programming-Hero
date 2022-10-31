import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({ name: 'default', email: 'default@gmail.com' })

    const handleAddUser = e => {
        e.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
               alert('user added successfully') 
               e.target.reset();
            }   
        })
    }

    const handleInputBlur = e => {
        const value = e.target.value;
        const field = e.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser)
    }
    return (
        <div>
            <h3>Please add a new User</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required /><br /><br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='address' required /><br /><br />
                <input onBlur={handleInputBlur} type="email" name='email' placeholder='email' required /><br />
                <button type='submit'>Add user</button>
            </form>
        </div>
    );
};

export default AddUser;