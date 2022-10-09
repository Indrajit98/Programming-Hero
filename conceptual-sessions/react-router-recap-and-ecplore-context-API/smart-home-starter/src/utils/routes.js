import Root from "../components/Root";
import {createBrowserRouter} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import ErrorPage from '../components/ErrorPage'
import { productsAndCartData } from "../loaders/getCartAndProductsData";


export const router = createBrowserRouter([
    {
      path: '/',element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      loader: productsAndCartData,
      children:[
        {
            path: '/',element: <Home></Home>,
           
        },
        {
            path: '/home',element: <Home></Home>
        },
        {
            path: '/shop',element: <Shop></Shop>
        },
        {
            path: '/cart',element: <Cart></Cart>
        },
        {
            path: '/about',element: <About></About>
        }

      ]
      
    }
  ])
  