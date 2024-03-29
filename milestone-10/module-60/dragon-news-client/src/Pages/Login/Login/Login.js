
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const Login = () => {
    const [error, SetError] = useState()
    const { signIn,setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    useTitle('login')

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                SetError('');
               if(user.emailVerified){
                navigate(from, {replace: true});
               }
               else{
                toast.error('your email is not verify.please verify')
               }
            })
            .catch(err => {
                console.error(err);
                SetError(err.message);
            })
            .finally(()=>{
                setLoading(false)
            })

    }


    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Login;