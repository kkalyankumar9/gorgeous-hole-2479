import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/Appcontext";

function PrivateRoute({children}) {
 const {isAuth}=useContext(AppContext)
if(!isAuth){
    return <Navigate to="/login"/>
 }
return children
}

export default PrivateRoute;
