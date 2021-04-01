import React, { useState,useEffect } from "react";
import firebaseDb from "../../firebase"
import { auth } from "../../firebase"
import { Link } from "react-router-dom";
const SignupPage=()=> {    
    const[email,setemail]=useState("Sumit")
    const[password,setpassword]=useState("123123")
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const signup=async()=>{     
     if(email.match(mailformat)&&password.length>=6){
        await auth.createUserWithEmailAndPassword(email,password)
        .then((user) => {
          alert("data Saved Successfully");
        })
        .catch((error) => {
         console.log(error)
        });
     }
     else{
     alert("Mail is not valid")
     }     
    }
        return (
            <React.Fragment>
                  <div className="container-fluid">
                    <div className="row imgRowLog">
                        <div className="col-8 colElog">
                           <img src={require("../../images/SignUP.jpg").default} className="loginImg" />
                        </div>
                        <div className="col-4">
                            <div className="loginForm">
                            <div className="row headingLog">
                                <div className="col-12">
                                 <Link to="Home"><img src={require("../../images/logo (1).png").default} className="loginLogo" /></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label>Fist name</label>
                                    <input type="text" className="form-control inputLog" />
                                     <label>Last name</label>
                                        <input type="text" className="form-control inputLog" />
                                        <label>Email</label>
                                        <input type="email" className="form-control inputLog"  onChange={(e)=>{setemail(e.target.value)}}/>
                                         <label>Password</label>
                                    <input type="password" className="form-control inputLog" onChange={(e)=>{setpassword(e.target.value)}} />                                    
                                     </div>
                                <div className="row mt-3">
                                    <div className=" col-6">
                                    <input type="checkbox" id="" name="" value=""/>
                                        <label for="vehicle1">Remember me</label>
                                    </div>
                                    <div className="col-6 fogetLog">
                                        <h6>Forget Password?</h6>
                                       </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <a className="btn btn-primary" onClick={()=>{signup()}} >Login</a>
                                </div>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
        </React.Fragment>
    )    
}
export default SignupPage