import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvides from './providers/AuthProvides.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
  <AuthProvides>
   <RouterProvider router={router} />
  </AuthProvides>
</div>
)
