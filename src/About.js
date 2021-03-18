
import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {MyContext} from "./Context"
const About=()=>{
const data = useContext(MyContext)
return(
    <div>
    <h1>About page</h1>
    <Link to="Home">Home</Link ><br></br>
    <Link to="Singleproduct">Singleproduct</Link ><br></br>
    <button onClick={()=>{data.funn("About")}}>Press Me</button>
    </div>
)
}
export default About