import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/Brand-Logo.png"

import { FaUser } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { AuthContext } from "../../../Context/AuthProvider";
import DarkMood from "../../Darkmood/DarkMood";




const Header=()=>{
  const {user,logOut}=useContext(AuthContext)

  const handlesignout=()=>{
    logOut()
    .then(()=>{})


  }
  console.log(user)

return(
    <div>


      <Navbar collapseOnSelect className="mb-4" expand="lg" bg="light" variant="light"sticky="top">
      <Container>
        <Navbar.Brand >
          <div>
            <Link className="text-decoration-none " to="/"><Image style={{height:"70px"}} className="me-2" roundedCircle src={Logo}></Image></Link>
            <Link className="text-decoration-none " style={{color:"#54B435"}} to="/">Online learning</Link></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className="text-decoration-none " to="/courses"style={{color:"#54B435"}}>Courses</Link></Nav.Link>
            <Nav.Link href="#pricing"style={{color:"#54B435"}}>FAQ</Nav.Link>
            <Nav.Link><Link className="text-decoration-none " to="/blog"style={{color:"#54B435"}}>Blog</Link></Nav.Link>
           
          </Nav>
          <Nav className="d-flex align-items-center">
            <DarkMood></DarkMood>
            <Nav.Link >
              
              {
              user?.uid?
              <>
              <Button onClick={handlesignout} style={{backgroundColor:"#54B435",color:"#fff"}}>Log out</Button>
              </>
              :
              <>
              <Button style={{backgroundColor:"transparent",border:"1px solid #54B435 "}} ><Link className="text-decoration-none " to="/login"style={{color:"#54B435"}}>Log in</Link></Button>
              </>    
              }
              
            </Nav.Link>
            <Nav.Link eventKey={2} style={{border:"1px solid #54B435",padding:"5px",borderRadius:"50%"}}>
              {
              user?.photoURL?
              <Image title={user?.displayName} roundedCircle style={{height:"50px" }} src={user.photoURL}/>
              :
              <FaUser></FaUser>
              
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