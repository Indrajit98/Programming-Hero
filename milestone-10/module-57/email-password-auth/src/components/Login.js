import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app)

const Login = () => {
    const [ success ,setSuccess ] = useState(false)
    const [ email,setUserEmail] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault();
        setSuccess(false)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setSuccess(true)
            form.reset();
        })
        .catch(error => {
            console.error('error', error);
        })
    }


    const handleEmailBlur = e => {
        const email = e.target.value;
        setUserEmail (email)
        console.log(email)

    }

    const handleResetPassword = () => {

        if(!email){
            alert( 'Please enter your email address')
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then ( () => {
            alert('Password reset email sent Please check your email')

        })
        .catch(error => {
            console.error (error)
        })

    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-success text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email"required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {
                success && <p className='text-success'>Successfully to the account</p>
            }
            <p>New to this website? Please <Link to ='/register'>Register</Link></p>
            <small>Forget Password? <Button onClick={handleResetPassword} variant="link">Reset password</Button></small>
        </div>
    );
};

export default Login;