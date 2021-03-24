
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css"
import firebaseDb from "./firebase"
import { storage } from "./firebase"
import DataTable from '@bit/adeoy.utils.data-table';
var imageurl = []
const ProductForm = () => {
    const [data, setdata] = useState([])
    const [name, Setname] = useState("")
    const [image, Setimage] = useState([])
    const [description, setdescription] = useState()
    const [category, setcategory] = useState([])
    const [brands,setbrands]=useState([])
    const [categoryid, setcategoryid]=useState()
    const [brandid, setbrandid]=useState()
    const [quentitiy, setquentitiy]=useState()
    const [regularprice, setregularprice]=useState()
    const [discountprice, setdiscountprice]=useState()
    const [saleprice, setsaleprice]=useState()
    const[productid,setproductid]=useState()
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
        imageurl=[]
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
            brandid:brandid,
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
            tempdata.push({ data:item.val(),key:item.key})
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
            tempdata.push({ data: item.val(), key: item.key })
            })
        setdata(tempdata)
        })
    }
    const deleteproduct=(id)=>{
    firebaseDb.child("Products/"+id).remove()       
    }
    const updateProduct=()=>{
       var  obj={
        name:name,
        categoryid:categoryid,
        brandid:brandid,
        description:description,
        image:imageurl,
        regularprice:regularprice,
        saleprice:saleprice,
        discountprice:discountprice,
        quentitiy:quentitiy
       }
        firebaseDb.child("Products/"+productid).update(obj) 
    }
    const editProduct=(data,key)=>{   
        setproductid(key)    
        Setname(data.name)
        setdescription(data.description)    
        imageurl=data.image
        setcategoryid(data.categoryid)
        setbrandid(data.brandid)
        setregularprice(data.regularprice)
        setsaleprice(data.saleprice)
        setdiscountprice(data.discountprice)
        setquentitiy(data.quentitiy)
    }
    const tabledata = [];
    {
    data.map((item, index) => {
    tabledata.push({ "sr_no": index + 1,"name": item.data.name,"quentity":item.data.quentitiy, "description": item.data.description, "action": <p><button className="btn btn-secondary mr-2" onClick={() =>editProduct(item.data,item.key)}><i class="fas fa-pencil-alt"></i></button><button className="btn btn-danger" onClick={() =>deleteproduct(item.key)}><i className="fa fa-trash" aria-hidden="true" ></i></button> </p> })
    })
    }

    const columns = [
        { title: "SR NO", data: "sr_no" },        
        { title: 'Name', data: "name" },
        { title: "Quentity",data:"quentity"},
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
                                <input type="text" class="form-control" id="productName" name="productName" defaultValue={name} onChange={(e) => { Setname(e.target.value) }} />
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
                                <input type="text" class="form-control" defaultValue={regularprice} id="productName" name="productName" onChange={(e) => { setregularprice(e.target.value) }} />
                            </div>
                            <div class="col-md-4">
                                <label>Product Sale Price</label>
                                <input type="text" class="form-control" defaultValue={saleprice} id="productName" name="productName" onChange={(e) => { setsaleprice(e.target.value) }} />
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
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Discount Price</label>
                                <input type="text" class="form-control" defaultValue={discountprice} id="productName" name="productName" onChange={(e) => { setdiscountprice(e.target.value) }} />
                            </div>
                            <div class="col-md-6 custom-file">
                                <label class="custom-file-label mt-3 p-2" for="customFile" >Choose file</label>
                                <input type="file" multiple class="custom-file-input" id="customFile"  onChange={(e)=>{imagedata(e)}}/>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label>Product Description</label>
                                <textarea class="form-control" defaultValue={description} id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setdescription(e.target.value) }} ></textarea>
                            </div>
                            <div class="col-md-3 ProductSubmitBtn">
                             <a class="btn btn-primary" onClick={()=>{adddata()}}>Submit</a>
                            </div>
                            <div class="col-md-3 ProductSubmitBtn">
                             <a class="btn btn-danger" onClick={()=>{updateProduct()}}>Update</a>
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