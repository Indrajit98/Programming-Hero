import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logInImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        logIn(email, password)
            .then(res => {
                const user = res.user;
                const currentUser = {
                    email: user.email
                }

                // get jwt token 
                fetch(`https://genius-car-server-sand-pi.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        // local Storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token)
                        navigate(from, { replace: true })

                    })

                // console.log(currentUser);

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
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Login' />
                            </div>
                        </form>
                        <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to='/signup'>Sign UP</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;