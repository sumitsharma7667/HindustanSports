
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import $ from 'jquery';
import firebaseDb from "./firebase"
import "./style.css"
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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
const Home = () => {
    useEffect(() => {
        getdata()
        getCategory()
    },[])
    const [data, setdata] = useState([])
    const [category, setcategory] = useState([])
    const getCategory = () => {
        firebaseDb.child("Catogery").on("value", function (onSnapshot) {
            let tempdata = []
            onSnapshot.forEach(item => {
                tempdata.push({ data: item.val(), key: item.key })
            })
            setcategory(tempdata)
        })
    }
    const getdata = async () => {
        await firebaseDb.child("Products").on("value", function (onSnapshot) {
            let tempdata = []
            onSnapshot.forEach(item => {
                tempdata.push({ data: item.val(), key: item.key })
            })
            setdata(tempdata)
            // console.log(data[3].data.image[0])
        })
    }    

    if (data[0] !== undefined) {
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
                {/* Image section */}
                <section className="imagesSect mt-3">
                    <div className="container-fluid">
                        <div className="row imageRow">
                            <div className="col-md-6">
                                <img src={data[1].data.image[0]} className="firstrowImg"/>
                            </div>
                            <div className="col-md-6 colSixsec">
                                <div className="row seconRow">
                                    <div className="col-md-6 colImgsec">
                                        <img src={data[2].data.image[0]} className="w-100 s mb-4 firstrowImg imgClas firstImgSec" />
                                    </div>
                                    <div className="col-md-6 colImgsec ">
                                        <img src={data[2].data.image[1]} className="  mb-4 firstrowImg imgClasSec" />
                                    </div>
                                     </div>
                                <div className="row seconRow">
                                    <div className="col-md-6 colImgsec ">
                                        <img src={data[3].data.image[0]} className="w-100  mb-4 firstrowImg imgClas" />
                                    </div>
                                    <div className="col-md-6 colImgsec">
                                        <img src={data[3].data.image[1]} className=" mb-4 firstrowImg imgClasSec" />
                                    </div>
                                </div>
                            </div>
                      </div>
                        <div className="row">
                            <div className="col-3  ">
                                <img src={require("./images/cricketer.png").default} className="  mb-4  ImagesClas cricketimg" />
                            </div>
                            <div className="col-3  ">
                                <img src={require("./images/kit.jpg").default} className="w-100  mb-4 ImagesClas" />
                            </div>
                            <div className="col-6 lastCol">
                                <img src={require("./images/18-SM268387.jpg").default} className="w-100  mb-4 ImagesClas imgClas" />
                            </div>
                        </div>
                    </div>
                </section >
                {/* Categories section */}
                <section className=" thirdSec">
                    <div className="headCat"><h4>Categories</h4></div>
                    <hr />
                  
                    <div className="container">
                        <div className="row"> 
                        <Carousel responsive={responsive}>                      
                            {
                                category.map((el,ind)=>{
                                    console.log(data[ind].data,"is here")
                                    return(
                                       
                                    <div className="col-2 card p-2 sectBody">                                                                                                            
                                        <img  src={data[ind].data.image} className="CategoriesIcon" />:                                        
                                        <h3 className="mt-3 cardt">{data[ind].data.name}</h3>
                                        </div>                                                                       
                                 
                                    )
                                })
                            }
                               </Carousel>
                            {/* <div className="col-2 card p-2 sectBody">
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
                            </div> */}
                        </div>
                        </div>
                    
                </section>
                <div className="headCat mt-4"><h4>FEATURED</h4></div>
                <div className="container mb-3">
                    <div className="row mt-5">
                        {
                            data.map((el,ind)=>{
                            if(data[ind].data.producttype=="featured"){
                             return(
                            <div className="col-md-3 mt-4">
                            <div class="card cardPrice">
                                <div class="imgbx">
                                <img src={data[ind].data.image[0]} className=""/>
                                    {/* <img src={require("./images/207546-200.png").default} className="" /> */}
                                    {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                                </div>
                                <div class="contentBx">
                                    <h3>lethered Basketball</h3>
                                    <h2 class="price">$20.<small>99</small></h2>
                                    <Link to={"Singleproduct/"+el.key} class="buyNow">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        )  
                            } 
                            })
                        }                                                                
                    </div>
                </div>
                <div className="container">
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
                <hr />
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

                {/* Footer Section */}
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
            </>
        )
    }
    else {
        return (
            <div className="loader">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_lz5rbiit.json"  background="transparent"  speed="1"  style={{width:400,height:"100%",margin:"auto"}}loop  autoplay></lottie-player>
       </div>
        )
    }
}
export default Home