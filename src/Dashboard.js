import React from 'react';
import Moment from 'moment';
import {Chart} from "react-google-charts";
import "./style.css"
var total_orders = 0
var total_approve_orders = 0
var total_reject_orders = 0
var total_points  = 0
class Dashboard extends React.Component{
  constructor(props){
  super(props)
  this.state={
    AllOrders:[],
    AllPoints:[]
  }
  }
  componentDidMount(){
  
    this.getOrders()
    this.getPoints()
  }
  getOrders = () => {
    fetch("http://144.91.110.221:4600/getOrders")
        .then(res => res.json())
        .then(async(data) => {
            await console.log(data)
                await this.setState({AllOrders: data,FilterOrders:data})
        })
        .then(err => console.log(err))
}
getPoints = () => {
  fetch("http://144.91.110.221:4600/getPoints")
      .then(res => res.json())
      .then(async(data) => {
          await console.log(data)
          await this.setState({AllPoints:data})
      })
      .then(err => console.log(err))
}
    render(){
      total_orders =0
      total_approve_orders = 0
      total_reject_orders = 0
      total_points =  0
        return(
            <>
                {/* <div class="page-header">
                    <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white mr-2">
                  <i class="fas fa-home"></i>
                </span> Dashboard
              </h3>
            </div> */}
            <div class="container dashboardConttainer">
              <div class="row mt-4">
                <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIcon">
                          <span class="material-icons ">add_task</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Total Orders</h6>
                        <h2 class="orderCount">130</h2>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
               <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIconTw">
                          <span class="material-icons ">store</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Total Stock</h6>
                        <h2 class="orderCount">130</h2>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
               <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIconTh">
                          <span class="material-icons ">pending</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Pending Orders</h6>
                        <h2 class="orderCount">130</h2>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIconFr">
                          <span class="material-icons ">reorder</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Reordered</h6>
                        <h2 class="orderCount">130</h2>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
                </div>
            </div>
            {/* Second section */}
             <div class="container dashboardConttainer">
              <div class="row mt-4">
                <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIcon">
                          <span class="material-icons ">add_task</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Total Orders</h6>
                        <h3 class="orderCount">130</h3>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
               <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIconTw">
                          <span class="material-icons ">store</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Total Stock</h6>
                        <h3 class="orderCount">130</h3>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
               <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIconTh">
                          <span class="material-icons ">pending</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Pending Orders</h6>
                        <h3 class="orderCount">130</h3>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                   <div class="card cardSec">
                    <div class="row">
                      <div class="col-5">
                        <div class="card taskIconFr">
                          <span class="material-icons ">reorder</span>
                        </div>
                      </div>
                      <div class="col-7 cardContent">
                        <h6 class="headCont">Reordered</h6>
                        <h3 class="orderCount">130</h3>
                      </div>
                    </div>
                    <div class="cardfooter">
                    </div>
                  </div>
                </div>
                </div>
              </div>
            
          <section>
            <div class="container dashboardConttainer">
              <div class="row mt-3">
                  <div class="col-6 Chartcard card">
                  </div>
                  <div class="col-3 ChartcardTwo card">
                  </div>
                   <div class="col-3 ChartcardTh card">
                    </div>
              </div>
              </div>
              </section>
            {/* Chart section */}
            <section class="ChartSecTH mt-3">
              <div class="container">
                <div class="row">
                  <div class="col-12 card">
                    <div id="chartdiv"></div>
                  </div>
                </div>
              </div>
              </section>
            </>
        
           
        )
    }
}
export default Dashboard;