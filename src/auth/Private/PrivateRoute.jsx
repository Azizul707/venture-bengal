/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const { user,loading } = useAuth();
    if ( loading ) {
       return <p>loading......</p>
    }

    if ( user ) {
        return children
    }
    return <Navigate to='/login'></Navigate>

    
};

export default PrivateRoute;