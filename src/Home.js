
import React, { useState, useEffect } from "react"
import Slider from 'react-animated-slider';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'react-animated-slider/build/horizontal.css';
import "./style.css"
const Home = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items:5
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
          items:4
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
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-envelope"></i>
                        support@email.com
                    </div>
                        <div className="col-sm-6">
                            <i className="fa fa-phone-alt"></i>
                        +012-345-6789
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top bar End --> */}

            {/* <!-- Nav Bar Start --> */}
            <div class="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                            <a href="index.html" class="nav-item nav-link active">Home</a>
                            <a href="product-list.html" class="nav-item nav-link">Products</a>
                            <a href="product-detail.html" class="nav-item nav-link">Product Detail</a>
                            <a href="cart.html" class="nav-item nav-link">Cart</a>
                            <a href="checkout.html" class="nav-item nav-link">Checkout</a>
                            <a href="my-account.html" class="nav-item nav-link">My Account</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                <div class="dropdown-menu">
                                    <a href="wishlist.html" class="dropdown-item">Wishlist</a>
                                    <a href="login.html" class="dropdown-item">Login & Register</a>
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
                </nav>
            </div>
        </div>
            {/* <!-- Nav Bar End -->       */}

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
                                <a href="cart.html" className="btn cart">
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
                            <div className="header-slider normal-slider">
                                {/* <div className="header-slider-item">
                                           
                                            <img src={require("./images/slider-1.jpg").default}/> 
                                            <div className="header-slider-caption">
                                                <p>Some text goes here that describes the image</p>
                                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                            </div>
                                        </div> */}
                                {/* <div className="header-slider-item">
                                        
                                            <img src={require("./images/slider-2.jpg").default}/> 
                                            <div className="header-slider-caption">
                                                <p>Some text goes here that describes the image</p>
                                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                            </div>
                                        </div> */}
                                <div className="header-slider-item">

                                    <img src={require("./images/slider-3.jpg").default} />
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">

                                    <img src={require("./images/category-1.jpg").default} />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="img-item">

                                    <img src={require("./images/category-2.jpg").default} />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
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
                            <a href="tel:0123456789">+012-345-6789</a>
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
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-1.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-2.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-3.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-4.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-5.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
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
                        <h1>Recent Product</h1>
                    </div>
                    <div className="row align-items-center product-slider product-slider-4">
                        {/* <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-6.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div> */}
                            <Carousel responsive={responsive2}>
                            <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-7.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                               
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-7.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-8.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-9.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-10.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="product-item">
                                <div className="product-title">
                                    <a href="#">Product Name</a>
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

                                        <img src={require("./images/product-10.jpg").default} />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h3><span>$</span>99</h3>
                                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                </div>
                            </div>
                        </div>
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

            {/* <!-- Footer Start --> */}
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Get in Touch</h2>
                                <div className="contact-info">
                                    <p><i className="fa fa-map-marker"></i>123 E Store, Los Angeles, USA</p>
                                    <p><i className="fa fa-envelope"></i>email@example.com</p>
                                    <p><i className="fa fa-phone"></i>+123-456-7890</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Follow Us</h2>
                                <div className="contact-info">
                                    <div className="social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Company Info</h2>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Condition</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Purchase Info</h2>
                                <ul>
                                    <li><a href="#">Pyament Policy</a></li>
                                    <li><a href="#">Shipping Policy</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row payment align-items-center">
                        <div className="col-md-6">
                            <div className="payment-method">
                                <h2>We Accept:</h2>

                                <img src={require("./images/payment-method.png").default} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payment-security">
                                <h2>Secured By:</h2>

                                <img src={require("./images/godaddy.svg").default} />
                                <img src={require("./images/norton.svg").default} />
                                <img src={require("./images/ssl.svg").default} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Footer Bottom Start --> */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright &copy; <a href="https://htmlcodex.com">HTML Codex</a>. All Rights Reserved</p>
                        </div>

                        <div className="col-md-6 template-by">
                            <p>Template By <a href="https://htmlcodex.com">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            {/* <!-- Footer Bottom End -->    */}
        </React.Fragment>
    )
}
export default Home
