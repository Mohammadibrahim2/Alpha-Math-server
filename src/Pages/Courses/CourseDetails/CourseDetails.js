import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails=()=>{

    const courseDetails=useLoaderData()
    const{subtittle,img,details,tittle}=courseDetails
    console.log(courseDetails)
return(
    <div>
    <Card style={{ width: '70%',margin:"0 auto" }}>
      <Card.Img className="h-lg-50 h-100" src={img} />
      <Card.Header><h2>{tittle}</h2></Card.Header>
      <Card.Body>
        <Card.Title><h4>{subtittle}</h4></Card.Title>
        <Card.Text>
         <p>{details}</p>
        </Card.Text>
        <Button >For more Details</Button>
      </Card.Body>
    </Card>


    </div>
)



}
export default CourseDetails