import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           {/*  <nav>
                <Link to = '/login'>Login</Link>
                <Link to = '/register'>Register</Link>
            </nav> */}
            <h3 className='text-center'>My Email password Authentication</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;