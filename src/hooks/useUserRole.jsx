import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUserRole = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { isPending, data: userRole = [] } = useQuery( {
        queryKey: ['userRole'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/users/role/?email=${user?.email}`);
          return res.data;
        },
      });
    
      return [userRole, isPending];
    };

export default useUserRole;



