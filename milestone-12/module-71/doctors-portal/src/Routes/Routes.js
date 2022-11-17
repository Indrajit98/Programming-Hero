import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/Appointment/Appointment";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path:'/login',element:<Login></Login>
            },
            {
                path:'/signUp',element:<SignUp></SignUp>
            },
            {
                path:'/appointment',element:<Appointment></Appointment>
            },
            
        ]
    },
    {
        path:'/dashboard',element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
])