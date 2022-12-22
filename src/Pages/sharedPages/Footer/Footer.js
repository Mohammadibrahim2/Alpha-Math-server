
import React from "react";
import imge from"../../../assets/Images/logo2-removebg-preview.png"
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { DarkMood } from "../../Darkmood/DarkLightTemplete.js/Dark";


const Footer=()=>{
const {dark}=useContext(DarkMood)
return(
    <div className="mt-5 Text-center w-100" >
      <footer className={`footer p-10  text-base-content ${dark?"bg-gray-900":"bg-white"}`}>
  <div>
   <img className="w-[80px] h-[80px]" src={imge}></img>
    <p className={`${dark?"text-white":"text-blue-900"} text-md font-semibold`}>Alpha Math<br/>Alpha-Math Made by Mohammad Ibrahim,December 20,2022</p>
  </div> 
  <div className="text-xl">
    <span className={`${dark?"text-white":"text-blue-900"}  font-medium `}>Services</span> 
    <a className="  link link-hover">Online Class</a> 
    <a className=" link link-hover">Weekly test</a> 
    
  </div> 
  <div className="text-xl">
    <span  className= {`${dark?"text-white":"text-blue-900"}  font-medium `}>Connect Us</span> 
    <a className="  link link-hover">01632846454</a> 
    <a className=" link link-hover">AlphaMath6454@gmail.com</a> 
  
  </div> 


</footer>
        
    </div>
)


}
export default Footer;