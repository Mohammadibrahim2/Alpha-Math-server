import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link, useLoaderData } from "react-router-dom";
import Catagory from "./Catagory/Catagory";
import CourseHeader from "./CourseHeader/CourseHeader";
 const Courses=()=>{
  const courses=useLoaderData()
 
    return(
       <>
    <CourseHeader props={"Our Courses"}name={"Courses"}></CourseHeader>
         
      <Container className="top-0 ">
      <Row>

    <Col lg="9">
   

    <div className=" text-center">
  <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1  ">
    
     {
    courses.map(course=><Catagory
    key={course.id}
    course={course}
    ></Catagory>)
     }
    
  </div>
</div>


     
     </Col>
        <Col lg="2" className="text-center">
       <ListGroup.Item className="my-4 "style={{backgroundColor:"transparent",color:"teal",border:"2px solid teal" }}><h2>Category</h2> </ListGroup.Item>

        
         {
           courses.map(course=>
       <ListGroup>
      <ListGroup.Item className="mb-2  "style={{backgroundColor:"teal"}}>
        <Link className="text-white text-decoration-none " to={`/course-details/${course.id}`}>{course.name}</Link>
      </ListGroup.Item>
    </ListGroup>)
          }
      
         
        </Col>
       
      </Row>
      </Container>
         
   
      </>
        
    )


 }
 export default Courses