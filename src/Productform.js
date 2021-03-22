
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css"
import firebaseDb from "./firebase"
import { storage } from "./firebase"
var imageurl = []
const ProductForm = () => {
    const [data, setdata] = useState([])
    const [name, Setname] = useState()
    const [image, Setimage] = useState([])
    const [description, setdescription] = useState()
    const [category, setcategory] = useState([])
    const [categoryid, setcategoryid] = useState()
    const [quentitiy, setquentitiy] = useState()
    const [regularprice, setregularprice] = useState()
    const [discountprice, setdiscountprice] = useState()
    const [saleprice, setsaleprice] = useState()
    useEffect(() => {
        getdata()
        getCategory()
    }, [])
  
    // const [imageurl,setimageurl]=useState()
  
  
    const imagedata = (e) => {
        for (var i = 0; i < e.target.files.length; i++) {
            var imagefile = e.target.files[i];
            console.log(imagefile)
            HandleUpload(imagefile);
        }
    }
    const HandleUpload = (imagefile) => {
        const uploadTask = storage.ref(`images/${imagefile.name}`).put(imagefile)
        uploadTask.on("state_changed",
            snapshot => { },
            error => {
                console.log(error)
            },
            () => {
                storage.ref("images")
                    .child(imagefile.name)
                    .getDownloadURL()
                    .then(async (url) => {
                    await imageurl.push(url)
                    })
                  
            }
        )
    }
    const adddata = () => {
        //e.preventDefault()
        console.log(imageurl,"img url here")
        var obj = {
            name: name,
            description: description,
            categoryid: categoryid,
            quentitiy: quentitiy,
            regularprice: regularprice,
            discountprice: discountprice,
            saleprice: saleprice,
            image:imageurl,                      
        }

        firebaseDb.child("Products").push(
            obj
            , err => {
                if (err) {
                    console.log(err)
                }
            }
        )
    }
    const getCategory = () => {
        firebaseDb.child("Catogery").on("value", function (onSnapshot) {
            let tempdata = []
            onSnapshot.forEach(item => {
                tempdata.push({ data: item.val(), key: item.key })
            })
            setcategory(tempdata)
        })
    }
    const getdata = () => {
        firebaseDb.child("Products").on("value", function (onSnapshot) {
            let tempdata = []
            onSnapshot.forEach(item => {
                tempdata.push(item.val())
            })
            setdata(tempdata)
        })
    }
    return (
        <>
            <form>
                <div class="container formContaineP">
                    <div class="card mt-2 p-3 form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Name</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { Setname(e.target.value) }} />
                            </div>
                            <div class="col-md-6">
                                <label>Product Category</label>
                                <select onChange={(e) => { setcategoryid(e.target.value) }}>
                                    {category.map((el, ind) => {
                                        return (
                                            <option value={el.key}>{el.data.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Brand</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                            <div class="col-md-6">
                                <label>Product Quantity</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { setquentitiy(e.target.value) }} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Regular Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { setregularprice(e.target.value) }} />
                            </div>
                            <div class="col-md-6">
                                <label>Product Sale Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { setsaleprice(e.target.value) }} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Discount Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { setdiscountprice(e.target.value) }} />
                            </div>
                            <div class="col-md-6 custom-file">
                                <label class="custom-file-label mt-3 p-2" for="customFile" >Choose file</label>
                                <input type="file" multiple class="custom-file-input" id="customFile"  onChange={(e)=>{imagedata(e)}}/>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label>Product Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setdescription(e.target.value) }} ></textarea>
                            </div>
                            <div class="col-md-6 ProductSubmitBtn">
                             <a class="btn btn-primary" href="#" onClick={() => { adddata() }}>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ProductForm;