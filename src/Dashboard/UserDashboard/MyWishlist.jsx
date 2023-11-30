import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
const MyWishlist = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { isPending, refetch, data: bookings = [] } = useQuery( {
        queryKey: [ 'bookings' ],
        queryFn: async () => {
            const res = await axiosPublic.get( `/bookings?email=${ user?.email }` );
            return res.data;
        },
    } );
    if ( isPending ) {
        return "Loading......."
    }

    const handleDelete = ( id ) => {
        
        
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>

                            <th>Package Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>See Details</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map( item => <tr key={ item._id }>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={ item?.spotPhoto } alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{ item?.tripTitle }</div>

                                        </div>
                                    </div>
                                </td>


                                <td>{ item?.price }</td>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                                </th>
                                <th>
                                    <Link to={`/package-details/${item._id}`}><button className="btn btn-ghost btn-xs">Package Details</button></Link>
                                </th>

                            </tr> )
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyWishlist;