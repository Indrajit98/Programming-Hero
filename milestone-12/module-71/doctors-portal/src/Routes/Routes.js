import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/Appointment/Appointment";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../Layout/Main";


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
                path:'/appointment',element:<Appointment></Appointment>
            },
        ]
    }
])