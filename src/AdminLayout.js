import React from 'react';
import './Sidebar.css';
import './css/SidebarNav.min.css';
import {Link} from "react-router-dom";
import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
class AdminLayout extends React.Component{
    constructor(props){
        super(props)
        this.state={
            NavHeading:'Dashboard'
        }
    }
    logout =()=>{
        localStorage.setItem('access','')
        window.location.href='/landing'
    }
  render(){
    const { history } = this.props;
    const dataAccess = localStorage.getItem('access')
  return (
  <>
  <div className="row pt-0">
     <div className="col-12">
     <div className="wrapper">
      {dataAccess=="cashier"?            
      <nav id="sidebar">
            <div className="sidebar-header text-center">
            <Link to="/landing">
            <img src={require('./images/logo.png').default} style={{height:"160px"}}/>
            </Link>
            </div>
            <ul className="list-unstyled components">
                {/* <p className="text-center pb-0">تشيزي بايتس</p>
                <p className="text-center border-text">Cheesy Bites</p> */}
                <li>
                    <Link to="/dashboard" onClick={()=>{{this.setState({NavHeading:'Dashboard'})}}}> <i class="fas fa-home"></i> Dashboard</Link>
                </li>
                <li className="">
                <li>
                    <Link to="/AddFood" onClick={()=>{{this.setState({NavHeading:'Food Item'})}}}> <i class="fas fa-stroopwafel"></i> Food Item</Link>
                </li>
                    <a href="#orders" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> <i class="fas fa-utensils"></i> Orders</a>
                    <ul className="collapse list-unstyled" id="orders">
                        <li>
                        <Link to="/Orders" onClick={()=>{{this.setState({NavHeading:'Orders/New Orders'})}}}>New Orders</Link>
                        </li>
                        <li>
                        {/* <Link to="/PendingOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Pending Orders'})}}}>Pending Orders</Link> */}
                        </li>
                        <li>
                        <Link to="/InproccessOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Pending Orders'})}}}>Approved Orders</Link>
                        </li>
                        <li>
                        <Link to="/CompleteOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Complete Orders'})}}}>Rejected Orders</Link>
                        </li>
                        {/* <li>
                        <Link to="/DeliveredOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Delivered Orders'})}}}>Delivered Orders</Link>
                        </li>
                        <li>
                        <Link to="/CancelOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Cancel Orders'})}}}>Cancel Orders</Link>
                        </li> */}
                    </ul>
                </li>
     
                
                <li>
                    <Link to="" onClick={()=>{this.logout()}}> <i class="fas fa-sign-out-alt"></i> Logout</Link>
                </li>
            </ul>
            <ul className="list-unstyled CTAs text-center">
                <li>
                <h6 ><span>  <img src={require('./images/logo.png').default} style={{height:"50px"}}/></span> Powered By GIKS @ 2020</h6>
                </li>
            </ul>
        </nav>
      :
        <nav id="sidebar">
            <div className="sidebar-header text-center">
            <Link to="/landing">
            <img src={require('./images/logo.png').default} style={{height:"160px"}}/>
            </Link>
            </div>
            <ul className="list-unstyled components">
                {/* <p className="text-center pb-0">تشيزي بايتس</p>
                <p className="text-center border-text">Cheesy Bites</p> */}
                <li>
                    <Link to="/dashboard" onClick={()=>{{this.setState({NavHeading:'Dashboard'})}}}> <i class="fas fa-home"></i> Dashboard</Link>
                </li>
                <li className="">
                    <a href="#orders" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> <i class="fas fa-utensils"></i> Orders</a>
                    <ul className="collapse list-unstyled" id="orders">
                        <li>
                        <Link to="/Orders" onClick={()=>{{this.setState({NavHeading:'Orders/New Orders'})}}}>New Orders</Link>
                        </li>
                        <li>
                        {/* <Link to="/PendingOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Pending Orders'})}}}>Pending Orders</Link> */}
                        </li>
                        <li>
                        <Link to="/InproccessOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Pending Orders'})}}}>Approved Orders</Link>
                        </li>
                        <li>
                        <Link to="/CompleteOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Complete Orders'})}}}>Rejected Orders</Link>
                        </li>
                        {/* <li>
                        <Link to="/DeliveredOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Delivered Orders'})}}}>Delivered Orders</Link>
                        </li>
                        <li>
                        <Link to="/CancelOrders" onClick={()=>{{this.setState({NavHeading:'Orders/Cancel Orders'})}}}>Cancel Orders</Link>
                        </li> */}
                    </ul>
                </li>
                <li className="">
                    <a href="#configuration" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> <i class="fas fa-cog"></i> Configuration</a>
                    <ul className="collapse list-unstyled" id="configuration">
                        <li>
                            <Link to="/Category" onClick={()=>{{this.setState({NavHeading:'Configuration/Category'})}}}> Category</Link>
                        </li>
                        <li>
                            <Link to="/Timing" onClick={()=>{{this.setState({NavHeading:'Configuration/Timing & Holidays'})}}}> Timing & Holidays</Link>
                        </li>
                        <li>
                            <Link to="/AddOn" onClick={()=>{{this.setState({NavHeading:'Configuration/AddOn'})}}}> AddOn</Link>
                        </li>
                        <li>
                            <Link to="/Sourceofmeat" onClick={()=>{{this.setState({NavHeading:'Configuration/Source'})}}}> Source Of Meat</Link>
                        </li>
                        <li>
                            <Link to="/RoleRegister" onClick={()=>{{this.setState({NavHeading:'Configuration/User Management'})}}}> User Management</Link>
                        </li>
                        <li>
                            <Link to="/Add" onClick={()=>{{this.setState({NavHeading:'Configuration/Advertisement'})}}}>  Advertisement</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/AddFood" onClick={()=>{{this.setState({NavHeading:'Food Item'})}}}> <i class="fas fa-stroopwafel"></i> Food Item</Link>
                </li>
                <li>
                    <Link to="" onClick={()=>{this.logout()}}> <i class="fas fa-sign-out-alt"></i> Logout</Link>
                </li>
            </ul>
            <ul className="list-unstyled CTAs text-center">
                <li>
                <h6 > Copyrights reserved © 2020-2021 Smart Chip Information Technology Corporation. Kingdom of Saudi Arabia.</h6>
                </li>
            </ul>
        </nav>
  }
        <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h4>{this.state.NavHeading}</h4>
                    <button type="button" id="sidebarCollapse" className="btn btn-success d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    {/* <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button> */}
                </div>
            </nav>
            <React.Fragment>
               {this.props.children}
            </React.Fragment>
        </div>
    </div>
    </div>
  </div>
  
  </>
  );
  }
}
export default AdminLayout;

 
   