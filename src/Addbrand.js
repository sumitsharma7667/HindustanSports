import React from "react"
const Addbrand = () => {
    return (
        <>
            <div class="container">
                <div class="card mt-3 p-3">
                    <div class="row">
                        <div class="col-md-12">
                             <label>Brand Name</label>
                                <input type="text" class="form-control" id="categoryName" name="categoryName" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                               <label>Brand Description</label>
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                              <label class="custom-file-label mt-3 p-2" for="customFile">Choose file</label>
                                <input type="file" class="custom-file-input" id="customFile" />   
                        </div>
                        <div class="row">
                        <div class="col-md-12 ProductSubmitBtn">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </>
        
    )
}
export default Addbrand