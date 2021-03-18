
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
                <div className="container headercontainer">
                <div className="row">
                    <div className="col-3">
                    <img src={require("./images/logo.png").default} className="logo" />
                    </div>
                    <div className="col-6">

                    </div>
                    <div className="col-3 headerbuttondiv">
                        <div className="headerbutton"><p>Login</p></div>
                        <div className="headerbutton"><p>Sign up</p></div>
                    </div>
                    
                </div>
                </div>
            </header>
            <div className="container-fluid">
                <section>
                    <div className="container section1">
                        <div className="row">
                            <div className="col-5 section1firstdiv">
                                <img src={require("./images/basketball_player.png").default} className="player_image" />
                            </div>
                            <div className="col-7">
                                <div className="row">
                                    <div className="col-6 section2div">
                                        <div className="section2div2">
                                            <img src={require("./images/CamouStroke.png").default} className="firststproduct" />
                                        </div>
                                    </div>
                                    <div className="col-6 section2div">
                                        <div className="section2div2">
                                            <img src={require("./images/BX7E-02E_High_Large_TOP_2000x.png").default} className="firststproduct" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 section2div">
                                        <div className="section2div2">
                                            <img src={require("./images/Parts-of-a-tennis-racket.png").default} className="firststproduct" />
                                        </div>
                                    </div>
                                    <div className="col-6 section2div">
                                        <div className="section2div2">
                                            <img src={require("./images/S150C_2000x.png").default} className="firststproduct" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* first section closed */}
                <section  className="section2">
                    <h1 className="text-center">Categories</h1>
                    <div className="container">
                        <Carousel responsive={responsive}>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/cricket.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/add.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/add.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/add.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/add.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/add.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/add.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                            <div className="Carousel">
                                <div className="crouseldiv">
                                    <img src={require("./images/add.jpg").default} className="crouselimg" />
                                </div>
                                <div className="coruslediv2">
                                    <h4>Cricket</h4>
                                </div>
                            </div>
                        </Carousel>
                    </div>

                </section>
                
            </div >
            <section  className="sectionthird">
                <div className="container" className="sectionthird2">
                    <h2>Featured products</h2>
                    <div className="row thirdsectionrow">
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/add.jpg").default} /></div>
                            <div className="box1div2">
                                <div className="box1div3">
                                    <p>Very good basketball                                  
                                    </p>
                                    <p className="d-flex">   <img src={require("./images/star.png").default} />
                                       <s><h6>999</h6></s>
                                        <h5>616</h5></p>
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
                                <img src={require("./images/Platinum_LE__03806.1550863432.jpg").default} /></div>
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
                                <img src={require("./images/Loki-Stiga-Table-Tennis-Racket-Custom-Logo-Best-Table-Tennis-Racket-for-Spin-and-Control-with-Ball.jpg").default} /></div>
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
                                <img src={require("./images/Parts-of-a-tennis-racket (1).png").default} /></div>
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
                                <img src={require("./images/S150C_2000x (1).png").default} /></div>
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
                                <img src={require("./images/Setia-International-Player-Edition-Pro-Star-Kit-Bag_-Cover.jpeg").default} /></div>
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
                        <div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/4d3ea737ec4bcf81fee180920c757472.jpg").default} /></div>
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
                        </div><div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/81aroXnM5lL._SX355_.jpg").default} /></div>
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
                        </div><div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/football.jpg").default} /></div>
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
                        </div><div className="box1">
                            <div className="box1div1" >
                                <img src={require("./images/add.jpg").default} /></div>
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
                    </div>
                </div>
            </section>
            {/* footer section */}
            <section>
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
export default Home