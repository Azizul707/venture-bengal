import { useQuery } from "@tanstack/react-query";
import userAxiosSecure from "../../hooks/userAxiosSecure";

const ManageUsers = () => {
    const axiosSecure = userAxiosSecure();


    const {refetch, isPending, data: users = [] } = useQuery( {
        queryKey: [ 'users' ],
        queryFn: async () => {
            const res = await axiosSecure.get( '/users' );
            return res.data;
        },
    } );

    const handleAdmin = ( id )=>{
        axiosSecure.patch( `/users/role/admin/${ id }` )
            .then( res => {
                refetch();
            console.log(res);
        })
    };
    const handleGuide = ( id ) => {
        axiosSecure.patch( `users/role/guide/${ id }` )
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

                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Guide</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map( item => <tr key={ item._id }>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={ item?.photo } alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    { item?.name }
                                </td>
                                <td>
                                    { item?.role }
                                </td>
                                <th>
                                <button onClick={()=>handleAdmin(item._id)} className="btn btn-ghost bg-orange-600 hover:bg-blue-600 text-white btn-xs">Make Admin</button>
                                </th>
                                <th>
                                    <button onClick={()=>handleGuide(item._id)} className="btn btn-ghost bg-orange-600 hover:bg-blue-600 text-white btn-xs">Make Guide</button>
                                </th>

                            </tr> )
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageUsers;