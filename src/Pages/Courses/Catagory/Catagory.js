import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link, Route } from "react-router-dom";


const Catagory = ({ course }) => {

  const { id, name, summary, img } = course

  return (
    <div>
      <div className="card bg-base-100 shadow-xl md:h-[350px]">
       <img  className="md:h-[180px]" src={img} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title text-blue-900 font-bold">{name}</h2>
          <p className=" text-left text-black">{summary}</p>
          <div className="card-actions justify-start">
            <Link className="text-decoration-none" to={`/course-details/${id}`}><Button style={{ backgroundColor: "teal" }}>More details</Button></Link>
          </div>
        </div>
      </div>





    </div>
  )


}
export default Catagory