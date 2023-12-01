import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile,googleLogin } = useAuth()
    const axiosSEcure = useAxiosSecure();

    const handleCreateUser = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.image.value;
        const password = form.password.value;

        
        createUser( email, password )
            .then( res => {
                form.reset();
                navigate( '/' );
                console.log( res.user );
            } )
        updateUserProfile( name, photoURL )
            .then( () => {
                console.log( 'profile updated' );
                
                Swal.fire( {
                    position: "top-end",
                    icon: "success",
                    title: "Your Account Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                } );

                axiosSEcure.post( '/users', { email: email, name: name, photoURL: photoURL, role:"user" } )
                    .then( res => {
                        console.log( res );
                    } )
                    .catch( err => {
                        console.log( err );
                    } );
                
            } )
            .catch( err => {
                console.log( err );
            } );
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then( res => {
                Swal.fire( {
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                } );
            } )
            .catch( err => {
                console.log( err );
            } );
    };
    
    return (
        <div className="md:my-32">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 items-center backgroundImage">
                <div className="md:col-span-6 w-full">
                    <img className=" h-screen" src='https://www.pngitem.com/pimgs/m/115-1152641_transparent-travel-people-png-png-download.png' alt="" />

                </div>

                <div className="md:col-span-6 hero min-h-screen  rounded-lg bg-[#22437D]">
                    <div className="hero-content w-full flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-white ">Create Your Account!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-full bg-base-100">
                            <form onSubmit={handleCreateUser} className="card-body bg-[#22437D]">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" className="input input-bordered" name="image" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered" required name="password" />
                                </div>

                                <div className="flex items-center justify-center text-white rounded gap-5 bg-[#FE5C24] hover:bg-blue-600 py-3 border mt-5">
                                    <button onClick={handleGoogleLogin} className="">Login With</button>
                                    <span><FaGoogle></FaGoogle></span>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#FE5C24] text-white hover:bg-blue-600" >Create Account</button>
                                </div>
                                <div className="">
                                    <p className="text-white">Already have an account ? <Link to='/login' className="text-[#FE5C24] font-semibold">Login Now</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;