import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub ,FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register=()=>{
  
  const GoogleProvider = new GoogleAuthProvider();
  const {createUser,Providerlogin,updateuserprofile}=useContext(AuthContext)

    const handleSubmit= (event)=>{
      event.preventDefault()
      console.log(event.target.email.value)
        const form=event.target;
        const email=form.email.value;
        const password=form.Password.value;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        
    
        createUser(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            handleProfileinfo(name,photoURL)

        })
        .catch((error)=>{
         console.log(error)
        })

    };
    //update profile picture and name----

    const handleProfileinfo=(name,photoURL)=>{
      const profile={
        displayName:name,
        photoURL:photoURL

      }
      updateuserprofile(profile)
      .then(()=>{})
    };

    //sign in with google----

    const handleGoogleLogin=()=>{
      Providerlogin(GoogleProvider)
      .then(result=>{
       const user=result.user
      })
    };


    return(

        
        <Form onSubmit={handleSubmit} style={{backgroundColor:"#54B435",padding:"20px"}}>
        <Form.Text className="text-light text-center">
          <h1>Register</h1>
        </Form.Text>
      <Form.Group className="my-3 " >
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name"placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="my-3 " >
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Enter PhotoURL" />
      </Form.Group>

      <Form.Group className="my-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"name="email" placeholder="Enter email"required />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="Password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="my-4 text-center">
      <Button variant="light"type="submit" className="px-5">Register</Button>
      </Form.Group>
      <Form.Text className="text-light text-center">
          <h3>Already have an account?</h3>
        </Form.Text>
      <Form.Group className="my-4 text-center">
        <Link to="/login"><Button variant="outline-light"type="submit" className="px-5">Log in</Button></Link>
      
      </Form.Group>

      <Form.Group className="d-flex justify-content-center  flex-column flex-lg-row " >
      <Button onClick={handleGoogleLogin} variant="outline-light" className="mb-2 mb-lg-0 me-lg-3">
        <FaGoogle className="me-2"></FaGoogle>Sign in with Google
      </Button>
      <Button  variant="outline-light" >
        <FaGithub  className="me-2"></FaGithub> Sign in with github
      </Button>
      </Form.Group>
     
    </Form>

        
    )
}
export default Register;