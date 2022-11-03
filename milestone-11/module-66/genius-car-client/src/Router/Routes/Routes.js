import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import CheckOut from '../../pages/Checkout/CheckOut';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Orders from '../../pages/Orders/Orders';
import SignUp from '../../pages/SignUp/SignUp';


export const routes = createBrowserRouter([
    {
      path:'/',element:<Main></Main>,
      children:[
        {
            path:'/',element:<Home></Home>

        },
        {
            path:'/login',element:<Login></Login>

        },
        {
            path:'/signup',element:<SignUp></SignUp>

        },
        {
            path:'/checkout/:id',element:<CheckOut></CheckOut>,
            loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
            path:'/orders',element:<Orders></Orders>
           

        },
      ]
    }
  ])
