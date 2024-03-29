import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error,setError] = useState(null)
    const {createUser} = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        // console.log(email,password,confirm)
        if(password.length <6 ){
            setError('password should be 6 characters or more')
        }
        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        createUser(email,password)
        .then(res => {
            const user = res.user;
            form.reset();
            console.log(user)
        })
        .catch(err=> console.error(err))




    }





    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSubmit} >
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" required />
            </div>
            <input className='btn-submit' type="submit" value="Signup" />
        </form>
        <p>{error}</p>
        <p>Already have an Account <Link to='/login'>Login</Link></p>
    </div>
    );
};

export default SignUp;