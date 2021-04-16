import React, { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import firebaseDb from "./firebase"
const Header=()=>{
    useEffect(()=>{
        getcartdata()
    },[])
    const [data,setData]=useState([])
    const getcartdata = () => {
        firebaseDb.child("Cart").on("value", function (onSnapshot) {
            let tempdata = []
            onSnapshot.forEach(item => {
                if (item.val().userid == "1234") {
                    tempdata.push(item.val())
                                 
                }                
            })
            setData(tempdata)
        })
    }
 
    return(
        <>
        <div className="top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-envelope"></i>
                            info@giksindia.com
                    </div>
                        <div className="col-sm-6">
                            <i className="fa fa-phone-alt"></i>
                        +0135-3557207
                    </div>
                </div>
                </div>
            </div>
            {/* // <!-- Top bar End --> */}
            {/* // <!-- Nav Bar Start --> */}
            <div class="nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                                <a href="Home" class="nav-item nav-link active">Home</a>
                                <a href="productlist" class="nav-item nav-link">Products</a>
                                {/* <a href="singleproduct/3" class="nav-item nav-link">Product Detail</a> */}
                                <a href="addcart" class="nav-item nav-link">Cart</a>
                                <a href="checkout" class="nav-item nav-link">Checkout</a>
                                <a href="my-account.html" class="nav-item nav-link">My Account</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                    <div class="dropdown-menu">
                                        <a href="wishlist.html" class="dropdown-item">Wishlist</a>
                                        <a href="login" class="dropdown-item">Login & Register</a>
                                        <a href="contact.html" class="dropdown-item">Contact Us</a>                                    
                                    </div>
                                </div>
                            </div>
                            <div class="navbar-nav ml-auto">
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item">Login</a>
                                        <a href="#" class="dropdown-item">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="addcart" className=" cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>{data.length}</span>
                                </a>
                       
                    </nav>
                </div>
            </div>
            {/* <!-- Nav Bar End -->       */}
            </>
    )
}
export default Header