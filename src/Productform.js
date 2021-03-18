
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./style.css"
const ProductForm = () => {
    useEffect(() => {
    }, [])

    return (
        <>
            <form>
                <div class="container formContaineP">
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
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </>
)
}
export default ProductForm;