import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './layout/Main'
import Order from './components/Orders/Order';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children:[
       {
        path: '/',element: <Shop></Shop>
       },
       {
        path: '/orders',
        loader:  () => {
          return fetch('products.json')

        },
        element:<Order></Order>,
       },
       {
        path: '/inventory',element:<Inventory></Inventory>
       },
       {
        path: '/about',element:<About></About>
       }

      ]
    },

    {
      path: 'order', element: <Order></Order>
    }



  ])

  return (
    <div>
       <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
