import React from "react";
import Image from 'react-bootstrap/Image'
import Banar from "../assets/Images/Home-bannar-pic.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css"

const Home=()=>{

return(


    <div>

    
      <Row>
        <Col lg="">
          <div><Image  className="w-100 "src={Banar}></Image>
          </div>
         </Col>
       
        
        
        
      </Row>
     
    

        
        
    </div>
)


}
 export default Home;