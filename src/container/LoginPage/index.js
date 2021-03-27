import React, { Component } from "react";

class LoginPage extends Component {
    render() {
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
                                    <input type="text" className="form-control inputLog" />
                                     <label>Password</label>
                                    <input type="text" className="form-control inputLog" />
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
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginPage