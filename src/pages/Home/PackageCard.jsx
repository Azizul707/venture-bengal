/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaHeart, FaLocationDot } from "react-icons/fa6";
import Swal from 'sweetalert2'


const PackageCard = ( { item } ) => {
    
    const { spotPhoto, tourType, tripTitle, price, _id } = item;


    const handleWishlist = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to Wishlist",
            showConfirmButton: false,
            timer: 1500
          });
    }


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl space-y-5">
                <figure><img className="object-cover h-56 w-full" src={ spotPhoto } alt="Shoes" />
                </figure>
                <div className="card-body space-y-5">
                    <h2 className="card-title bg-base-200 p-2 rounded"><FaLocationDot className="text-[#FE5C24]" /> { tripTitle }</h2>
                    <div className="flex justify-between">
                        <p className="bg-[#FE5C24] max-w-max p-2 text-white rounded font-semibold ">{ tourType } Tour</p>
                        <p className="text-[#FE5C24] text-3xl max-w-max rounded font-bold ">${ price }</p>
                    </div>
                    <Link to={ `/package-details/${ _id }` }>
                        <div className="card-actions w-full">
                            <button className="btn w-full">Package Details</button>
                        </div>
                    </Link>
                </div>
                <div className="absolute left-3">
                    <button onClick={handleWishlist} className="bg-white rounded-full p-2 tooltip" data-tip="Wishlist" ><FaHeart className="text-red-500" /></button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;