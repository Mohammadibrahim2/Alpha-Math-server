import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CourseDetails=()=>{

    const courseDetails=useLoaderData()
    const{subtittle,img,details,tittle,subdetals,catagories}=courseDetails
    console.log(courseDetails)
return(
    <Container>
      
    <Card style={{ width: '70%',margin:"0 auto" }}>
      <Card.Img className="h-lg-50 h-100" src={img} />
      <Card.Header><h2>{tittle}</h2></Card.Header>
      <Card.Title><h5>{subtittle}</h5></Card.Title>
      <Card.Body>
      <Row>
        <Col lg="3">
          {
            catagories.map(catagory=><li>{catagory}</li>)
          }


        </Col>
        <Col lg="9">
        <Card.Text>
         <p>{details}</p>
         <p>{subdetals}</p>
        </Card.Text>
        </Col>
        </Row>
        <Button >Get premium access</Button>
      </Card.Body>
    </Card>

  
    </Container>
)



}
export default CourseDetails