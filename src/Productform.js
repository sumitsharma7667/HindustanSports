
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css"
import firebaseDb from "./firebase"
import { storage } from "./firebase"
import DataTable from '@bit/adeoy.utils.data-table';
var imageurl = []
const ProductForm = () => {
    const [data, setdata] = useState([])
    const [name, Setname] = useState()
    const [image, Setimage] = useState([])
    const [description, setdescription] = useState()
    const [category, setcategory] = useState([])
    const[brands,setbrands]=useState([])
    const [categoryid, setcategoryid] = useState()
    const [quentitiy, setquentitiy] = useState()
    const [regularprice, setregularprice] = useState()
    const [discountprice, setdiscountprice] = useState()
    const [saleprice, setsaleprice] = useState()
    useEffect(() => {
        getdata()
        getCategory()
        getBrands()
    },[])
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
    const getBrands = () => {
        firebaseDb.child("Brands").on("value", function (onSnapshot) {
            let tempdata = []
            onSnapshot.forEach(item => {
            tempdata.push({ data: item.val(), key: item.key })
            })
            setbrands(tempdata)
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
    const tabledata = [];
    {
        data.map((item, index) => {

            tabledata.push({ "sr_no": index + 1,"name": item.name, "description": item.description, "action": <p><button className="btn btn-secondary mr-2" onClick={() => this.editFoodObject(item)}><i class="fas fa-pencil-alt"></i></button><button className="btn btn-danger" onClick={() => this.deleteFood(item._id)}><i className="fa fa-trash" aria-hidden="true" ></i></button> </p> })

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
            <form>
                <div class="container formContaineP">
                    <div class="card p-3 form-group">
                        <div class="row">
                            <div class="col-md-4">
                                <label>Product Name</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { Setname(e.target.value) }} />
                            </div>
                           
                            <div class = "col-md-4" >
                                <label > Product Discount Price </label>
                                <input type="text"
                            class = "form-control"
                            id = "productName"
                            name = "productName"
                            onChange = {
                                (e) => {
                                    setdiscountprice(e.target.value)
                                }
                            }
                                /> </div>
                             <div class = "col-md-4" >
                                 <label > Product Quantity </label> <input type = "text" class = "form-control"
                             id = "productName"
                             name = "productName"
                             onChange = {
                                 (e) => {
                                     setquentitiy(e.target.value)
                                 }
                             }
                             />
                              </div>
                        </div>
                         <div class = "row mt-4 mb-3" >
                             <div class = "col-md-4 custom-file" >
                             <input type = "file"
                         multiple class = "custom-file-input form-control"
                         id = "customFile"
                         onChange = {
                             (e) => {
                                 imagedata(e)
                             }
                         }
                         /> </div>
                          <div class = "col-md-4" >
                             
                             < select class = "DropdownSele form-control"
                             onChange = {
                                 (e) => {
                                     setcategoryid(e.target.value)
                                 }
                             } >
                             
                             <option > Choose Brands </option> {
                         brands.map((el, ind) => {
                             return ( < option value = {
                                 el.key
                             } > {
                                 el.data.name
                             } </option>)
                         })
                         } 
                         </select>  
                         </div> 
                         <div class = "col-md-4" >
                             < select class = "DropdownSele form-control"
                             onChange = {
                                 (e) => {
                                     setcategoryid(e.target.value)
                                 }
                             } >
                             <option > Choose Category </option> {
                         category.map((el, ind) => {
                             return ( < option value = {
                                 el.key
                             } > {
                                 el.data.name
                             } </option>)
                         })
                         }
                          </select>  
                         </div> 
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label>Product Regular Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { setregularprice(e.target.value) }} />
                            </div>
                            <div class="col-md-4">
                                <label>Product Sale Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" onChange={(e) => { setsaleprice(e.target.value) }} />
                            </div>
                             < div class = "col-md-4" >
                                 <label > Product Description </label> <textarea class = "form-control"
                             id = "exampleFormControlTextarea1"
                             rows = "3"
                             onChange = {
                                     (e) => {
                                         setdescription(e.target.value)
                                     }
                                 } > </textarea>  
                                 </div>
                        </div>
                       
                        <div class="row mt-3">
                            <div class="col-md-12 ProductSubmitBtn">
                             <a class="btn btn-primary" onClick={()=>{adddata()}}>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row">
                <div class="card mt-4 p-4">
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
                </div>
        </>
    )
}
export default ProductForm;