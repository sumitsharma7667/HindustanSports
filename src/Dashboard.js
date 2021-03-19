import React from 'react';
import Moment from 'moment';
import {Chart} from "react-google-charts";
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
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-card">
                            <h4> Total Orders<span><i class="fas fa-utensils"></i></span></h4>
                            <div>
                                <h2 class="numbers"> { this.state.AllOrders.map((item,index)=>{
                                  if(Moment(item.createdAt).isAfter(Moment().format("01-MM-YYYY"))){
                                  total_orders = parseInt(total_orders)+1
                                  }
                                
                                })}
                               {total_orders} </h2>
                                {/* <h6 class="card-text">Increased by 60%</h6> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-card">
                            <div>
                            <h4> Approved Orders <span><i class="fas fa-check-square"></i></span></h4>
                            </div>
                            <div>
                               <h2 class="numbers"> { this.state.AllOrders.map((item,index)=>{
                                  if(Moment(item.createdAt).isAfter(Moment().format("01-MM-YYYY"))){
                                    if(item.status == "approve"){
                                    total_approve_orders = parseInt(total_approve_orders)+1
                                    }
                                  }
                                
                                })}
                               {total_approve_orders} </h2>
                            </div>
                            {/* <h6 class="card-text">Increased by 60%</h6> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-card">
                             
                            <h4> Rejected Orders<span><i class="fas fa-window-close"></i></span></h4>
                            <h2 class="numbers"> { this.state.AllOrders.map((item,index)=>{
                                  if(Moment(item.createdAt).isAfter(Moment().format("01-MM-YYYY"))){
                                    if(item.status == "reject"){
                                    total_reject_orders = parseInt(total_reject_orders)+1
                                    }
                                  }
                                
                                })}
                               {total_reject_orders} </h2>
                            {/* <h6 class="card-text">Increased by 60%</h6> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="dashboard-card">
                             
                            <h4> Redeemed points<span><i class="fas fa-calculator"></i> </span></h4>
                            <div class="numbers">
                            <h2 class="numbers"> { this.state.AllPoints.map((item,index)=>{
                                  if(Moment(item.createdAt).isAfter(Moment().format("01-MM-YYYY"))){
                                
                                    total_points = parseInt(total_points)+parseFloat(item.points)
                                    
                                  }
                                
                                })}
                               {total_points} </h2>
                            </div>
                            {/* <h6 class="card-text">Increased by 60%</h6> */}
                        </div>
                    </div>
                </div>
                                 
                <div className="row chartRow">
                    <div className="col-lg-7 col-md-12">
                        <div class="card chart-card">
                        <div className={"my-pretty-chart-container"}>
                            <h2 class="chart-head">Daily Orders</h2>
                    <Chart
                      width={'100%'}
                      height={'400px'}
                      chartType="LineChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ['x', 'orders'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                        [12, 10],
                        [13, 23],
                        [14, 17],
                        [15, 18],
                        [16, 9],
                        [17, 11],
                        [18, 27],
                        [19, 33],
                        [20, 40],
                        [21, 32],
                        [22, 35],
                        [23, 10],
                        [24, 23],
                        [25, 17],
                        [26, 18],
                        [27, 9],
                        [28, 11],
                        [29, 27],
                        [30, 33],
                      ]}
                      options={{
                        
                        // backgroundColor:"#e8e8ae",
                        hAxis: {
                          title: 'Time',
                        },
                        vAxis: {
                          title: 'Popularity',
                        },
                      }}
                      rootProps={{ 'data-testid': '1' }}
                    />
      </div>
                        </div>
                        </div>
                    <div className="col-lg-5 col-md-12 piechart">
                        <div class="card chart-card">
                      <h2 class="chart-head">Monthly Reviews</h2>
                    <Chart
  width={'100%'}
  height={'400px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Awesome', 11],
    ['Good', 2],
    ['Bad', 2],
    
  ]}
  options={{
    // Just add this option
    pieHole: 0.4,
    // backgroundColor:"#e8e8ae"
  }}
  rootProps={{ 'data-testid': '3' }}
/>
                    </div>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col-md-12"> 
                        <h2>Recent Orders</h2>
                        <div class="card table-card">
                        <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>      
                                        <th scope="col">Customer Name </th>     
                                        <th scope="col">Order Number</th>     
                                        <th scope="col">Mobile Number</th>     
                                        <th scope="col">Order Type</th>     
                                        <th scope="col">Price</th> 
                                        <th scope="col">Order Status</th>
                                    </tr> 
                                </thead>  
                                <tbody>   
                                    <tr>            
                                        <th scope="row">1</th>
                                              <td>Mark</td>     
                                        <td>Otto</td>           
                                        <td>@mdo</td>       
                                        <td>Larry</td>     
                                        <td>the Bird</td>
                                         <td>the Bird</td>
                                    </tr>    
                                    <tr>     
                                        <th scope="row">2</th>      
                                        <td>Jacob</td>     
                                        <td>Thornton</td>                                        
                                        <td>@fat</td>       
                                        <td>Larry</td>     
                                        <td>the Bird</td>    
                                         <td>the Bird</td>
                                    </tr>
                                    <tr>    
                                        <th scope="row">3</th>     
                                        <td>Larry</td>      
                                        <td>the Bird</td>       
                                        <td>@twitter</td>      
                                        <td>Larry</td>      
                                        <td>the Bird</td> 
                                         <td>the Bird</td>
                                    </tr>    
                                    <tr>                                             
                                        <th scope="row">4</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>  
                                         <td>the Bird</td>
                                     </tr>
                                     <tr>
                                         <th scope="row">5</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                             <td>@twitter</td>
                                             <td>Larry</td>
                                        <td>the Bird</td>  
                                         <td>the Bird</td>
                                    </tr>
                                    <tr>
                                         <th scope="row">5</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                             <td>@twitter</td>
                                             <td>Larry</td>
                                        <td>the Bird</td>
                                         <td>the Bird</td>
     
                                        </tr>
                                        </tbody>
                                        </table>
                                            </div>
                                        </div>
                                        </div>
                <div class="row">
                    <div class="col-md-12">
                        <h2>Approved Orders</h2>
                        <div class="card table-card">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customer Name </th>
      <th scope="col">Order Number</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Order Type</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Order Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
              <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
            <td>@mdo</td>
        <td>Larry</td>
      <td>the Bird</td>
 <td>the Bird</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
        <td>@fat</td>
         <td>Larry</td>
      <td>the Bird</td>
      <td>the Bird</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
        <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>the Bird</td>
    </tr>
     <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
        <td>@twitter</td>
         <td>Larry</td>
      <td>the Bird</td>
      <td>the Bird</td>
         </tr>
         <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
     <td>@twitter</td>
        <td>Larry</td>
      <td>the Bird</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
                    </div>
</div>
                </div>
                 <div class="row">
                    <div class="col-md-12">
                        <h2>Rejected Orders</h2>
                        <div class="card table-card">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customer Name </th>
      <th scope="col">Order Number</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Order Type</th>
    <th scope="col">Price</th>
     <th scope="col">Order Status</th>
    <th scope="col">Justification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
              <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
            <td>@mdo</td>
                                        <td>Larry</td>
                                        <td>Larry</td>
      <td>the Bird</td>
      <td>the Bird</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
        <td>@fat</td>
         <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Larry</td>
      <td>the Bird</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
        <td>@twitter</td>
      <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Larry</td>
      <td>the Bird</td>
     
    </tr>
     <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
        <td>@twitter</td>
         <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Larry</td>
      <td>the Bird</td>
         </tr>
         <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
     <td>@twitter</td>
        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
                    </div>
</div>
                </div> */}
            </>
        
           
        )
    }
}
export default Dashboard;