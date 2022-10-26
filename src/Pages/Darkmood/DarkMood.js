import "./DarkMood.css"
import React from "react";
import { FaRegMoon } from "react-icons/fa";
import moon  from "../../assets/Images/Moon.png"
import Image from 'react-bootstrap/Image'



const DarkMood=()=>{
let clickedClass="clicked";
const body=document.body;
const lightTheme="light"
const darkTheme="dark"
let theme;


if(localStorage){
    theme=localStorage.getItem("theme")

}
if(theme===lightTheme || theme===darkTheme)
{
    body.classList.add(theme)

}
else{
    body.classList.add(lightTheme)
}
 const switchTheme=(e)=>{
    if(theme===darkTheme){
        body.classList.replace(darkTheme,lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme","light")
        theme=lightTheme;
    }
    else{
        body.classList.replace(darkTheme,lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme","light")
        theme=darkTheme;
    }
 }
return(
    <button
        className={theme==="dark"? clickedClass :""}
        id="darkMode"
        onClick={(e)=>switchTheme(e)}>
            
            {/* <FaRegMoon></FaRegMoon> */}
    </button>
)



}
export default DarkMood