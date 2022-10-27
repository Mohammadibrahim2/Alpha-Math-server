import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link, useLoaderData } from "react-router-dom";
import Catagory from "./Catagory/Catagory";
 const Courses=()=>{
  const courses=useLoaderData()
  console.log(courses)
    return(
       
         
         <Container>
      <Row>

    <Col lg="9">

    <div className="container text-center">
  <div className="row row-cols-lg-2 row-cols-1">
     {
    courses.map(course=><Catagory
    key={course.id}
    course={course}
    ></Catagory>)
     }
    
  </div>
</div>


     
     </Col>
        <Col lg="3" className="text-center">
        
         {
           courses.map(course=>
       <ListGroup>
      <ListGroup.Item className="mb-2 "style={{backgroundColor:"#54B435"}}>
           <Link className="text-white text-decoration-none " to={`/course-details/${course.id}`}>{course.name}</Link>
           </ListGroup.Item>
    </ListGroup>)
          }
      
         
        </Col>
       
      </Row>
      </Container>
         
   
  
        
    )


 }
 export default Courses