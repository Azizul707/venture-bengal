import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserRole from "../../hooks/useUserRole";


const ManageTours = () => {
    const axiosSecure = useAxiosSecure();
    const [ userRole ] = useUserRole();

    // const name = userRole?.name.split( " " )[ 0 ];
  

    const {refetch, isPending, data: tours = [] } = useQuery( {
        queryKey: [ 'tours' ],
        queryFn: async () => {
            const res = await axiosSecure.get( `/bookings/manage?name=${userRole.name}` );
            return res.data;
        },
    } );
    
    const handleAccept = ( id ) => {
        axiosSecure.patch( `/bookings/accept/${ id }` )
            .then( res => {
                refetch();
                console.log( res );
            } )  
        
    };
    const handleReject = ( id ) => {
        axiosSecure.patch( `/bookings/reject/${ id }` )
            .then( res => {
                refetch();
            console.log(res);
        })
    };



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                           
                            <th>Package Name</th>
                            <th>Tourist Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tours?.map(item=> <tr key={item._id}>
                               
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
                                   {item?.touristName}
                                </td>
                                <td>{ item?.date }</td>
                                <td>${ item?.price }</td>
                                <th>
                                    {item.status === "In Review" || item.status === "Rejected"?
                                        <button onClick={ () => handleAccept( item._id ) } className="btn btn-ghost bg-orange-600 hover:bg-blue-600 text-white btn-xs">Accept</button> :
                                        <button  className="btn btn-ghost bg-blue-600 text-white btn-xs">Accepted</button>
                                    }
                                </th>
                                <th>
                                    { item.status === "Accepted" ? "" :
                                        <button onClick={ () => handleReject( item._id ) } className="btn btn-ghost btn-xs  bg-orange-600 hover:bg-blue-600 text-white">Reject</button> }
                                           
                                </th>
                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageTours;