import React, { useContext,useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import {FiSun } from "react-icons/fi";

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { AuthContext } from "../../../Context/AuthProvider";
import DarkLightMood from "../DarkLightMood/DarkLightMood";
import { DarkMood } from "../../Darkmood/DarkLightTemplete.js/Dark";
import imagee from "../../../assets/Images/logo2-removebg-preview.png"




const Header=()=>{
  const {user,logOut}=useContext(AuthContext)

  const handlesignout=()=>{
    logOut()
    .then(()=>{})
  }
  
  const {dark,setDark}=useContext(DarkMood)


return(



    <div className={`${dark?"bg-gray-900":"bg-white"} py-2`}>


      <Navbar collapseOnSelect className="mb-2" expand="lg"  sticky="top">
      <Container>
        <Navbar.Brand >
          <div className="flex flex-row justify-center items-center">
            <Link className="text-decoration-none " to="/">
             <img className="h-[70px] w-[70px]" src={imagee}/>
            </Link>
            <Link className={`text-decoration-none text-2xl ${dark?"text-white":"text-teal-500"}  `} to="/">Alpha Math</Link></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ">
            <Nav.Link><Link className={`text-decoration-none text-xl ${dark?"text-white":"text-teal-500"}  `} to="/courses">Courses</Link></Nav.Link>
            <Nav.Link> <Link className={`text-decoration-none text-xl ${dark?"text-white":"text-teal-500"}  `} to="/faq" >FAQ</Link></Nav.Link>
            <Nav.Link><Link className={`text-decoration-none text-xl ${dark?"text-white":"text-teal-500"}  `} to="/blog">Blog</Link></Nav.Link>
           
          </Nav>
          <Nav className="d-flex align-items-center">
             <div className={`${dark?"bg-slate-100":"bg-gray-500"} text-2xl  border-2 border-blue-900 px-3 py`}>
               {dark? <button onClick={()=>setDark(!dark)}><FiSun></FiSun></button>: <button  onClick={()=>setDark(!dark)}><FiMoon></FiMoon> </button>}
               </div>
            <Nav.Link >
              
              {
              user?.uid ||user?.photoURL?
              <>
              <div className="flex flex-row justify-around items-center">

              
              <button onClick={handlesignout} className={`px-3 py-2 font-semibold ${dark?"bg-slate-100 text-black":"bg-blue-900"}`} style={{backgroundColor:"",color:"#fff"}}>Log out</button>
              <Image title={user?.displayName} roundedCircle style={{height:"45px",width:"45px",marginLeft:"2px" }} src={user.photoURL}/>
              </div>
              </>
              :
              <>
              <button  className={`px-3 py-2  ${dark?"bg-white ":"bg-gray-700 "}`}>
                <Link className={`text-decoration-none font-semibold ${dark?"text-black":"text-white"}  `} to="/login">Log in</Link></button>
              </>    
              }
              
            </Nav.Link>
          
          </Nav>
         
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
    
)


}
export default Header;