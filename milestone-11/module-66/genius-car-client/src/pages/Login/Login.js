import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logInImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {login}= useContext(AuthContext);
    const handleLogin =(e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        login(email,password)
        .then(res => {
            const user = res.user;
            console.log(user);

        })
        .then(err=> console.error(err))

    }

    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid md:grid-cols-2 gap-20 lg:flex-row flex-col">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={logInImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20 ">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>

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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Login' />   
                            </div>
                        </form>
                        <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to='/signup'>Sign UP</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;