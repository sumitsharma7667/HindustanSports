
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css"
import firebaseDb from "./firebase"
import storage from "./firebase"
const ProductForm = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        firebaseDb.child("Products").on("value",function(onSnapshot){   
            let tempdata = []
            onSnapshot.forEach(item => {               
            tempdata.push(item.val())
            })
            setdata(tempdata)
        })  
    }
    const adddata = () => {
        //e.preventDefault()
        firebaseDb.child("Products").push(
            {
                name: "Vineet",
                lastname: "Sharma",
                Roll: 4
            }
            , err => {
                if (err) {
                    console.log(err)
                }
            }
        )
    }

    return (
        <>
            <form>
                <div class="container formContaineP">
                    {
                        data.map((el, ind) => {
                            return (
                                <h1>{el.name}ff</h1>
                            )
                        })
                    }
                    <div class="card mt-2 p-3 form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Name</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                            <div class="col-md-6">
                                <label>Product Category</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Brand</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                            <div class="col-md-6">
                                <label>Product Quantity</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Regular Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                            <div class="col-md-6">
                                <label>Product Sale Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Product Discount Price</label>
                                <input type="text" class="form-control" id="productName" name="productName" />
                            </div>
                            <div class="col-md-6 custom-file">
                                <label class="custom-file-label mt-3 p-2" for="customFile">Choose file</label>
                                <input type="file" class="custom-file-input" id="customFile" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <label>Product Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-md-6 ProductSubmitBtn">
                                <a class="btn btn-primary" onClick={() =>{adddata()}}>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ProductForm;