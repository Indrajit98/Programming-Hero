import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {

    const  {signIn,signInWithGoogle} = useContext(AuthContext)


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(res => {
            const user = res.user;
            console.log(user)
            form.reset();

        })
        .catch(error => console.error(error))

    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle() 
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.error(error))

    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-success">Google SignIn</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;