import React from "react";
import Image from 'react-bootstrap/Image'

import student3 from "../assets/Images/student3.webp";

import "./Home.css"
import SubHeader from "./Subheader/Subheader";
import { useContext } from "react";
import { DarkMood } from "../Pages/Darkmood/DarkLightTemplete.js/Dark";

const Home = () => {
const{dark}=useContext(DarkMood)
  return (


    <div className={`${dark?"bg-transparent":"bg-slate-200 "}`}>

<div className="flex lg:flex-row flex-col lg:h-[90vh] w-[100%] lg:justify-around items-center">

<div className="lg:w-1/2 w-full px-3 py-4 ">
            <p className="text-teal-500 font-bold text-2xl">
              DEVELOPE SKILL ON MATHEMATICS</p>
            <h1 className={`text-5xl font-bold my-5 ${dark?"text-gray-200":"text-blue-900"} `}>
            A learning platform that helps you to learning Mathematics faster

            </h1>
            <p className={`${dark?"text-white":"text-black"} font-semibold y-3`}>Make mathematics easy with the help of our  top level teachers</p>
            <button className="px-4 py-2 bg-teal-500 text-white border rounded  text-semibold hover:bg-blue-900 ">Explore All course</button>
          </div>
          <div className="lg:w-1/2 w-full my-3">
            <Image className="w-full " src={student3}></Image>
            
          </div>

</div>
<SubHeader></SubHeader>
     
       
     



  





    </div>
  )


}
export default Home;