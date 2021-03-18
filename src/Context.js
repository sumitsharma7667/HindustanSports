import React,{createContext,useState,useEffect} from "react"
import { Children } from "react";
export const MyContext =createContext();
export const MyContextprovider =({children})=>{    
    const [value,Setvalue]= useState("sumit sharma")
    const funn=async(data)=>{
    // Setvalue(data)
    alert("hello from "+JSON.stringify(data))
    }   
    var data={
     value:value,
     funn:funn               
    }
    return(
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}
