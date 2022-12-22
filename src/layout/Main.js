import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";



import Footer from "../Pages/sharedPages/Footer/Footer";
import Header from "../Pages/sharedPages/Header/Header";



const Main=()=>{

return(

<div className="mx-auto">
<Header></Header>
    <Container className="mx-auto">
   
        <Row> 
            <Col lg="12">
            <Outlet></Outlet>
            </Col>
        </Row>
       
    </Container>
    <Footer></Footer>

</div>


)




}
export default Main;