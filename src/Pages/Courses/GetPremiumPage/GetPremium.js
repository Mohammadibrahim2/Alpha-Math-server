import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';



const GetPremium=()=>{
    const success=()=>{
        toast.success("Thank you! You can visit now ")
    }
   

    return(
        <div className="d-flex justify-content-center text-center align-items-center" >
   <Card className="w-75 w-lg-50 mx-auto ">
      
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className="my-4">
            <h2>Do you want to continue?</h2>
          
        </Card.Text>
        <div className="my-4">
       <Link to="/" ><Button  variant="danger px-3" >Cancel</Button></Link>
       <Link ><Button onClick={success}style={{backgroundColor:"#54B435",marginLeft:"10px"}}>Get in</Button></Link>
       </div>
      </Card.Body>
    </Card>
         
        </div>
    )

}
export default GetPremium