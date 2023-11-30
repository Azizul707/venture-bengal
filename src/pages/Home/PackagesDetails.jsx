/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { FaMessage, FaStopwatch, FaTicket, FaTruckPickup } from "react-icons/fa6";
import BookingForm from "../booking/BookingForm";
import ImageGallery from "../../components/ImageGallery";


const PackagesDetails = () => {
    const { id } = useParams();
    
    const axiosPublic = useAxiosPublic();

    const { data: packageDetails = [] } = useQuery( {
        queryKey: [ 'package-details' ],
        queryFn: async () => {
            const res = await axiosPublic.get( `packages/details/${ id }` );
            return res.data;
        },
    } );

    const { spotPhoto, tourType, tripTitle, price, } = packageDetails;


    return (
        <div className="max-w-screen-xl mx-auto">
            <ImageGallery items={packageDetails}></ImageGallery>

            <h1 className="text-3xl font-semibold my-5">{ tripTitle }</h1>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
            </div>

            <span className="text-xl"> 13389 Reviews</span>
            <hr />
            <div className="my-5 md:flex justify-center gap-5 u">
                <div className="w-[60%]">
                    <img className="rounded drop-shadow-md" src={ spotPhoto }
                        alt="" />

                </div>
                <div className="w-[40%] shadow-md p-2 space-y-5">
                    <p className="text-2xl font-bold">Price: ${ price }.00</p>
                    <p className="text-sm">Price depends on group</p>
                    <h2 className="text-2xl font-bold">Select Travels Date and Travels</h2>
                    <h2 className="text-2xl font-bold"><span className="underline">Tour Type</span> : { tourType }</h2>
                </div>
            </div>
            <div className="border-b border-t py-8 my-20 text-xl font-semibold md:flex justify-between">
                <span> <FaStopwatch className="text-[#FE5C24]" /> 12 Hours (maximum)</span>
                <span> <FaTruckPickup className="text-[#FE5C24]" /> Pickup Offered</span>
                <span> <FaTicket className="text-[#FE5C24]" /> Mobile ticket System</span>
                <span> <FaMessage className="text-[#FE5C24]" /> English language prefaced</span>
            </div>
            <section className="md:flex justify-center  gap-10 my-10">
                <div className="space-y-8  flex-1 border p-5">
                    <h1 className="text-3xl font-bold text-center border-b">Overview Packages</h1>
                    <p>Discovery Bangladesh operate various regular, customize and special Bangladesh tour packages round the year. As a professional tour operator in Bangladesh, we regularly operate customized Bangladesh tour packages which include luxury Bangladesh tour packages, City Sightseeing and River Cruising tour packages, Archaeological Sites & Cultural Tour, Adventure & Wildlife tours and many more tour packages. Come and explore Bangladesh with us and Discover Bangladesh Naturally! </p>
                    <h2 className="text-xl font-semibold">Tour Packages From Venture Bengal</h2>
                    <p className="">We operate tailor made custom tour packages as well as regular tour packages. You also can fix several tour packages together and make your tour longer and smother. Similarly, if you want relaxed tour, you can split our regular tour packages. </p>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            <button className="bg-[#FE5C24] py-3 px-5 rounded-xl text-white">Day One</button> The World Heritage Site, Historical And Archaeological Treasure Of North Bengal
                        </div>
                        <div className="collapse-content">
                            <p>Arrive Dhaka airport & transfer to hotel. If time permits half day city tour to Sadarghat River front, old Hindu temples, Lalbag Fort of Mughal Empire, Museum, Shahid Minar and Curzon Hall (Dhaka University). Overnight at Hotel.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            <button className="bg-[#FE5C24] py-3 px-5 rounded-xl text-white">Day Two</button> The World Heritage Site, Historical And Archaeological Treasure Of North Bengal
                        </div>
                        <div className="collapse-content">
                            <p>Arrive Dhaka airport & transfer to hotel. If time permits half day city tour to Sadarghat River front, old Hindu temples, Lalbag Fort of Mughal Empire, Museum, Shahid Minar and Curzon Hall (Dhaka University). Overnight at Hotel.</p>
                        </div>
                    </div>
                    <div className=" collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            <button className="bg-[#FE5C24] py-3 px-5 rounded-xl text-white">Day Three</button> The World Heritage Site, Historical And Archaeological Treasure Of North Bengal
                        </div>
                        <div className="collapse-content">
                            <p>Arrive Dhaka airport & transfer to hotel. If time permits half day city tour to Sadarghat River front, old Hindu temples, Lalbag Fort of Mughal Empire, Museum, Shahid Minar and Curzon Hall (Dhaka University). Overnight at Hotel.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 border p-5">
                    <BookingForm titles={packageDetails} />
                </div>

            </section>
        </div>
    );
};

export default PackagesDetails;

