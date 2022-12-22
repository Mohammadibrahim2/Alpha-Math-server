import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import register from "../../assets/Images/login-removebg-preview.png"

const Register = () => {
  const navigate = useNavigate()

  const GoogleProvider = new GoogleAuthProvider();
  const { createUser, Providerlogin, updateuserprofile } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.email.value)
    const form = event.target;
    const email = form.email.value;
    const password = form.Password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;


    createUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        navigate("/")
        handleProfileinfo(name, photoURL)

      })
      .catch((error) => {
        console.log(error)
      })

  };
  //update profile picture and name----

  const handleProfileinfo = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL

    }
    updateuserprofile(profile)
      .then(() => { })
  };

  //sign in with google----

  const handleGoogleLogin = () => {
    Providerlogin(GoogleProvider)
      .then(result => {
        const user = result.user
      })
  };


  return (

    <div className="flex lg:flex-row-reverse justify-around items-center lg:h[100vh] flex-col" >

      <div>
        <img className="lg:h-[380px] h-[300px]" src={register} />
      </div>

      <div>
        <Form className=" bg-white mx-auto mt-4" onSubmit={handleSubmit} style={{ padding: "20px" }}>
          <div className="text-blue-900 font-bold text-left">
            <h1 className="my-2">Register</h1>
          </div>
          <Form.Group className="my-2  " >
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="my-2 " >
            <Form.Label>PhotoURL</Form.Label>
            <Form.Control type="text" name="photoURL" placeholder="Enter PhotoURL" />
          </Form.Group>

          <Form.Group className="my-2 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="my-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="Password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group className="my-2 text-center">
            <button type="submit" className="w-full border rounded-md px-5 py-2 bg-teal-500 text-white">Register</button>
          </Form.Group> 
          <Form.Text className="text-light text-center">
            <h3 className="text-blue-900">Already have an account?</h3>
          </Form.Text>
          <Form.Group className="my-2 text-center">
            <Link to="/login">
              <button type="submit" className="w-full border rounded-md py-2 bg-teal-500 text-white px-5">Log in</button></Link>

          </Form.Group>

          <Form.Group className="d-flex justify-content-center  flex-column flex-lg-row " >
            <button onClick={handleGoogleLogin} className="border rounded-md px-5 py-2 bg-teal-500 text-white mb-2 mb-lg-0 me-lg-3">
              <FaGoogle className="me-2"></FaGoogle>Sign in with Google
            </button>
            <button className=" border rounded-md px-5 py-2 bg-teal-500 text-white" >
              <FaGithub className="me-2"></FaGithub> Sign in with github
            </button>
          </Form.Group>

        </Form>

      </div>
    </div>



  )
}
export default Register;