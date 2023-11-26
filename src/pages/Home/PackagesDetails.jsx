/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";


const PackagesDetails = () => {
    const { id } = useParams();
    console.log(id);
    const axiosPublic = useAxiosPublic();

  const { data: packageDetails = [] } = useQuery({
    queryKey: ['package-details'],
    queryFn: async () => {
      const res = await axiosPublic.get(`packages/details/${id}`);
      return res.data;
      },
  } );
    const { imageFour, imageOne, imageTwo, imageThree, spotPhoto, tourType, tripTitle, price, } = packageDetails;
    
    console.log(packageDetails);
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-semibold my-5">{ tripTitle }</h1> <hr />
            <div className="my-5">
                <div className="">
                    <img className="" src={ spotPhoto } alt="" />
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default PackagesDetails;