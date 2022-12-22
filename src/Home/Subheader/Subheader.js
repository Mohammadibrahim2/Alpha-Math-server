import React from "react";
import "./SubHeader.css"
import { FaBook } from "react-icons/fa";
import { FiSlack } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
const SubHeader = () => {
    const section = [
        {
            icon: <FaBook></FaBook>,
            title: "600+ video ",
            details: "Video courses on All courses"
        },
        {
            icon: <FiSlack></FiSlack>,
            title: "Choose from ",
            details: "Most senior instructors"
        },
        {
            icon: <FiLink></FiLink>,
            title: "Lifetime access ",
            details: "On mobile and desktops"
        },

    ]
    return (
        <div className="container lg:bg-blue-900 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
           {
            section.map(comp=><div className= "bg-blue-900 flex flex-row justify-around items-center py-3 px-2">
                <div className="text-5xl text-white icon">{comp.icon}</div>
                <div className="text-white">
                    <h2 className="text-3xl">{comp.title}</h2>
                    <h3 className="text-2xl">{comp.details}</h3>
                </div>
                </div>)
           }
        </div>
    )
}
export default SubHeader