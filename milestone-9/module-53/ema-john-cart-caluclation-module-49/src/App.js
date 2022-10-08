import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productsAndCartLoader } from './loaders/productsAndCartLoaders';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: '/inventory', element: <Inventory></Inventory>
        },
        {
          path: '/about', element: <About></About>
        }

      ]
    },

    {
      path: 'order', element: <Orders></Orders>
    }



  ])

  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
