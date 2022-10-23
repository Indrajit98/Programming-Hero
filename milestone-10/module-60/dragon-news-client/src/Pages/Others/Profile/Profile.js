import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Profile = () => {


    const {user} = useContext(AuthContext)
    const [name,setName] = useState(user.displayName)

    const photoURLRef = useRef(user.photoURL);

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(photoURLRef.current.value);
        
    }
    const handleChange = e => {
        setName(e.target.value)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onChange={handleChange} defaultValue={name} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Profile;