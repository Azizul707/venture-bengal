import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {

    const { singInUser, googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleSingIn = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singInUser( email, password )
            .then( res => {
                navigate( '/' );
                console.log( res );
                Swal.fire( {
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Logged In",
                    showConfirmButton: false,
                    timer: 1500
                } );
                navigate( '/' )
            } )
            .catch( err => {
                console.log( err );
                Swal.fire( {
                    position: "top-end",
                    icon: "error",
                    title: "Invalid Login Credentials",
                    showConfirmButton: false,
                    timer: 1500
                } );
            } );
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then( res => {
                navigate( '/' );
                Swal.fire( {
                    position: "top-end",
                    icon: "success",
                    title: "Logged In Successfully",
                    showConfirmButton: false,
                    timer: 1500
                } );
            } )
            .catch( err => {
                console.log( err );
            } );
    }




    return (
        <div className="md:my-32">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 items-center backgroundImage">
                <div className="md:col-span-6 w-full">
                    <img className=" h-screen" src='https://img.freepik.com/free-photo/tourist-with-thumb-up_1368-7035.jpg' alt="" />

                </div>

                <div className="md:col-span-6 hero min-h-screen  rounded-lg bg-[#22437D]">
                    <div className="hero-content w-full flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-white">Login Now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-full bg-base-100">
                            <form onSubmit={ handleSingIn } className="card-body bg-[#22437D]">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required name="password" />


                                </div>
                                <div className="flex items-center justify-center text-white rounded gap-5 bg-[#FE5C24] hover:bg-blue-600 py-3 border mt-5">
                                    <button onClick={ handleGoogleLogin } className="">Login With</button>
                                    <span><FaGoogle></FaGoogle></span>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#FE5C24]  hover:bg-blue-600 text-white" >Login</button>
                                </div>
                                <div className="">
                                    <p>Do not have an account ? <Link to='/register' className="text-[#FE5C24] font-semibold">Create Now</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;