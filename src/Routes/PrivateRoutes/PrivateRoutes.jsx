import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvides";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;