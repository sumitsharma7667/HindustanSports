import React,{useState,useEffect}from"react";
import firebaseDb from "../../firebase"
import {auth} from "../../firebase"
const LoginPage =()=> {
        const[email,setemail]=useState()
        const[password,setpassword]=useState()        
        const signin=async()=>{            
            await auth.signInWithEmailAndPassword(email,password).then((e)=>{
            console.log(e)
            alert("Login Successfully")
            })
            .catch(err=>{
            console.log(err)
            })
        }           
        return (            
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row imgRowLog">
                        <div className="col-8 colElog">
                           <img src={require("../../images/bgimg.jpg").default} className="loginImg" />
                        </div>
                        <div className="col-4">
                            <div className="loginForm">
                            <div className="row headingLog">
                                <div className="col-12">
                                   <h3>Welcome</h3>
                                    <h4>Login</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label>Email</label>
                                    <input type="email" className="form-control inputLog" onChange={(e)=>{setemail(e.target.value)}} />
                                     <label>Password</label>
                                    <input type="text" className="form-control inputLog"  onChange={(e)=>{setpassword(e.target.value)}}/>
                                     </div>
                                <div className="row mt-3">
                                    <div className=" col-6">
                                    <input type="checkbox" id="" name="" value=""/>
                                        <label for="vehicle1">Remember me </label>
                                    </div>
                                    <div className="col-6 fogetLog">
                                        <h6>Forget Password?</h6>
                                       </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <button className="btn btn-primary" onClick={(e)=>{signin()}}>Login</button>
                                </div>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )    
}

export default LoginPage