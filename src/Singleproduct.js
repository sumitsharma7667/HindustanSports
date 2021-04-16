import React,{useEffect,useState} from "react"
import "./style.css"
import Carousel from "react-multi-carousel";
import firebaseDb from "./firebase"
import { Link } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
var isorder=[]
const Singleproduct=(props)=>{
    useEffect(() => {
        getdata(props.match.params.id)
        // getcartdata()
        }, [])
        const [productkey,setproductkey]=useState()
        const [data, setdata] = useState("") 
        const [quantity, Setquantity] = useState(1)
        const [order1, Setorder1] = useState([]) 
        const [cartid,setcartid]=useState()  
        const [image,setimage]=useState()
        const getdata = async (id) => {
            await firebaseDb.child("Products/"+id).on("value",function(onSnapshot){
            setdata(onSnapshot.val())
            setproductkey(onSnapshot.key) 
            //setimage(data.image)                                    
            })
        } 
        const getcartdata = () => {
            firebaseDb.child("Cart").on("value",function (onSnapshot) {    
                onSnapshot.forEach(item => {            
                   if(item.val().userid=="1234"){
                    isorder=item.val()                
                    setcartid(item.key)
                   }
                })                                                              
            })                
        }
        const cartfunction=async(productid,name,image,price,index,) => {
            const addcartdata = () => {                               
                var obj = {
                    userid:"1234",
                    order:order1                
                }
                firebaseDb.child("Cart").push(
                    obj
                    , err => {
                        if (err) {
                            console.log(err)
                        }
                    }
                ).then(()=>{
                    alert("data insert Sucessfully")            
                    // Setorder1([])
                })
            }        
            if (quantity !== 0) {
                var merged = false
                var newItemObj = {
                    "productid":productid,
                    "name": name,                
                    "image": image,
                    "quantity": quantity,               
                    "price":JSON.parse(price),           
                }                      
                if (isorder==null||isorder==""||isorder==[]) {  
                    console.log("inside if")          
                    for (var i = 0; i < order1.length; i++) {
                        if (order1[i].productid==newItemObj.productid) {
                            order1[i].quantity+=newItemObj.quantity
                            order1[i].price+=newItemObj.price                    
                            merged=true                      
                        }
                    }
                    if (!merged) {
                       await order1.push(newItemObj)                                                       
                    } 
                    addcartdata()            
                }
                else { 
                    console.log("inside else")   
                    console.log(isorder)                 
                    for (var i = 0; i < isorder.order.length; i++) {              
                        if (isorder.order[i].productid == newItemObj.productid) {
                            isorder.order[i].quantity += newItemObj.quantity
                            isorder.order[i].price += newItemObj.price                  
                            merged = true                        
                        }
                    }
                    if (!merged) { 
                       console.log("outside the loop",newItemObj,isorder)
                       await isorder.order.push(newItemObj)                                 
                    } 
                     updatecart(isorder.order)
                    console.log(isorder,"here")        
                }
            }
        }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items:3
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
      const responsive1 = {
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
          items:1
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
      const updatecart=(order)=>{
        var  obj={
         userid:"1234",
         order:order
        }
         firebaseDb.child("Cart/"+cartid).update(obj) 
         .then(()=>{
             alert("Updated Successfully")
         })
     }
  const cartQuentity=(e)=>{
     
if(quantity>=1&&e=="Plus"){ 
Setquantity(quantity+1)
}
if(quantity>1&&e=="Minus"){
Setquantity(quantity-1)
}
  }
    return(
        <>
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
                           
                                <img src={require("./images/logo.png").default} alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="search">
                            <input type="text" placeholder="Search"/>
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
        {/* <!-- Bottom Bar End -->  */}
        
        {/* <!-- Breadcrumb Start --> */}
        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Products</a></li>
                    <li className="breadcrumb-item active">Product Detail</li>
                </ul>
            </div>
        </div>
        {/* <!-- Breadcrumb End --> */}
        
        {/* <!-- Product Detail Start --> */}
        <div className="product-detail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="product-detail-top">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="product-slider-single normal-slider">
                                    {data.image!==undefined?
                                     <img src={data.image} alt=" Product Image"/>
                                    :
                                    null
                                    }
                                   
                                    {/* <img src={require("./images/product-2.jpg").default} alt="Logo"/>
                                    <img src={require("./images/product-3.jpg").default} alt="Logo"/>
                                    <img src={require("./images/product-4.jpg").default} alt="Logo"/>
                                    <img src={require("./images/product-5.jpg").default} alt="Logo"/>
                                    <img src={require("./images/product-6.jpg").default} alt="Logo"/> */}
                                   
                                    </div>
                                    <div className="product-slider-single-nav normal-slider">
                                   {data.image!==undefined?
                                      <Carousel responsive={responsive1}>                                  
                                      {data.image.map((el,ind)=>{
                                          return(
                                              <div className="slider-nav-img"> <img src={el} alt="image" onClick={()=>{setimage(el)}} /></div>
                                          )
                                      })}
                                      {/* // <div className="slider-nav-img"> <img src={require("./images/product-1.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-2.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-3.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-4.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-5.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-1.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-2.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-3.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-4.jpg").default} alt="Logo"/></div>
                                      // <div className="slider-nav-img"> <img src={require("./images/product-5.jpg").default} alt="Logo"/></div> */}
                                  </Carousel>                                   
                                   :null}                                 
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="product-content">
                                        <div className="title"><h2>{data.name}</h2></div>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i> 

                                        </div>
                                        <div className="price">
                                            <h4>Price:</h4>
                                            <p>{data.saleprice} <span>{data.regularprice}</span></p>
                                        </div>
                                        <div className="quantity">
                                            <h4>Quantity:</h4>
                                            <div className="qty">
                                                <button className="btn-minus" onClick={()=>{cartQuentity("Minus")}}><i className="fa fa-minus"></i></button>
                                                <input type="text" value={quantity}/>
                                                <button className="btn-plus" onClick={()=>{cartQuentity("Plus")}}><i className="fa fa-plus"></i></button>
                                            </div>
                                        </div>
                                        <div className="p-size">
                                            <h4>Size:</h4>
                                            <div className="btn-group btn-group-sm">
                                                <button type="button" className="btn">S</button>
                                                <button type="button" className="btn">M</button>
                                                <button type="button" className="btn">L</button>
                                                <button type="button" className="btn">XL</button>
                                            </div> 
                                        </div>
                                        <div className="p-color">
                                            <h4>Color:</h4>
                                            <div className="btn-group btn-group-sm">
                                                <button type="button" className="btn"> {data.color}
                                               </button>
                                                {/* <button type="button" className="btn"> {data.color}
                                               </button>
                                                <button type="button" className="btn"> {data.color}
                                               </button> */}
                                            </div> 
                                        </div>
                                        <div className="action">
                                         <Link to={"/addcart"} className="btn" onClick={()=>{cartfunction(productkey,data.name,data.image,data.saleprice)}}><i className="fa fa-shopping-cart"></i>Add to Cart</Link>
                                            <Link to={"/checkout"} className="btn"><i className="fa fa-shopping-bag"></i>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row product-detail-bottom">
                            <div className="col-lg-12">
                                <ul className="nav nav-pills nav-justified">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#reviews">Reviews (1)</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div id="description" className="container tab-pane active">
                                        <h4>Product description</h4>
                                        <p>
                                          {data.description}
                                        </p>
                                    </div>
                                    <div id="specification" className="container tab-pane fade">
                                        <h4>Product specification</h4>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                    </div>
                                    <div id="reviews" className="container tab-pane fade">
                                        <div className="reviews-submitted">
                                            <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                            </p>
                                        </div>
                                        <div className="reviews-submit">
                                            <h4>Give your Review:</h4>
                                            <div className="ratting">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <div className="row form">
                                                <div className="col-sm-6">
                                                    <input type="text" placeholder="Name"/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="email" placeholder="Email"/>
                                                </div>
                                                <div className="col-sm-12">
                                                    <textarea placeholder="Review"></textarea>
                                                </div>
                                                <div className="col-sm-12">
                                                    <button>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="product">
                            <div className="section-header">
                                <h1>Related Products</h1>
                            </div>

                            <div className="row align-items-center product-slider product-slider-3">
                            <Carousel responsive={responsive}>
                            <div className="col-lg-11">
                                    <div className="product-item col-lg-11">
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
                                           
                                                <img src={require("./images/product-10.jpg").default} alt="Logo"/>
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
                                    <div className="product-item col-lg-11">
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
                                            <img src={require("./images/product-8.jpg").default} alt="Logo"/>
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
                                    <div className="product-item col-lg-11">
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
                                            <img src={require("./images/product-6.jpg").default} alt="Logo"/>
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
                                    <div className="product-item col-lg-11">
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
                                           
                                                <img src={require("./images/product-4.jpg").default} alt="Logo"/>
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
                                    <div className="product-item col-lg-11">
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
                                          
                                                <img src={require("./images/product-2.jpg").default} alt="Logo"/>
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
                    {/* <!-- Side Bar Start --> */}
                    <div className="col-lg-4 sidebar">
                        <div className="sidebar-widget category">
                            <h2 className="title">Category</h2>
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
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
                        <div className="sidebar-widget widget-slider">
                            <div className="sidebar-slider normal-slider row">
                                                           
                                  <Carousel responsive={responsive2}>
                                       <div className="product-item col-lg-11">
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
                                        <img src={require("./images/product-7.jpg").default} alt="Logo"/>
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
                                <div className="product-item col-lg-11">
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
                                        <img src={require("./images/product-8.jpg").default} alt="Logo"/>
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
                                  <div className="product-item col-lg-11">
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
                                        <img src={require("./images/product-9.jpg").default} alt="Logo"/>
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
                                  </Carousel>
                                
                            </div>
                        </div>                        
                        <div className="sidebar-widget brands">
                            <h2 className="title">Our Brands</h2>
                            <ul>
                                <li><a href="#">Nulla </a><span>(45)</span></li>
                                <li><a href="#">Curabitur </a><span>(34)</span></li>
                                <li><a href="#">Nunc </a><span>(67)</span></li>
                                <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                                <li><a href="#">Fusce </a><span>(89)</span></li>
                                <li><a href="#">Sagittis</a><span>(28)</span></li>
                            </ul>
                        </div>                        
                        <div className="sidebar-widget tag">
                            <h2 className="title">Tags Cloud</h2>
                            <a href="#">Lorem ipsum</a>
                            <a href="#">Vivamus</a>
                            <a href="#">Phasellus</a>
                            <a href="#">pulvinar</a>
                            <a href="#">Curabitur</a>
                            <a href="#">Fusce</a>
                            <a href="#">Sem quis</a>
                            <a href="#">Mollis metus</a>
                            <a href="#">Sit amet</a>
                            <a href="#">Vel posuere</a>
                            <a href="#">orci luctus</a>
                            <a href="#">Nam lorem</a>
                        </div>
                    </div>
                    {/* <!-- Side Bar End -->*/}
                </div>
            </div>
        </div>
        {/* <!-- Product Detail End --> */}        
        {/* <!-- Brand Start --> */}
        <div className="brand">
            <div className="container-fluid">
                <div className="brand-slider">
                <Carousel responsive={responsive1}>
                <div className="brand-item"><img src={require("./images/brand-1.png").default} /> </div>
                        <div className="brand-item"><img src={require("./images/brand-2.png").default} /></div>
                        <div className="brand-item"><img src={require("./images/brand-3.png").default} /></div>
                        <div className="brand-item"><img src={require("./images/brand-4.png").default} /></div>
                        <div className="brand-item"><img src={require("./images/brand-5.png").default} /></div>
                        <div className="brand-item"><img src={require("./images/brand-6.png").default} /></div>	                
</Carousel></div>
            </div>
        </div>
        {/* <!-- Brand End --> */}        
          {/* Footer start */}
          <Footer/>
          {/* Footer End */}
        </>
    )
}
export default Singleproduct
