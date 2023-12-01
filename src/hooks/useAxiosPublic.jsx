import axios from "axios";

const axiosPublic = axios.create( {
    baseURL:'https://new-venture-bengal-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;