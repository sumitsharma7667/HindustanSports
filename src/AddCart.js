import React, { Component } from "react";
class Addcart extends Component {
    render() {
        return (
            <React.Fragment>
                 <header>
                    <div className="container-fluid headercontainer">
                        <div className="row">
                            <div className="col-2 mt-2">
                                <img src={require("./images/logo (1).png").default} className="logo" />
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
                                        <div className="col-4">
                                            <li>Login/Register</li>
                                        </div>
                                        <div className="col-4">
                                            <li>Wishlist</li>
                                        </div>
                                        <div className="col-4">
                                            <li>Cart <i class="fas fa-shopping-cart"></i></li>
                                            </div>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                 <section class="card sectCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <div class="dropdown">
                                    <span class="dropdown__btn">Categories</span>
                                    <a href="#" class="dropdown__link ">Shoes</a>
                                    <a href="#" class="dropdown__link ">Shoes</a>
                                    <a href="#" class="dropdown__link ">Shoes</a>
                                    <a href="#" class="dropdown__link ">Shoes</a>
                                    <a href="#" class="dropdown__link ">Shoes</a>
                                </div>
                                {/* <select className="form-control homeCategory" name="cars" id="cars">
                                    <option value="">Categories</option>
                                </select> */}
                                
                            </div>
                            
                            <div className="col-md-5 IconsSec">
                                <div className="row iconsHead">
                                    <div className="col-6">
                                        <h5>Follow us on </h5>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                                <i class="fab fa-twitter"></i>
                                            </div>
                                            <div className="col-4">
                                                <i class="fab fa-facebook"></i>
                                            </div>
                                            <div className="col-4">
                                                <i class="fab fa-instagram"></i>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="search">
                                   <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                                    <button type="submit" class="searchButton">
                                        <i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Shopping card heading  */}
                <section className="mt-4">
                    <div className="container-fluid">
                        <div className="card shopCartHead">
                            <h4>Shopping Cart</h4>
                        </div>
                    </div>
                </section>
                {/* Shopping product Cart section */}
                <section className="mt-4">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8">
                                <div className="row card ImgCardCat">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-4 imgColaddcart">
                                                <img src={require("./images/football.jpg").default}  className="imageAddcart"/>
                                            </div>
                                            <div className="col-8">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4>Baden Low bounce Futsal Practice Football shoe</h4>
                                                        </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="priceOfProd">
                                                        <label>Qty:</label>
                                                            <select></select>
                                                            <h6>Price: $1200</h6>
                                                            </div>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="row card mt-3">
                                    <div className="col-md-12">
                                         <div className="row">
                                             <div className="col-4 imgColaddcart">
                                                <img src={require("./images/football.jpg").default}  className="imageAddcart"/>
                                            </div>
                                              <div className="col-8">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4>Baden Low bounce Futsal Practice Football shoe</h4>
                                                        </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="priceOfProd">
                                                        <label>Qty:</label>
                                                            <select></select>
                                                            <h6>Price: $1200</h6>
                                                            </div>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card colFouraddCart">

                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </section>
                {/* third section  */}
                <section>
                    <div  className="shopCartHead">
                        <h5>Best Selling Football Shoes</h5>
                    </div>
                    <div className="container">
                        <hr/>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Addcart