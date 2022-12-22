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
    
      
    <div className="lg:w-[600px] w-full mx-auto my-3 "style={{backgroundColor:"#fff",padding:"20px"}}>
    
    
      <div  className="content px-4  ">
      <h2 className="px-4 text-blue-900">{tittle}</h2>
      <img className="w-full "  style={{height:"300px"}} src={img} />
      <Card.Title ><h5 calssName="px-3">{subtittle}</h5></Card.Title>
      <div className="w-full flex flex-row">
        <div className="w-1/3">
        <h4>{concepts}</h4>
          {
            catagories.map(catagory=><li>{catagory}</li>)
          }



        </div>
        
         
        
      
        <div className="w-1/2">
         <p>{details}</p>
         <p>{subdetals}</p>
        </div>

        
       
     
      </div>
        
      </div>
      <div className="d-flex jusstify-content-lg-between flex-lg-row flex-column">
      <Link to={`/getPremium/${id}`}><button className="lg:ml-2 bg-blue-900 text-white px-4 py-2 bodred rounded-md" style={{backgroundColor:"",width:"100%"}} >Get premium access</button></Link>
        <button onClick={generateDownload} className="lg:mx-4   flex flex-row  justify-center border-2 rounded-md border-blue-900 px-4 py-2" style={{backgroundColor:"#fff",border:""}}>
        <FaDownload className="text-blue-900" ></FaDownload><span className=" font-bold text-blue-900">Download</span> </button>
      
      </div>
    
    </div>
   

  
    
)



}
export default CourseDetails