import { useParams } from "react-router-dom";
import usePackages from "../../hooks/usePackages";
import PackageCard from "../../pages/Home/PackageCard";


const TourType = () => {
    const [ packages ] = usePackages();

    const query = useParams();
    
    const tourTypes = packages.filter( item => item.tourType === query.type );
    return (
        <div className="max-w-screen-xl mx-auto my-20 grid justify-items-center md:grid-cols-3">
            {
                tourTypes.map(item=><PackageCard key={item._id} item={item}></PackageCard>)
            }
       </div>
    );
};

export default TourType;