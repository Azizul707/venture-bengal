import axios from "axios";

const axiosSEcure = axios.create( {
    baseURL:'https://new-venture-bengal-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSEcure;
};

export default useAxiosSecure;