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
                            <div className="row">
                                <div className="col-4">
                                   <h3>Welcome</h3>
                                    <h4>Login</h4>
                                </div>
                                <div className="col-4">
                                    <label>Email</label>
                                    <input type="text" className="form-control" />
                                     <label>Password</label>
                                    <input type="text" className="form-control" />
                                    <input type="checkbox" id="" name="" value=""/>
                                    <label for="vehicle1">Remember me </label>
                                    <h6>Forget Password?</h6>
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