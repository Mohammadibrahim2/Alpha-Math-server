import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const PrivateRoute=({children})=>{
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();
    

    if(loading){
        return  <div className="text-center">
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="success" /></div> 
    }

    if(user){

        return children
    }
    else{
        return <Navigate to="/login" state={{from:location}}replace></Navigate>
    }
    

  


}
export default PrivateRoute