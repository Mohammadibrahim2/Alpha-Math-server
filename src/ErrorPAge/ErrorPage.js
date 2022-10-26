import React from "react";
import ErrorPic from "../assets/Images/Error1-404.jpg";
import Image from 'react-bootstrap/Image';
 const ErrorPage=()=>{


return(

    <div>
        <Image  className="w-100 h-100"src={ErrorPic}></Image>


    </div>
)



 }
 export default ErrorPage;