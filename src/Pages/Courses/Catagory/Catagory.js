import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link, Route } from "react-router-dom";


 const Catagory=({course})=>{
 
    const {id,name,summary,img}=course

    return(
        <div>
         
    <Card className="my-3 my-lg-0" >
      <Row>
        <Col lg="6">
      <Image  className="w-lg-50  w-100 h-100 h-lg-100" variant="top" src={img} />
      
      </Col>
      <Col lg="6">
      <Card.Body>
        <Card.Title><h2>{name}</h2></Card.Title>
        <Card.Text>
          <p>{summary}</p>
        </Card.Text>
        <Link className="text-decoration-none" to={`/course-details/${id}`}><Button style={{backgroundColor:"#54B435"}}>More details</Button></Link>
      </Card.Body>
      </Col>
      </Row>
    </Card>
        </div>
    )


 }
 export default Catagory