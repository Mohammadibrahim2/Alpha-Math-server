import React from "react";
import Image from 'react-bootstrap/Image'
import Banar from "../assets/Images/Header-banar.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css"

const Home=()=>{

return(


    <div>

     <Container>
      <Row className="d-flex align-items-center">
        <Col lg="6"><Image style={{height:"500px"}} src={Banar}></Image></Col>
        <Col lg="6"> 
        <div className="h-100">
        <h1> This amazing online platform simply lets the students to experience the subject with unlimited questions,
         real-world scenarios and engaging item types.</h1>
        </div>
        </Col>
      </Row>
      </Container>
    

        
        
    </div>
)


}
 export default Home;