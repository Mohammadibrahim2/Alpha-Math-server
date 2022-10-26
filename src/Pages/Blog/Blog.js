import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog=()=>{


    return(
        <div>
     <Card>
      <Card.Header className="text-center" style={{backgroundColor:"#54B435",color:"#fff"}}><h2>Some Usefull Question for gain knowledge</h2></Card.Header>
      <Card.Body>
        <Card.Title >What is cors ?</Card.Title>
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
        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
      <hr></hr>
      <Card.Body>
        <Card.Title >Why are you useing firebase?What other options do you have to implement authentication?</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
      <hr></hr>
      <Card.Body>
        <Card.Title >How does the private route work ?</Card.Title>
        <Card.Text>
        <p>The react private route component renders a route component if the user is logged in and in an authorised role
             for the route, if the user isn’t logged in they’re redirected to the /login page, 
             if the user is logged in but aren’t in an authorised role they’re redirected to the home page.</p>
             </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <hr></hr>
      <Card.Body>
        <Card.Title>What is Node? How does Node work ?</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
    )



}
export default Blog;