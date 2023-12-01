import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyBookings = () => {
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
        return 'loading........'
    }

   

    const handleDelete = ( id ) => {
        
        axiosPublic.delete( `/bookings/${ id }` )
            .then( res => {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your booking has been Canceled",
                    showConfirmButton: false,
                    timer: 1500
                  });
        })
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                           
                            <th>Package Name</th>
                            <th>Guide Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(item=> <tr key={item._id}>
                               
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
                                <td>
                                   {item?.selectedGuide}
                                </td>
                                <td>{ item?.date }</td>
                                <td>${ item?.price }</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{item?.status }</button>
                                </th>
                                <th>
                                    {
                                        item?.status === "In Review" || item.status == "Rejected" ? <button disabled className="btn btn-ghost btn-xs  ">Pay</button> : <button className="btn btn-ghost bg-orange-600 hover:bg-blue-600 text-white btn-xs">Pay</button>
                                    }
                                </th>
                                <th>
                                    {
                                        item?.status === "In Review" ? <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs  bg-orange-600 hover:bg-blue-600 text-white">Cancel</button>
                                            :
                                            <button className="btn btn-ghost btn-xs hidden">Pay</button>
                                    }
                                </th>
                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyBookings;