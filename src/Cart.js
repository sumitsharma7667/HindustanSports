import React from "react"
const Cart = () => {
    return (
        <>
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
            <section className="mt-3">
                <div className="container border conatinHei">
                    <div className="row">
                        <div className="col-2 firstsecimg">
                            <div className="card colSmcard">
                                <img src={require("./images/Adishoe.png").default} className="SmallCardimg" />
                            </div>
                             <div className="card colSmcard">
                                <img src={require("./images/Adishoe.png").default} className="SmallCardimg" />
                            </div>
                             <div className="card colSmcard">
                                <img src={require("./images/Adishoe.png").default} className="SmallCardimg" />
                            </div>
                             <div className="card colSmcard">
                                <img src={require("./images/Adishoe.png").default} className="SmallCardimg" />
                            </div>
                        </div>
                        <div className="col-6 border-right firstSecR">
                            <img src={require("./images/Adishoe.png").default} className="SixColImg" />
                        </div>
                        <div className="col-4 border">
                            <div className="row lastcolP ">
                                <div className="col-3 ColContent colthreec">
                                    <h3>Adidas green </h3>
                                    <p>football boots</p>
                                </div>
                                <div className="col-3 ColContent">
                                    <label>Quantity: </label>
                                    <select></select>
                                </div>
                                <div className="col-3 ColContent thirdSecC">
                                    <h5>M.R.P.: <span>4,322.00</span></h5>
                                    <h5>Price: <span>4,322.00</span></h5>
                                      <h5>You save $700.00 (17%)</h5>
                                        <p>Inclusive of all taxes</p>                                      
                                     <label>Size : </label>
                                    <select>
                                    </select>
                                </div>
                                <div className="col-3 ColContent">
                                    <button className="btn btn-primary"> <i class="fas fa-shopping-cart"></i>Add to wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-primary">
                                Add to Cart
                            </button>
                        </div>
                            <div className="col-4">
                                colors
                        </div>
                            <div className="col-4">
                                <button className="btn btn-primary">
                                Buy Now
                            </button>
                        </div>
                        </div>
                        </div>
                </div>
            </section>
            <section className="mt-4">
                <div className="container">
                    <div className="row detailRow">
                        <div className="col-6">
                            <h4>Product Details</h4>
                        </div>
                        <div className="col-6">
                            <h4>Product Description</h4>
                         </div>
                    </div>
                    <hr/>
                </div>
                <div className="col-6"></div>
                <div className="col-6"></div>
            </section>
        </>
    )
}
export default Cart 