import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AddCoffee from './components/AddItems/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/addcoffee",
    element: <AddCoffee/> , 
  },
  {
    path: "/updatecoffee",
    element: <UpdateCoffee/> , 
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
