import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import logInImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(res => {
            const user = res.user;
            console.log(user)
            setAuthToken(user)
        })
        .catch(err => console.error(err))

    }

    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid md:grid-cols-2 gap-20 lg:flex-row flex-col">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={logInImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20 ">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Sign UP</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Sign Up' />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account?<Link className='text-orange-600 font-bold' to='/login'> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;