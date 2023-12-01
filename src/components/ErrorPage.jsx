import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="">
             <div className='flex justify-center items-center h-screen'>
            <img src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg" alt="" />

        </div>
            <div className="flex justify-center my-10">
            <Link to='/'><button className='btn bg-orange-600 hover:bg-blue-600 text-white'>Back to Home</button></Link>
           </div>
       </div>
    );
};

export default ErrorPage;