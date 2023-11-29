import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStories = () => {

    const axiosPublic = useAxiosPublic();

    const { isPending, data: story = [] } = useQuery( {
        queryKey: ['guides'],
        queryFn: async () => {
          const res = await axiosPublic.get('/story');
          return res.data;
        },
      });
    
      return [story, isPending];
    };

export default useStories;