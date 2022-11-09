import React from 'react';
import { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            const user = res.user
            console.log(user);

           setAuthToken(user)

        })
        .catch(err => console.error(err))
    }

    
    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;