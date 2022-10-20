
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoutes from './routes/PrivateRoutes';
import Order from './components/Order';

function App() {

  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main>,
      children:[
        {
          path: '/', element:<Home></Home>
        },
        {
          path: '/login', element:<Login></Login>
        },
        {
          path: '/register', element:<Register></Register>
        },
        {
          path: '/order', element:<PrivateRoutes><Order></Order></PrivateRoutes>
        },
        
      ]
    }
  ])



  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
      
    </div>
  );
}

export default App;
