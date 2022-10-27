import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub ,FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';


const Login=()=>{
  
  const [Error,setError]=useState('')

  const location=useLocation();
  const from=location.state?.from?.pathname || "/"
   
const GoogleProvider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const{signIn,Providerlogin,GithubProvider}=useContext(AuthContext)
const navigate=useNavigate()

  const  handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
  
        signIn(email,password)
        .then((result)=>{
            const user=result.user
            console.log(user)
            form.reset()
            setError('')
            navigate(from,{replace:true})
           

        })

        .catch((error)=>{
            console.error(error)
            setError(error.message)
            toast.error(Error)
        
        })

    };

    const handleGoogleLogin=()=>{

      Providerlogin(GoogleProvider)
      .then(result=>{
        const user=result.user
      })

    };

    const handleGithublogin=()=>{

      GithubProvider(githubProvider)
      .then((result)=>{
        const user=result.user
      })


    };

return(
    <div>
        
        <Form  className="w-50 mx-auto" onSubmit={handleSubmit}style={{backgroundColor:"#54B435",padding:"20px"}}>
        <Form.Text className="text-light text-center">
          <h1>Log in</h1>
        </Form.Text>
      <Form.Group className="my-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="Email" name="email" placeholder="Enter email"required />
      
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="Password" name ="password" placeholder="Password"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="my-2 text-center">
      <Button variant="light"type="submit" className="px-5" >Log in</Button>
      </Form.Group>
      <Form.Text className="text-light text-center">
          <h3>Create a new account ?</h3>
        </Form.Text>
      <Form.Group className="my-2 text-center">
        <Link to="/register"> <Button variant="outline-light"type="submit" className="px-5">Register</Button></Link>
     
      </Form.Group>

      <Form.Group className="d-flex justify-content-center  flex-column flex-lg-row " >
      <Button onClick={handleGoogleLogin}  variant="outline-light"className="mb-2 mb-lg-0 me-lg-3">
        <FaGoogle className="me-2"></FaGoogle>Sign in with Google
      </Button>
      <Button onClick={handleGithublogin} variant="outline-light" >
        <FaGithub  className="me-2"></FaGithub> Sign in with github
      </Button>
      </Form.Group>
    </Form>
    </div>
)

}
export default Login