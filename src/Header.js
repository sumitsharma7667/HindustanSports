import React from "react"
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <header>
        <div className="container-fluid headercontainer">
            <div className="row">
                <div className="col-2 mt-2">
                    <Link to="Home"><img src={require("./images/logo (1).png").default} className="logo" /></Link>
                </div>
                <div className="col-md-6 navUlC">
                    <ul className="navMenulist">
                        <li>Home/</li>
                        <li> Categories/</li>
                        <li> Best Sellers/</li>
                        <li> New Release/</li>
                        <li> Shop by Brand/</li>
                        <li> Featured</li>
                    </ul>
                </div>
                <div className="col-md-4">
                     <div className="row">
                    <ul className="navMenulist">
                            <div className="col-4 d-flex">
                                <li>
                                    <Link to="Login">
                                    Login/
                                    </Link>
                                    </li>
                                <li>
                                    <Link to="signup">
                                    Register
                                    </Link>
                                    </li>
                            </div>
                            <div className="col-4">
                                <li>Wishlist</li>
                            </div>
                            <div className="col-4">
                                <li><Link to="Addcart"> Cart <i class="fas fa-shopping-cart"></i></Link></li>
                                </div>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header