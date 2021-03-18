
import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {MyContext} from "./Context"
const Singleproduct=()=>{
const data = useContext(MyContext)
return(
    <div>
    <h1>SingleProduct</h1>
    <h2>{data.value}</h2>
    <Link to="Home">Home</Link ><br></br>
    <Link to="about">Singleproduct</Link >
    <button onClick={()=>{data.funn("Single Product")}}>
     Press Me
    </button>
    </div>
)
}
export default Singleproduct