import { Link } from "react-router-dom";
import useStories from "../../hooks/useStories";

const AllStory = () => {
    const [ story ] = useStories();    
    return (
        <div className="max-w-screen-xl mx-auto grid justify-items-center gap-5 md:grid-cols-2 my-20">
        {
            story.map(item=><div key={item._id} className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-96 h-80" src={item.imageUrl} alt="Movie"/></figure>
            <div className="card-body">
                    <h2 className="card-title">{ item.title}</h2>
                    <p>{ item.content.slice(0,50)}</p>
              <div className="card-actions justify-end">
                        <Link to={`/story-details/${item.title}`}>
                        <button className="btn bg-orange-600 text-white hover:bg-blue-600 ">Read More</button>
                        </Link>
              </div>
            </div>
          </div>)
        }
    </div>
    );
};

export default AllStory;