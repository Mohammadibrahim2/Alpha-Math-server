import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog=()=>{


    return(
        <div>
     <Card>
      <Card.Header className="text-center" style={{backgroundColor:"#54B435",color:"#fff"}}><h2>Some Usefull Question for gain knowledge</h2></Card.Header>
      <Card.Body>
        <Card.Title ><h2> What is cors ?</h2></Card.Title>
        <Card.Text>
        <p>Cross-origin resource sharing (CORS) is a browser mechanism that allows a web page to use assets and data from other pages or domains.
Most sites need to use resources and images to run their scripts. 
These embedded assets present a security risk as the assets could contain viruses or allow server access to a hacker.
Security policies mitigate the security risks of asset use. 
The policy rules what assets a requesting site can load based on origin or contents and regulates the amount of access given to the requesting 
site.
 Each policy must have enough restrictions to secure the web server but not enough to hurt functionality.
Same-origin is the most secure type of policy that prevents access to any outside server.
All assets for a site must come from the same origin.
 Most of the time, same-origin is a good choice as most scripts can function with only local resources. 
 However, sometimes we’ll want to allow access to outside assets such as videos, live-streams, or pictures.</p>
        </Card.Text>
        
      </Card.Body>
      <hr></hr>
      <Card.Body>
        <Card.Title><h2>Why are you useing firebase?What other options do you have to implement authentication?</h2></Card.Title>
        <Card.Text>
          <p>I use firebase because</p>
          <p>Firebase was originally developed to be a realtime database, and today that is still one of its key features. The Realtime Database is essentially a cloud-hosted NoSQL database that stores data as JSON (JavaScript Object Notation) in real time. One of the key advantages for Firebase’s Realtime Database is that it works offline by using local cache on the device to store any changes made.
           When app connectivity is resumed, the data is synced.</p>
          <p>Google Analytics for Firebase allows me to track my users’ journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices. According to Google, Firebase provides unlimited free reporting on up to 500 distinct events. </p>
           <p>Most apps have some form of authentication feature that is necessary to identify the user. 
            Thanks to Firebase’s easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up 
            the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number,
             email, Google, and Facebook accounts (more options can be found here). </p>
            <br></br>
            <h5>The other options to implement authentication is given bellow:</h5>
            <ul><li>Auth0,</li><li>MongoDB</li> <li>Passport</li><li>Okta</li> <li>Amazon cognito</li><li>JSON web token</li></ul>

        </Card.Text>   
      </Card.Body>
      <hr></hr>
      <Card.Body>
        <Card.Title><h2>What is Node? How does Node work ?</h2></Card.Title>
        <Card.Text>
          <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.
             Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

          <p>Node.js can generate dynamic page content.It can create, open, read, write, delete, and close files on the server.
           It can collect form data.and it also can add, delete, modify data in your database</p>
           <h6>Working of Node.js:</h6>
           <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language.
             It can handle concurrent requests with a single thread without blocking it for one request.</p>
             <p>Node.js basically works on two concept</p>

              <li>Asynchronous</li>
              <li>Non-blocking I/O</li>
        </Card.Text>

      </Card.Body>
      <hr></hr>
      <Card.Body>
        <Card.Title ><h2>How does the private route work ?</h2></Card.Title>
        <Card.Text>
          <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc.
             In simple words, These routes can be accessed only after login.</p>
             <p>The constraints for Public and Private routes are that Public routes should not be accessed after login and 
              Private routes should not be accessible before login.</p>
              <h6>Private route work like</h6>
              <p>First  we need to create protected route.The protected Route component is used to map all the authenticated routes </p>
              <p>Then,Authenticated routes are defined in routes.js</p>
              <p>then  wrapped non authenticated routes with PublicRoute  component and authenticated routes with PrivateRoute  component.</p>
              
             <p>The react private route component renders a route component if the user is logged in and in an authorised role
             for the route, if the user isn’t logged in they’re redirected to the /login page, 
             if the user is logged in but aren’t in an authorised role they’re redirected to the home page.</p>
            
             </Card.Text>
      </Card.Body>
      
   
    </Card>

    </div>
    )



}
export default Blog;