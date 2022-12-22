import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub ,FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import login from "../../assets/Images/login-removebg-preview.png"
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
    <div className="flex lg:flex-row flex-col justify-around items-center lg:h-[100vh]">
      <div className="">
        <img src={login} className="lg:w-[380px] w-[300px]"/>
      </div>
      <div>
      <Form  className="" onSubmit={handleSubmit}style={{backgroundColor:"white",padding:"20px"}}>
        <div className="text-blue-900 text-center my-3">
          <h1 className="text-left font-bold my-3">Log in</h1>
        </div>
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
      <button type="submit" className="px-5 py-2 bg-teal-500 w-full border rounded-md text-white" >Log in</button>
      </Form.Group>
      <Form.Text className=" text-center">
          <h3 className="text-blue-900 my-3">Create a new account ?</h3>
        </Form.Text>
      <Form.Group className="my-2 text-center w-full">
        <Link to="/register"> <button type="submit" className=" rounded-md w-full px-5 py-2 bg-teal-500 text-white">Register</button></Link>
     
      </Form.Group>

      <Form.Group className="d-flex justify-content-center  flex-column flex-lg-row " >
      <button onClick={handleGoogleLogin}  className=" rounded-md text-white px-4 py-2 bg-teal-500 mb-2 mb-lg-0 me-lg-3">
        <FaGoogle className="me-2"></FaGoogle>Sign in with Google
      </button>
      <button onClick={handleGithublogin} className=" rounded-md px-4 py-2 bg-teal-500 text-white">
        <FaGithub  className="me-2 px-5 py-2 bg-teal-500"></FaGithub> Sign in with github
      </button>
      </Form.Group>
    </Form>

      </div>
        
        
    </div>
)

}
export default Login