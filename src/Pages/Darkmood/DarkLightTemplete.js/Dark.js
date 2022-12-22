import { createContext, useState } from "react";

export const DarkMood=createContext()

const LightDark=({children})=>{

    const [dark,setDark]=useState(false)

    const darkinfo={dark,setDark}
    return(
        <div>
<DarkMood.Provider value={darkinfo}>
    {children}
</DarkMood.Provider>
        </div>
    )

}
export default LightDark