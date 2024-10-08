import React,{createContext,useState} from "react";
const AuthContext=createContext()
export const ContextProvider=({children})=>{
    const [isLoggedin,setisLoggedin]=useState(false)
    const login=()=>{
        setisLoggedin(true)
    }
    const logout=()=>{
        setisLoggedin(false)
    }
    let values={
        login,
        logout,
        isLoggedin
    }
    return(
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )

}

export default AuthContext