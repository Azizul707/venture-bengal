/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const GuideCard = ( { item } ) => {
    const{photo,name,experience,languages,specialties,_id} = item
    return (
        <div>
            <div className="card w-96  shadow-xl">
                <figure className="bg-gradient-to-r from-[#0C3E72] pt-10">
                    <img  src={photo} alt="Shoes" className="w-40 h-40 rounded-full" />
                </figure> 
                <div className="card-body bg-gradient-to-l from-[#0E477D]">
                    <h2 className="card-title">{ name }</h2>
                    <p>{ experience }</p>
                    <p className="font-bold">Languages:</p>
                    {
                        languages?.map( ( item, idx ) => <p className="bg-slate-200 text-center" key={ idx }>{ item}</p>)
                    }
                    <p className="font-bold">Specialties:</p>
                    {
                        specialties?.map( ( item, idx ) => <p className="bg-slate-200 text-center" key={ idx }>{ item }</p>)
                    }
                    <div className="card-actions my-3">
                        <Link to={`/guide-details/${_id}`}>
                        <button className="btn text-white w-full bg-[#FE5C24] hover:bg-blue-600">Guide Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideCard;