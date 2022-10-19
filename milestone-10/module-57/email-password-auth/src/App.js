
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import Login from './components/Login';
import RegisterReact from "./components/RegisterReact";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/', element: <RegisterReact></RegisterReact>
      },
      {
        path:'/register', element: <RegisterReact></RegisterReact>
      },
      {
        path:'/login', element: <Login></Login>
      },
    ]
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    
     
    </div>
  );
}

export default App;
