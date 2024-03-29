import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';



const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    let location = useLocation();

    if(loading){
       return <Spinner animation="border" variant="primary" />
    }


    if(!user){
        return <Navigate to ='/login' state= {{from: location}} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;