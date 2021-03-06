import React,{useState,useEffect} from "react"
import firebaseDb from "./firebase"
import {storage} from "./firebase"
import DataTable from '@bit/adeoy.utils.data-table';
const Addcategory = () => {
const[name,Setname]=useState()
const[image,Setimage]=useState([])
const[description,setdescription]=useState()
const[category,setcategory]=useState([])
// const [imageurl,setimageurl]=useState()
var imageurl=[]
useEffect(()=>{
getdata()
},[])
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
const getdata = () => {
    firebaseDb.child("Catogery").on("value", function (onSnapshot) {
        let tempdata = []
        onSnapshot.forEach(item => {
        tempdata.push({ data:item.val(),key:item.key})
        })
        setcategory(tempdata)
    })
}

const adddata = () => {
    //e.preventDefault()
var obj={
name:name,
description:description,
image:imageurl
    }
    firebaseDb.child("Catogery").push(
       obj
        , err => {
            if (err) {
                console.log(err)
            }
        }
    )
}
const tabledata = [];
{
    category.map((item, index) => {
        tabledata.push({ "sr_no": index + 1,"name":item.data.name, "description": item.data.description, "action": <p><button className="btn btn-secondary mr-2" onClick={() => this.editFoodObject(item)}><i class="fas fa-pencil-alt"></i></button><button className="btn btn-danger" onClick={() => deleteCategory(item.key)}><i className="fa fa-trash" aria-hidden="true" ></i></button> </p> })
    })
}
const columns = [
    { title: "SR NO", data: "sr_no" }, 
    { title: "Image", data: "image" },
    { title: 'Name', data: "name" },
    { title: 'Description', format: (row) => <em>{row.description}</em> },   
    { title: "Action", data: "action" },
];
const deleteCategory=(id)=>{
    firebaseDb.child("Catogery/"+id).remove()
     
  }
    return (
        <>
            <div class="container">
                <div class="card mt-3 p-3">
                    <div class="row">
                        <div class="col-md-12">
                             <label>Category Name</label>
                                <input type="text" class="form-control" id="categoryName" name="categoryName" onChange={(e)=>{Setname(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                               <label>Category Description</label>
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setdescription(e.target.value)}}></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                              <label class="custom-file-label mt-3 p-2" for="customFile">Choose file</label>
                                <input type="file" multiple class="custom-file-input"  onChange={(e)=>{imagedata(e)}}  />   
                        </div>
                        <div class="row">
                        <div class="col-md-12 ProductSubmitBtn">
                            <a class="btn btn-primary" onClick={()=>{adddata()}}>Submit</a>
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
export default Addcategory