import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext=createContext()



const auth = getAuth(app);

const AuthProvider=({children})=>{
    

    const[user,setuser]=useState(null)
    const [accpeted,setAccepted]=useState()
    

const Providerlogin=(provider)=>{
    return signInWithPopup(auth,provider)

};
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
};
const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
};
const updateuserprofile=(profile)=>{
    updateProfile(auth.currentUser,profile)
}

const logOut=()=>{
    return signOut(auth)
};

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
})
return()=>{
    unsubscribe()
}
},[]);



const authInfo={user,Providerlogin,logOut,createUser,signIn, updateuserprofile}


return(

    <AuthContext.Provider value={authInfo}>

        {children}


    </AuthContext.Provider>
)



}
export default AuthProvider;