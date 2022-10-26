import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const PrivateRoute=({children})=>{
    const {user}=useContext(AuthContext)

if(user.uid){
    return children
}
else{
    return <Navigate to="/login"></Navigate>
}

}
export default PrivateRoute