
import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./style.css"
const Home = () => {
    useEffect(() => {
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <header>
                <div className="container-fluid headercontainer">
                <div className="row">
                    <div className="col-2 mt-2">
                    <img src={require("./images/logo.png").default} className="logo" />
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
                            <ul className="navMenulist">
                                <li>Login/Register</li>
                                <li>Wishlist</li>
                                <li><i class="fas fa-shopping-cart"></i>Cart</li>
                            </ul>
                        </div>
                </div>
                </div>
            </header>
            <section class="card sectCard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <select className="form-control homeCategory" name="cars" id="cars">
                                <option value="">Categories</option>
                            </select>
                        </div>
                        <div className="col-md-5 IconsSec">
                            <div className="row">
                                <div className="col-6">
                                    <h5>Follow us on </h5>
                                </div>
                                <div className="col-6">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook"></i>
                                <i class="fab fa-instagram"></i>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-5">
                            <div>
                             <input type="text" placeholder="Search.." name="search"/>
                             <button type="submit"><i class="fa fa-search"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="imagesSect mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ImagesClas">
                             <img src={require("./images/18-SM268387.jpg").default} className="" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 ImagesClas">
                                     <img src={require("./images/Group 179.png").default} className="MaskGroup" />
                                </div>
                                <div className="col-md-6 ImagesClas">
                                     <img src={require("./images/tennis.png").default} className="MaskGroup" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ImagesClas">
                                     <img src={require("./images/Mask Group 2.png").default} className="MaskGroup" />
                                </div>
                                <div className="col-md-6 ImagesClas">
                                     <img src={require("./images/pexels-jd-danny-2385477.jpg").default} className="MaskGroup" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 ImagesClas">
                            <img src={require("./images/cricketer.png").default} className="MaskGroup" />
                        </div>
                        <div className="col-3 ImagesClas">
                            <img src={require("./images/kit.jpg").default} className="MaskGroup" />
                        </div>
                        <div className="col-6 lastCol ImagesClas">
                            <img src={require("./images/18-SM268387.jpg").default} className="lastCol" />
                        </div>
                    </div>
                </div>
            </section >
            <section className=" thirdSec mt-5">
                <div className="headCat"><h4>Categories</h4></div>
                
                <hr />
                <div className="container">
                <div className="row">
                <div className="col-2 card p-2 sectBody">
                        <img src={require("./images/badminton.png").default} className="CategoriesIcon" />
                <h3 className="mt-3 cardt">Badminton</h3>
                </div>
                <div className="col-2 card p-2 sectBody">
                        <img src={require("./images/basketball-2062459-1740039.png").default} className="CategoriesIcon" />
                         <h3 className="mt-3 cardt">Badminton</h3>
                </div>
                <div className="col-2 card p-2 sectBody">
                        <img src={require("./images/football-game.png").default} className="CategoriesIcon" />
                         <h3 className="mt-3 cardt">Badminton</h3>
                </div>
                <div className="col-2 card p-2 sectBody">
                        <img src={require("./images/40678-200.png").default} className="CategoriesIcon" />
                         <h3 className="mt-3 cardt">Badminton</h3>
                 </div>
                <div className="col-2 card p-2 sectBody">
                        <img src={require("./images/768px-Volleyball_icon_by_Arthur_Shlain.png").default} className="CategoriesIcon" />
                         <h3 className="mt-3 cardt">Badminton</h3>
                  </div>
                <div className="col-2 card p-2 sectBody">
                        <img src={require("./images/207546-200.png").default} className="CategoriesIcon" />
                         <h3 className="mt-3 cardt">Badminton</h3>
                        </div>
                        </div>
                </div>
            </section>
            <div className="headCat mt-3"><h4>FEATURED</h4></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
             <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="headCat mt-3"><h4>Recently viewed</h4></div>
             <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div class="card cardPrice">
                            <div class="imgbx">
                                <img src={require("./images/207546-200.png").default} className="" />
                                     {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                            </div>
                                <div class="contentBx">
                                <h3>lethered Basketball</h3>
                                <h2 class="price">$20.<small>99</small></h2>
                                <a href="#" class="buyNow">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home