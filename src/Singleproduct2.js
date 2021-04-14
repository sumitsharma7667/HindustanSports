
import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import { MyContext } from "./Context"
import "./style.css"
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  }from "react-image-magnifiers";
const Singleproduct = () => {
    const data = useContext(MyContext)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
                <div className="container headercontainer">
                <div className="row">
                    <div className="col-2">
                    <img src={require("./images/logo.png").default} className="logo" />
                    </div>
                    <div className="col-7 headersearchbar">
                        <input type="text" placeholder="Search Here" className="searchbar"/>
                        <i className="fas fa-search searchicon"></i>
                    </div>
                    <div className="col-3 headerbuttondiv">
                        <div className="headerbutton"><p>Login</p></div>
                        <div className="headerbutton"><p>Sign up</p></div>
                    </div>
                    
                </div>
                </div>
            </header>
        <section>
            <div className="container section1div  " >
                <div className="row dcenter ">
                    <div className="col-10 section1div2 dcenter">
                    
                            <div className="col-8 singleproductimgdiv">
                                <img src={require("./images/S150C_2000x (1).png").default} className="singleproductimg" />
                            </div>
                            <div className="col-4 productname ">
                                <h2>Baden Low Bounce</h2>
                                <h2> Futsal Practice Ball</h2>
                                <p>Mrp <span className="text-danger">499$</span></p>
                                <p>Price<span className="text-danger">399$</span></p>                               
                                <p>You save <span className="text-danger">700.00 $(17%)</span> </p>
                            </div>
                        
                    </div>
                    <div className="col-2 div2gallary" >  
                    <div>                     
                            <div className="col-3">
                            <img src={require("./images/S150C_2000x (1).png").default} className="singleproductgallaryimg" />
                            </div>
                            <div className="col-3">
                            <img src={require("./images/S150C_2000x (1).png").default} className="singleproductgallaryimg" />
                            </div>
                            <div className="col-3">
                            <img src={require("./images/S150C_2000x (1).png").default} className="singleproductgallaryimg" />
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <div  className="d-flex">
            <div className="col-3"></div>
            <div className="col-3"><button className="buynowbtn"><i class="fas fa-shopping-cart" ></i><h3>Add to cart</h3></button></div>
            
            <div className="col-3"> <button className="buynowbtn"><i class="fas fa-hand-holding-usd"></i><h3>Buy Now</h3></button></div>
            
            <div  className="col-3 d-flex">
                <h3>Quantity</h3>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            
        </div>
        <hr/>
        <h2 style={{color:"#000",paddingBottom:"15px"}} className="text-center">Product Details</h2> 
        <section className="singlesection3">           
            <div className="container">                
                <div className="row">
                    <div className="col-3">
                    <h4>Batteries Included</h4>
                    <h4>Brand</h4>
                    <h4>Color</h4>
                    <h4>Included Component</h4>
                    </div>
                    <div className="col-3">
                    <h6>Batteries Included</h6>
                    <h6>Brand</h6>
                    <h6>Color</h6>
                    <h6>Included Component</h6>
                    </div>
                    <div className="col-3">
                    <h4>Batteries Included</h4>
                    <h4>Brand</h4>
                    <h4>Color</h4>
                    <h4>Included Component</h4>
                    </div>
                    <div className="col-3">
                    <h6>Batteries Included</h6>
                    <h6>Brand</h6>
                    <h6>Color</h6>
                    <h6>Included Component</h6>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <h2 className="text-center">Related Product</h2>
                    <div className="container">
                        <Carousel responsive={responsive}>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/yonex-badminton-racket-500x500.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/young-basketball-player-team-wearing-sportwear-training-practicing-action-motion-isolated-blue-background-neon-light-concept-sport-movement-energy-dynamic-healthy-lifestyle.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/young-couple-playing-tennis-court.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/young-woman-playing-badminton-gym.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/side-view-woman-man-playing-beach-volleyball.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/yonex-badminton-racket-500x500.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/young-basketball-player-team-wearing-sportwear-training-practicing-action-motion-isolated-blue-background-neon-light-concept-sport-movement-energy-dynamic-healthy-lifestyle.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/young-couple-playing-tennis-court.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/young-woman-playing-badminton-gym.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/side-view-woman-man-playing-beach-volleyball.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball
                                     <img src={require("./images/star.png").default} />
                                        <h4>616</h4>
                                    </p>
                                    <div className="box1div4" >
                                        <h5>Buy Now</h5>
                                    </div>
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        </Carousel>
                    </div>
        </section>
               {/* footer section */}
               <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-3 pt-5">
                            <h3 className="text-center">About Us </h3>
                            <p className="text-center">Who we are Hindustan Sports In dehradun.
                             Deal with branded product in lower cost. </p>
                        </div>
                        <div className="col-3 pt-5">
                            <h3 className="text-center"> Support </h3>
                            <p className="text-center">Who we are Hindustan Sports In dehradun.
                            Deal with branded product in lower cost. </p>
                        </div>
                        <div className="col-3 pt-5">
                            <h3 className="text-center"> Legel </h3>
                            <p className="text-center">Who we are Hindustan Sports In dehradun.
                            Deal with branded product in lower cost. </p>
                        </div>
                        <div className="col-3 pt-5">
                            <h3 className="text-center">Contact with us </h3>
                            <p className="text-center">Who we are Hindustan Sports In dehradun.
                            Deal with branded product in lower cost. </p>
                        </div>
                    </div>
                    <div className="row">                        
                        <div className="col-3 pt-5">
                            <h3 className="text-center">Address </h3>
                            <p className="text-center">22, Machhi Bazar, Connaught Place, Dehradun, Uttarakhand 248001</p>                       
                        </div>
                        <div className="col-9 footerimage" >
                            <div className="col-2">
                            <img src={require("./images/image-9.png").default} />
                            </div>
                              <div className="col-2">
                            <img src={require("./images/image-11.png").default} />
                            </div>
                              <div className="col-2">
                            <img src={require("./images/image-12.png").default} />
                            </div>
                              <div className="col-2">
                            <img src={require("./images/image-13.png").default} />
                            </div>
                              <div className="col-2">
                            <img src={require("./images/image-8.png").default} />
                            </div>
                              <div className="col-2">
                            <img src={require("./images/image-10.png").default} />
                            </div>
                              <div className="col-2">
                            <img src={require("./images/image-15.png").default} />
                            </div>
                        </div>                       
                    </div>
                </div>
            </section>
        </>
    )
}
export default Singleproduct