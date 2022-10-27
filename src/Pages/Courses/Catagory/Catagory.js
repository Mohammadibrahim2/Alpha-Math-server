import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";


 const Catagory=({course})=>{
 
    const {id,name,summary,img}=course

    return(
        <div>
    <Card  className=" d-flex flex-lg-row flex-column justify-content-between">
      <Image className="w-50 w-lg-100" variant="top" src={img} />
      
      <Card.Body>
        <Card.Title><h2>{name}</h2></Card.Title>
        <Card.Text>
          <p>{summary}</p>
        </Card.Text>
        <Link className="text-decoration-none" to={`/course-details/${id}`}><Button style={{backgroundColor:"#54B435"}}>More details</Button></Link>
      </Card.Body>
    </Card>
        </div>
    )


 }
 export default Catagory