import React, { useState, useEffect } from "react";
import firebaseDb from "./firebase"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom";
const Addcart = () => {
    var totalamount=0    
    useEffect(() => {
        getcartdata()
    }, [])
    const [data, setData] = useState([])
    const [cartid, setcartid] = useState()
    const getcartdata = () => {
        firebaseDb.child("Cart").on("value", function (onSnapshot) {
            let tempdata = []
            onSnapshot.forEach(item => {
                if (item.val().userid == "1234") {
                    tempdata.push(item.val())
                    setcartid(item.key)                    
                }                
            })
            setData(tempdata)
        })
    }
        return (
    <>           
             {/* Header start */}
          <Header/>
          {/* Header End */}
        
        {/* <!-- Bottom Bar Start --> */}
        <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <div class="logo">
                            <a href="index.html">                        
                                <img src={require("./images/logo.png").default} />
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="search">
                            <input type="text" placeholder="Search"/>
                            <button><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="user">
                            <a href="wishlist.html" class="btn wishlist">
                                <i class="fa fa-heart"></i>
                                <span>(0)</span>
                            </a>
                            <a href="cart.html" class="btn cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Bottom Bar End --> */}
        
        {/* <!-- Breadcrumb Start --> */}
        <div class="breadcrumb-wrap">
            <div class="container-fluid">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Products</a></li>
                    <li class="breadcrumb-item active">Cart</li>
                </ul>
            </div>
        </div>
        {/* <!-- Breadcrumb End --> */}
        
        {/* <!-- Cart Start --> */}
        <div class="cart-page">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-page-inner">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody class="align-middle">
                                    {data!==undefined?                                    
                                   
                                   data.map((el, ind) => {  
                                       return( 
                                        el.order.map((item,index)=>{
                                            totalamount=JSON.parse(item.price)+totalamount
                                            return(
                                         
                                                <tr>
                                                <td>
                                                    <div class="img">
                                                        <a href="#">
                                                        <img src={item.image} />
                                                        </a>
                                                        <p>{item.name}</p>
                                                    </div>
                                                </td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <div class="qty">
                                                        <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                        <input type="text" value={item.quantity}/>
                                                        <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                    </div>
                                                </td>
                                                <td>{item.price*item.quantity}</td>
                                                <td><button><i class="fa fa-trash"></i></button></td>
                                            </tr>
                                            )
                                        })  
                                       )                                                               
                                       
                                    })
                                    :
                                    null}                                                                            
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cart-page-inner">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="coupon">
                                        <input type="text" placeholder="Coupon Code"/>
                                        <button>Apply Code</button>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="cart-summary">
                                        <div class="cart-content">
                                            <h1>Cart Summary</h1>
                                            <p>Sub Total<span>{totalamount}</span></p>
                                            <p>Shipping Cost<span>0 </span></p>
                                            <h2>Grand Total<span>{totalamount}</span></h2>
                                        </div>
                                        <div class="cart-btn">
                                            <button>Update Cart</button>
                                            <Link className="btn" to="/checkout">Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          {/* Footer start */}
          <Footer/>
          {/* Footer End */}
</>
)       
// }   
}
export default Addcart


