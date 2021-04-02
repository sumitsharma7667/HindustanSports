import react from "react"
import React, { } from "react"
import Header from "./Header"
const Profile = () => {
    return (
        <React.Fragment>
             <Header/>
            <div className="container card">
                <div className="mt-2">
                    <h4>Personal Information</h4>
                </div>
                <form className="profielForm ">
                <div className="row">
                    <div className="col-6">
                       <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">First name</label>
                            </div>
                            </div>
                    <div className="col-6">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Last name</label>
                            </div>
                     </div>
                    </div>
                     <div className="row">
                    <div className="col-6">
                       <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email Address</label>
                            </div>
                            </div>
                    <div className="col-6">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Mobile number</label>
                            </div>
                     </div>
                    </div>
                </form>
                <div className="mt-2">
                    <h4>Manage Address</h4>
                </div>
                 <form className="profielForm ">
                <div className="row">
                    <div className="col-6">
                       <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Name</label>
                            </div>
                            </div>
                    <div className="col-6">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">10-digit mobile number</label>
                            </div>
                     </div>
                    </div>
                     <div className="row">
                    <div className="col-6">
                       <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Pincode</label>
                            </div>
                            </div>
                    <div className="col-6">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Locality</label>
                            </div>
                     </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                       <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                            <label for="floatingTextarea2">Address (Street and Area)</label>
                            </div>
                        </div>
                    </div>
                     <div className="row mt-3">
                    <div className="col-6">
                       <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">City/District/Town</label>
                            </div>
                            </div>
                    <div className="col-6">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">State</label>
                            </div>
                     </div>
                    </div>
                    <div className="row ">
                    <div className="col-6">
                       <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Landmark (Optional)</label>
                            </div>
                            </div>
                    <div className="col-6">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Alternate Phone (Optional) </label>
                            </div>
                     </div>
                    </div>
                    <div className="row">
                         <div className="col-6">
                        <button className="btn btn-primary">Save</button>
                        </div>
                        </div>
                </form>
            </div>
        </React.Fragment>
    )
}
export default Profile