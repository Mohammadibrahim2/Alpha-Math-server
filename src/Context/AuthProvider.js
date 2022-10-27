import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext=createContext()



const auth = getAuth(app);

const AuthProvider=({children})=>{
    

    const[user,setuser]=useState(null)
    const [loading,setLoading]=useState(true)
    // const [accpeted,setAccepted]=useState()
    
// google log in provider...
const Providerlogin=(provider)=>{
    setLoading(true)
    return signInWithPopup(auth,provider)

};//github log in..
const GithubProvider=(provider)=>{
    setLoading(true)
    signInWithPopup(auth, provider)
}
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
};
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
};
const updateuserprofile=(profile)=>{
    setLoading(true)
    updateProfile(auth.currentUser,profile)
}

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
};

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
    setLoading(false)
})
return()=>{
    unsubscribe()
}
},[]);



const authInfo={user,Providerlogin,logOut,createUser,signIn, updateuserprofile,loading,GithubProvider}


return(

    <AuthContext.Provider value={authInfo}>

        {children}


    </AuthContext.Provider>
)



}
export default AuthProvider;