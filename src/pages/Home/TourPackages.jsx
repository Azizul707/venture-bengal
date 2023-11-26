import { Link } from "react-router-dom";
import usePackages from "../../hooks/usePackages";
import PackageCard from "./PackageCard";

const TourPackages = () => {
    const [ packages ] = usePackages();

    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto grid justify-items-center md:grid-cols-3 gap-5">
                {
                    packages.slice( 0, 3 ).map( ( item, idx ) => <PackageCard key={ idx } item={ item }></PackageCard> )
                }

            </div>
            <div className="flex justify-center my-10">
                <div className="">
                    <Link to='/all-packages'>
                    <button className="bg-[#FE5C24] text-white py-3 px-8 font-semibold ">All Packages</button>
                    </Link>
                </div>
            </div>

        </div>


    );
};

export default TourPackages;