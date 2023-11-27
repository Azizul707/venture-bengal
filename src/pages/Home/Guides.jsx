import useGuides from "../../hooks/useGuides";
import GuideCard from "./GuideCard";

const Guides = () => {
    const [ guides ] = useGuides();
    console.log(guides);
    return (
        <div className="max-w-screen-xl mx-auto grid justify-items-center gap-5 md:grid-cols-3">
            {
                guides.map((guide,idx)=><GuideCard key={idx} item={guide}></GuideCard>)
            }
        </div>
    );
};

export default Guides;