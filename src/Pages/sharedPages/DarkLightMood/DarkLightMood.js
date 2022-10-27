import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { HiMoon,HiSun } from "react-icons/hi";

const DarkLigthMood=()=>{

const [toggle,setToggle]=useState(false)

   
return(
    <div>
        {
            toggle===true ?<><span>Dark Mood</span>
            <Button style={{backgroundColor:"#000",color:"#fff",marginLeft:"5px"}} onClick={()=>setToggle(!toggle)}><HiMoon style={{fontSize:"20px"}}></HiMoon></Button>
            </>
            :
            <><span >Light Mood</span>
             <Button style={{backgroundColor:"#fff",color:"#000",marginLeft:"5px"}} onClick={()=>setToggle(!toggle)}><HiSun style={{fontSize:"20px"}} ></HiSun></Button>
             </>
        }
   


    </div>
)

}
export default DarkLigthMood 