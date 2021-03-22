import React,{useState,useEffect} from "react"
import firebaseDb from "./firebase"
import { storage } from "./firebase"
import DataTable from '@bit/adeoy.utils.data-table';
const Addbrand = () => {
    useEffect(()=>{
    getBrands()
    })
const[name,Setname]=useState()
const[image,Setimage]=useState([])
const[description,setdescription]=useState()
const[brands,setbrands]=useState([])
var imageurl=[]
const imagedata=(e)=>{
    for (var i = 0; i < e.target.files.length; i++) {
        var imagefile = e.target.files[i];
        HandleUpload(imagefile);      
    }
}
const HandleUpload=(imagefile)=>{
const uploadTask=storage.ref(`images/${imagefile.name}`).put(imagefile)
uploadTask.on("state_changed",
snapshot=>{},
error=>{
    console.log(error)
},
()=>{
    storage.ref("images")
    .child(imagefile.name)
    .getDownloadURL()
    .then(async(url)=>{
    await imageurl.push(url)               
    })
    .then(()=>{
    //adddata()
    })
})
}
const adddata = () => {
    //e.preventDefault()
var obj={
name:name,
description:description,
image:imageurl
    }
    firebaseDb.child("Brands").push(
       obj
        , err => {
            if (err) {
                console.log(err)
            }
        }
    )
}
const getBrands = () => {
    firebaseDb.child("Brands").on("value", function (onSnapshot) {
        let tempdata = []
        onSnapshot.forEach(item => {
        tempdata.push({ data: item.val(), key: item.key })
        })
        setbrands(tempdata)
    })
}
const tabledata = [];
{
    brands.map((item, index) => {
        tabledata.push({ "sr_no": index + 1,"name":item.name, "description": item.description, "action": <p><button className="btn btn-secondary mr-2" onClick={() => this.editFoodObject(item)}><i class="fas fa-pencil-alt"></i></button><button className="btn btn-danger" onClick={() => this.deleteFood(item._id)}><i className="fa fa-trash" aria-hidden="true" ></i></button> </p> })
    })
}
const columns = [
    { title: "SR NO", data: "sr_no" }, 
    { title: "Image", data: "image" },
    { title: 'Name', data: "name" },
    { title: 'Description', format: (row) => <em>{row.description}</em> },   
    { title: "Action", data: "action" },
];
    return (
        <>
            <div class="container">
                <div class="card mt-3 p-3">
                    <div class="row">
                        <div class="col-md-12">
                             <label>Brand Name</label>
                                <input type="text" class="form-control" id="categoryName" name="categoryName" onChange={(e)=>{Setname(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                               <label>Brand Description</label>
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setdescription(e.target.value)}}></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                              <label class="custom-file-label mt-3 p-2" for="customFile">Choose file</label>
                                <input type="file" multiple class="custom-file-input" id="customFile" onChange={(e)=>{imagedata(e)}} />   
                        </div>
                        <div class="row">
                        <div class="col-md-12 ProductSubmitBtn">
                            <a  class="btn btn-primary" onClick={()=>{adddata()}}>Submit</a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-12 tableDiv addfooftbale">
                        <DataTable
                            data={tabledata}
                            columns={columns}
                            striped={true}
                            hover={true}
                            responsive={true}
                            // onClickRow={click}
                        />
                    </div>
                </div>
            </>
        
    )
}
export default Addbrand