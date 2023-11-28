import axios from "axios";

const axiosSEcure = axios.create( {
    baseURL:'http://localhost:5000'
})
const userAxiosSecure = () => {
    return axiosSEcure;
};

export default userAxiosSecure;