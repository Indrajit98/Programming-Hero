import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const [error, SetError] = useState()
    const [accepted, setAccepted] = useState(false)
    const { createUser,updateUserProfile,verifyEmail } = useContext(AuthContext)
    const navigate = useNavigate();
    useTitle('register')

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                SetError(' ')
                navigate('/')
                handleUpdateUserProfile(name,photoURL)
                handleEmailVerification()
                toast.success('Please verify your email address before login');
            })
            .catch(err => {
                console.error(err)
                SetError(err.message)
            })

    }
    const handleUpdateUserProfile = (name,photoURL) =>{
        const profile = {
            displayName:name,
            photoURL:photoURL,
        }
        updateUserProfile(profile)
        .then (() =>{})
        .catch(err => console.error(err))
    }
    const handleEmailVerification = () =>{
        verifyEmail()
        .then(()=>{})
        .catch(err=>console.error(err))
    }


    const handleAccepted=(e)=>{
        setAccepted(e.target.checked);

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                     type="checkbox"
                     onClick={handleAccepted}
                     label={<>Accept <Link to='/terms'>terms and condition</Link> </>} />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text> <br></br>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>

            </Form>
        </div>
    );
};

export default Register;