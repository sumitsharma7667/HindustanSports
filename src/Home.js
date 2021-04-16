
import React, { useState, useEffect } from "react"
import Slider from 'react-animated-slider';
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import firebaseDb from "./firebase"
import "react-multi-carousel/lib/styles.css";
import 'react-animated-slider/build/horizontal.css';
import "./style.css"
import Header from "./Header"
import Footer from "./Footer"
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
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
    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
    const responsive3 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
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
        <React.Fragment>
            {/* Header start */}
            <Header/>
           {/* Header end */}
            {/* <!-- Bottom Bar Start --> */}
            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={require("./images/logo.png").default} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <a href="wishlist.html" className="btn wishlist">
                                    <i className="fa fa-heart"></i>
                                    <span>(0)</span>
                                </a>
                                <a href="addcart" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Bottom Bar End -->        */}

            {/* <!-- Main Slider Start --> */}
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-home"></i>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i>Best Selling</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-plus-square"></i>New Arrivals</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-female"></i>Fashion & Beauty</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-child"></i>Kids & Babies Clothes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-tshirt"></i>Men & Women Clothes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-mobile-alt"></i>Gadgets & Accessories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-microchip"></i>Electronics & Accessories</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <div className="header-slider normal-slider row" >
                                <Carousel responsive={responsive3}>
                                    {
                                        category.reverse().map((el, ind) => {
                                            if (el.data !== undefined) {
                                                return (
                                                    <div className="header-slider-item col-lg-11">
                                                        <img src={el.data.image} />
                                                        <div className="header-slider-caption">
                                                            <p>{el.data.name} Hope You Love It</p>
                                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                                        </div>
                                                    </div>

                                                )
                                            }
                                        })}


                                </Carousel>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    {
                                        data[0] !== undefined ?
                                            <img src={data[4].data.image[0]} />
                                            : null
                                    }
                                    <a className="img-text" href="">
                                        {data[0] !== undefined ?
                                            <p>{data[4].data.name} Amazing Product</p>
                                            : null
                                        }
                                    </a>
                                </div>
                                <div className="img-item">

                                    {
                                        data[0] !== undefined ?
                                            <img src={data[16].data.image[0]} />
                                            : null
                                    }
                                    <a className="img-text" href="">
                                        {data[0] !== undefined ?
                                            <p>{data[16].data.name} Amazing Product</p>
                                            : null
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Slider End -->       */}

            {/* <!-- Brand Start --> */}
            <div className="brand">
                <div className="container-fluid">

                    <div className="brand-slider">
                        <Carousel responsive={responsive}>
                            <div className="brand-item"><img src={require("./images/brand-1.png").default} /> </div>
                            <div className="brand-item"><img src={require("./images/brand-2.png").default} /></div>
                            <div className="brand-item"><img src={require("./images/brand-3.png").default} /></div>
                            <div className="brand-item"><img src={require("./images/brand-4.png").default} /></div>
                            <div className="brand-item"><img src={require("./images/brand-5.png").default} /></div>
                            <div className="brand-item"><img src={require("./images/brand-6.png").default} /></div>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* <!-- Brand End -->       */}

            {/* <!-- Feature Start--> */}
            <div className="feature">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fab fa-cc-mastercard"></i>
                                <h2>Secure Payment</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-truck"></i>
                                <h2>Worldwide Delivery</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-sync-alt"></i>
                                <h2>90 Days Return</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-comments"></i>
                                <h2>24/7 Support</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End-->       */}

            {/* <!-- Category Start--> */}
            <div className="category">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="category-item ch-400">

                                <img src={require("./images/category-3.jpg").default} />
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-250">

                                <img src={require("./images/category-4.jpg").default} />
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-150">
                                <img src={require("./images/category-5.jpg").default} />
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-150">
                                <img src={require("./images/category-6.jpg").default} />
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-250">
                                <img src={require("./images/category-7.jpg").default} />
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src={require("./images/category-8.jpg").default} />
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Category End-->        */}

            {/* <!-- Call to Action Start --> */}
            <div className="call-to-action">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>call us for any queries</h1>
                        </div>
                        <div className="col-md-6">
                            <a href="tel:0135-3557207"> +0135-3557207</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Call to Action End -->        */}

            {/* <!-- Featured Product Start --> */}
            <div className="featured-product product">
                <div className="container-fluid">
                    <div className="section-header">
                        <h1>Featured Product</h1>
                    </div>
                    <div className="row align-items-center product-slider product-slider-4">
                        <Carousel responsive={responsive2}>
                            {
                                data.reverse().map((el, ind) => {
                                    console.log(el.data.producttype)
                                    if (el.data !== undefined && el.data.producttype == "featured") {
                                        return (
                                            <div className="col-lg-11">
                                                <div className="product-item">
                                                    <div className="product-title">
                                                        <a href="#">{el.data.name}</a>
                                                        <div className="ratting">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="product-image">
                                                        <a href="product-detail.html">

                                                            <img src={el.data.image} />
                                                        </a>
                                                        <div className="product-action">
                                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-price">
                                                        <h3><span>$</span>{el.data.saleprice}</h3>
                                                        <Link to={"Singleproduct/" + el.key} className="btn"><i className="fa fa-shopping-cart"></i>Buy Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* <!-- Featured Product End -->        */}

            {/* <!-- Newsletter Start --> */}
            <div className="newsletter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Subscribe Our Newsletter</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="form">
                                <input type="email" value="Your email here" />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End -->         */}

            {/* <!-- Recent Product Start --> */}
            <div className="recent-product product">
                <div className="container-fluid">
                    <div className="section-header">
                        <h1>Popular Product</h1>
                    </div>
                    <div className="row align-items-center product-slider product-slider-4">
                        <Carousel responsive={responsive2}>
                            {
                                data.reverse().map((el, ind) => {
                                    if (el.data !== undefined && el.data.producttype == "featured") {
                                        return (
                                            <div className="col-lg-11">
                                                <div className="product-item">
                                                    <div className="product-title">
                                                        <a href="#">{el.data.name}</a>
                                                        <div className="ratting">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="product-image">
                                                        <a href="product-detail.html">

                                                            <img src={el.data.image} />
                                                        </a>
                                                        <div className="product-action">
                                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-price">
                                                        <h3><span>$</span>{el.data.saleprice}</h3>
                                                        <Link to={"Singleproduct/" + el.key} className="btn"><i className="fa fa-shopping-cart"></i>Buy Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* <!-- Recent Product End --> */}

            {/* <!-- Review Start --> */}
            <div className="review">
                <div className="container-fluid">
                    <div className="row align-items-center review-slider normal-slider">
                        <div className="col-md-6">
                            <div className="review-slider-item">
                                <div className="review-img">


                                    <img src={require("./images/review-1.jpg").default} />
                                </div>
                                <div className="review-text">
                                    <h2>Customer Name</h2>
                                    <h3>Profession</h3>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="review-slider-item">
                                <div className="review-img">

                                    <img src={require("./images/review-2.jpg").default} />
                                </div>
                                <div className="review-text">
                                    <h2>Customer Name</h2>
                                    <h3>Profession</h3>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="review-slider-item">
                                <div className="review-img">

                                    <img src={require("./images/review-3.jpg").default} />
                                </div>
                                <div className="review-text">
                                    <h2>Customer Name</h2>
                                    <h3>Profession</h3>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Review End -->         */}

          {/* Footer start */}
          <Footer/>
          {/* Footer End */}
        </React.Fragment>
    )
}
export default Home
