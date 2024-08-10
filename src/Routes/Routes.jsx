import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
        {
          path:'checkout/:id',
          element:<PrivateRoutes><Checkout/></PrivateRoutes>,
          loader: ({params})=> fetch(`https://car-doctor-server-again.vercel.app/services/${params.id}`)
        },
        {
          path:'bookings',
          element: <PrivateRoutes><Bookings/></PrivateRoutes>
        }
      ]
    },
  ]);