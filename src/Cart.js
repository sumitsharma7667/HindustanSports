import React, { useState, useEffect } from "react"
import firebaseDb from "./firebase"
var isorder=[]
const Cart = (props) => {
    useEffect(() => {
    getdata(props.match.params.id)
    getcartdata()
    }, [])
    const [productkey,setproductkey]=useState()
    const [data, setdata] = useState("") 
    const [quentity, Setquentity] = useState(1)
    const [order1, Setorder1] = useState([]) 
    const [cartid,setcartid]=useState()  
    const getdata = async (id) => {
        await firebaseDb.child("Products/"+id).on("value", function (onSnapshot) {
        setdata(onSnapshot.val())
        setproductkey(onSnapshot.key)     
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
        if (quentity !== 0) {
            var merged = false
            var newItemObj = {
                "productid":productid,
                "name": name,                
                "image": image,
                "quantity": quentity,               
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
    if (data.description !== undefined)
     {
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
                                            <li>Cart <i className="fas fa-shopping-cart"></i></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="card sectCard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="dropdown">
                                    <span className="dropdown__btn">Categories</span>
                                    <a href="#" className="dropdown__link ">Shoes</a>
                                    <a href="#" className="dropdown__link ">Shoes</a>
                                    <a href="#" className="dropdown__link ">Shoes</a>
                                    <a href="#" className="dropdown__link ">Shoes</a>
                                    <a href="#" className="dropdown__link ">Shoes</a>
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
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <div className="col-4">
                                                <i className="fab fa-facebook"></i>
                                            </div>
                                            <div className="col-4">
                                                <i className="fab fa-instagram"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="search">
                                    <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                                    <button type="submit" className="searchButton">
                                        <i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-3">
                    <div className="container border conatinHei">
                        <div className="row">
                            <div className="col-2 firstsecimg">
                                {data.image.map((el,ind)=>{
                                    return(
                                        <div className="card colSmcard">
                                        <img src={data.image[ind]} className="SixColImg" />
                                    </div>
                                    )
                                })}
                               
                            </div>
                            <div className="col-6 border-right firstSecR">
                                {/* <img src={require("./images/Adishoe.png").default} className="SixColImg" /> */}
                                <img src={data.image[0]} className="SixColImg" />

                            </div>
                            <div className="col-4 border">
                                <div className="row lastcolP ">
                                    <div className="col-3 ColContent colthreec">
                                        <h3>{data.name} </h3>
                                        <p>football boots</p>
                                    </div>
                                    <div className="col-3 ColContent">
                                        <label>Quantity: </label>
                                        <select className="selectValue">
                                            <option>{data.quentitiy}</option>
                                        </select>
                                    </div>
                                    <div className="col-3 ColContent thirdSecC">
                                        <h5>M.R.P.: <span>{data.saleprice}</span></h5>
                                        <h5>Price: <span>{data.regularprice}</span></h5>
                                        <h5>You save {data.discountprice}(17%)</h5>
                                        <p>Inclusive of all taxes</p>
                                        <label>Size : </label>
                                        <select className="selectValue">
                                        </select>
                                    </div>
                                    <div className="col-3 ColContent">
                                        <button className="btn btn-primary"> <i className="fas fa-shopping-cart"></i>Add to wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <button className="btn btn-primary" onClick={()=>{cartfunction(productkey,data.name,data.image,data.saleprice)}}>
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
                        <hr />
                        <div className="row">
                            <div className="col-6 card">
                                <div className="card-body">
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Package Dimension: </h4>
                                        <h4 className="itemDescrip" >35.1*23.1*12.7 cm</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Date First Available: </h4>
                                        <h4 className="itemDescrip">19 February 2020</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Menufacturer: </h4>
                                        <h4 className="itemDescrip">Adidas</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">ASIN: </h4>
                                        <h4 className="itemDescrip">B094ZJKLKR</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Item Model Number: </h4>
                                        <h4 className="itemDescrip">FBHKS-123</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Country Origin: </h4>
                                        <h4 className="itemDescrip">Combodia</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Department: </h4>
                                        <h4 className="itemDescrip">Mens</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Item Wieght: </h4>
                                        <h4 className="itemDescrip">800 g</h4>
                                    </div>
                                    <div className="productDetails">
                                        <h4 className="itemTitle">Genric Name: </h4>
                                        <h4 className="itemDescrip">Football Shoes</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 card">
                                <div className="card-body">
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="headCat mt-3"><h4>Recently viewed</h4></div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <div className="card cardPrice">
                                <div className="imgbx">
                                    <img src={require("./images/207546-200.png").default} className="" />
                                    {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                                </div>
                                <div className="contentBx">
                                    <h3>lethered Basketball</h3>
                                    <h2 className="price">$20.<small>99</small></h2>
                                    <a href="#" className="buyNow">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card cardPrice">
                                <div className="imgbx">
                                    <img src={require("./images/207546-200.png").default} className="" />
                                    {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                                </div>
                                <div className="contentBx">
                                    <h3>lethered Basketball</h3>
                                    <h2 className="price">$20.<small>99</small></h2>
                                    <a href="#" className="buyNow">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card cardPrice">
                                <div className="imgbx">
                                    <img src={require("./images/207546-200.png").default} className="" />
                                    {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                                </div>
                                <div className="contentBx">
                                    <h3>lethered Basketball</h3>
                                    <h2 className="price">$20.<small>99</small></h2>
                                    <a href="#" className="buyNow">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card cardPrice">
                                <div className="imgbx">
                                    <img src={require("./images/207546-200.png").default} className="" />
                                    {/* <img src="./BX7E-02E_High_Large_TOP_2000x.png" style="width: 300px;" alt=""> */}
                                </div>
                                <div className="contentBx">
                                    <h3>lethered Basketball</h3>
                                    <h2 className="price">$20.<small>99</small></h2>
                                    <a href="#" className="buyNow">Buy Now</a>
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
                                    <i className="fab fa-twitter iCoNSS"></i>
                                    <i className="fab fa-facebook iCoNSS"></i>
                                    <i className="fab fa-instagram iCoNSS"></i>
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
                                        <img src={require("./images/image-9.png").default} />
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
                                        <img src={require("./images/image-13.png").default} />
                                    </div>
                                    <div className="col-3">
                                        <img src={require("./images/image-10.png").default} />
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
export default Cart