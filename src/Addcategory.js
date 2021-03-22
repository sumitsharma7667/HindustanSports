import React,{useState,useEffect} from "react"
import firebaseDb from "./firebase"
import {storage} from "./firebase"
const Addcategory = () => {
const[name,Setname]=useState()
const[image,Setimage]=useState([])
const[description,setdescription]=useState()
// const [imageurl,setimageurl]=useState()
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
    firebaseDb.child("Catogery").push(
       obj
        , err => {
            if (err) {
                console.log(err)
            }
        }
    )
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
                            <button type="submit" class="btn btn-primary" onClick={()=>{adddata()}}>Submit</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </>
)
}
export default Addcategory