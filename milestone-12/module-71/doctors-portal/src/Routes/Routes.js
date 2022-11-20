import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/Appointment/Appointment";
import AllUsers from "../components/Dashboard/AllUsers";
import Dashboard from "../components/Dashboard/Dashboard";
import MyAppointment from "../components/Dashboard/MyAppointment";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
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
        path:'/dashboard',element:<PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allUsers',element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    },
])