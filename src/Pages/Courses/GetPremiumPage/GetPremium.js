import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { DarkMood } from "../../Darkmood/DarkLightTemplete.js/Dark";



const GetPremium=()=>{

    const{dark}=useContext(DarkMood)
    const Topic=useLoaderData()

    console.log(Topic)

    const success=()=>{
        toast.success("Thank you! You can visit now ")
    }
   

    return(
        <div className="flex  justify-content-center text-center align-items-center my-4" >
   <div className={`${dark?"bg-slate-700":"bg-gray-300"} w-full lg:w-2/3 mx-auto px-4 bg-white`}>
      
      <div className="my-5">
       
        <div className="my-4">
            <h2 className="font-bold">Do you want to continue in<span className="text-teal-500"> {Topic.tittle}  ?</span></h2>
          
        </div>
        <div className="my-4">
       <Link to="/" ><button  className="text-xl border rounded-md px-4 py-2 bg-red-600 text-white" >Cancel</button></Link>
       <Link ><button onClick={success} className="text-xl border rounded-md px-4 py-2 bg-green-800 text-white" style={{backgroundColor:"#54B435",marginLeft:"10px"}}>Get in</button></Link>
       </div>
      </div>
    </div>
         
        </div>
    )

}
export default GetPremium