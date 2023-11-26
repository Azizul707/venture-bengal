import usePackages from "../../hooks/usePackages";
import PackageCard from "./PackageCard";


const AllPackages = () => {
    const [packages] = usePackages()
    return (
        <div className=" max-w-screen-xl mx-auto grid justify-items-center gap-5 my-10 md:grid-cols-3">
            {
                packages.map((item,idx)=><PackageCard key={idx} item={item}></PackageCard>)
            }
        </div>
           
    );
};

export default AllPackages;