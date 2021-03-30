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
                    <div className="shopCartHead">
                        <h4>Best Selling Football Shoes</h4>
                    </div>
                    <div className="container">
                        <hr/>
                         <div className="row mt-3">
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
                        <hr />
                         <div className="shopCartHead">
                            <h4>Top selling Brands</h4>
                        </div>
                        <hr/>
                    </div>
                </section>
                {/* Fourt section */}
                <section className="fourtSecAddcart">
                    <div className="container contAddcart">
                        <div className="row AddCardImgrow">
                            <div className="col-2">
                               <img src={require("./images/image-10.png").default} className="" /> 
                            </div>
                            <div className="col-2">
                                <img src={require("./images/image-11.png").default} className="" />
                            </div>
                            <div className="col-2">
                                <img src={require("./images/image-12.png").default} className="" />
                             </div>
                            <div className="col-2">
                                <img src={require("./images/image-13.png").default} className="" />
                             </div>
                            <div className="col-2">
                                <img src={require("./images/image-9.png").default} className="" />
                            </div>
                            <div className="col-2">
                                <img src={require("./images/image-8.png").default} className="" />
                             </div>
                        </div>
                    </div>
                </section>

                {/* fifth section  */}
                <section>
                    <div className="container">
                        <hr />
                        <div className="shopCartHead">
                            <h4>Related Products</h4>
                        </div>
                        <hr />
                        <div className="row mt-3">
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
                </section>
                {/* sixth section */}
                <section>
                    <div className="container">
                        <hr/>
                        <div className="shopCartHead">
                            <h4>Recnetly viewed</h4>
                        </div>
                        <hr />
                        <div className="row mt-3">
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
                </section>
                  <footer className="footSect">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-3 footCol">
                                <h4>ABOUT US</h4>
                                <span>
                                <p>Who we are</p>
                                 <p>Decathalon CSR</p>
                                <p>Careers</p>
                                <p>News Room</p>
                                    <p>Made in India</p>
                                    </span>
                            </div>
                            <div className="col-3 footCol">
                                <h4>SUPPORT</h4>
                                <span>
                                <p>Conctact Our Stores</p>
                                    <p>Delivery</p>
                                    </span>
                            </div>
                            <div className="col-3 footCol">
                                <h4>LEGAL</h4>
                                <spna>
                                <p>Return Policy</p>
                                 <p>Terms and Conditions</p>
                                    <p>Privacy Policy</p>
                                    </spna>
                                
                            </div>
                            <div className="col-3 footCol">
                                 <h4>Connect with Us</h4>
                                <p>0987886676</p>
                                <div className="footerIcon">
                                <i class="fab fa-twitter iCoNSS"></i>
                                <i class="fab fa-facebook iCoNSS"></i>
                                    <i class="fab fa-instagram iCoNSS"></i>
                                    </div>
                             </div>

                        </div>
                        <div className="row">
                            <div className="col-3 footCol">
                                <div className="addressL">
                                <h4>Address</h4>
                                <span>
                                <p>22, Connought Place</p>
                                <p>Dehradun Uttarakhand</p>
                                    <p>248001 India</p>
                                    </span>
                                    </div>
                            </div>
                        
                        <div className="col-9 ">
                            <div className="row mt-4">
                                <div className="col-3">
                                     <img src={require("./images/image-8.png").default} className="" />
                                </div>
                                <div className="col-3">
                                    <img src={require("./images/image-9.png").default}/>
                                </div>
                                    <div className="col-3">
                                        <img src={require("./images/image-11.png").default} />
                                    </div>
                                    <div className="col-3">
                                        <img src={require("./images/image-12.png").default} />
                                </div>
                                </div>
                                <div className="row mt-2">
                                <div className="col-3">
                                     <img src={require("./images/image-15.png").default} className="" />
                                </div>
                                <div className="col-3">
                                    <img src={require("./images/image-13.png").default}/>
                                    </div>
                                     <div className="col-3">
                                    <img src={require("./images/image-10.png").default}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Addcart