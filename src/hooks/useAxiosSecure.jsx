import axios from "axios";

const axiosSEcure = axios.create( {
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    return axiosSEcure;
};

export default useAxiosSecure;