import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddPackage = () => {

    const axiosSecure = useAxiosSecure();

    const handleAddPackage = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const spotPhoto = form.spotPhoto.value;
        const tourType = form.tourType.value;
        const tripTitle = form.tripTitle.value;
        const price = form.price.value;
        
        axiosSecure.post( '/packages', {
            spotPhoto,
            tourType,
            tripTitle,
            price
        } )
            .then( res => {
                console.log( res );
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
        })
    }

    return (
        <div>
            <div className="">
                <h1 className="text-3xl font-bold text-center">Add New Package</h1>
                <div className="hero-content ">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAddPackage} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Package Name</span>
                                </label>
                                <input type="text" placeholder="Package Name" className="input input-bordered" required name="tripTitle" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                    <span className="label-text">Select Tour Type</span>
                                </label>
                            <select defaultValue={'Select Tour type'}  className="select select-bordered w-full" name="tourType">
                                <option disabled defaultValue={"default"} >Select Tour type</option>
                                <option>Adventure</option>
                                <option>Beach</option>
                                <option>Nature</option>
                                <option>Ecotourism</option>
                                <option>Historical</option>
                                <option>Cultural</option>
                                <option>River Cruise</option>
                                <option>Hill Station</option>
                            </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" className="input input-bordered" required name="price" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image URL" className="input input-bordered" required name="spotPhoto" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 hover:bg-blue-600 text-white">Add Package</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;