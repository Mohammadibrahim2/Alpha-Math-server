import React from "react";
import "./CourseHeader.css"

const CourseHeader = ({props,name}) => {
    return (
        <div className="w-100% h-[55vh] header">
            <div className="h-full w-full text-black flex justify-center items-center flex-col">
                <p className="lg:text-6xl font-bold">{props}</p>
               
                    <div className="text-xl ">
                        <ul className="flex flex-row">
                            <li className="text-black"><a>Home</a></li> 
                            <span className="px-3">/</span>
                            <li className="text-teal-500"><a>{name}</a></li>
                           
                        </ul>
                
                </div>

            </div>
        </div>
    )

}
export default CourseHeader