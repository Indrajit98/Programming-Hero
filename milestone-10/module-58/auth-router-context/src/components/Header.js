// import React, { useContext } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
// import { AuthContext } from '../contexts/UserContext';

const Header = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch( error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to ='/' className="btn btn-ghost normal-case text-xl">Indrajit</Link>

                <Link className="btn btn-ghost normal-case text-xl" to = '/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to = '/order'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to = '/register'>Register</Link>
                {user?.email &&  <span>Welcome , {user.email}</span>}
                {
                    user?.email ? <button onClick={handleLogOut} className="btn btn-sm ml-3">Sign Out</button>:
                    <Link to = '/login'><button className="btn btn-sm">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;