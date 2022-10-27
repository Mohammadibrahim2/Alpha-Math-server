import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";



const CourseDetails=()=>{

    const courseDetails=useLoaderData()
    const{subtittle,img,details,tittle,subdetals,catagories,id,concepts}=courseDetails

    const generateDownload=()=>{
      let doc=new jsPDF("p","pt","a4")
      doc.html(document.querySelector(".content"),{
        callback:function(pdf){
          pdf.save("Alphpdf.pdf")
        }
      })

    }
   
return(
    
      
    <Card  calssName="p-4 m-50 mx-auto"style={{padding :"50px 0" }}>
    
     <h2>{tittle}</h2>
      <Card.Body  className="content px-4">
      <Card.Img style={{height:"300px"}} src={img} />
      <Card.Title ><h5 calssName="px-3">{subtittle}</h5></Card.Title>
      <Row>
        <Col lg="4">
          <h4>{concepts}</h4>
          {
            catagories.map(catagory=><li>{catagory}</li>)
          }


        </Col>
        <Col lg="8">
        <Card.Text>
         <p>{details}</p>
         <p>{subdetals}</p>
        </Card.Text>
        </Col>
      </Row>
        
      </Card.Body>
      <diV className="d-flex jusstify-content-lg-between flex-lg-row flex-column">
      <Link to={`/getPremium/${id}`}><Button style={{backgroundColor:"#54B435",width:"100%"}} >Get premium access</Button></Link>
        <Button onClick={generateDownload} style={{backgroundColor:"#fff",border:"1px solid #54B435"}}>
        <FaDownload style={{color:"#54B435",outline:"none"}}></FaDownload><span style={{color:"#54B435"}}>Download</span> </Button>
      
      </diV>
    
    </Card>
   

  
    
)



}
export default CourseDetails