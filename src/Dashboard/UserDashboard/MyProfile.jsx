import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="flex items-center gap-10 shadow-md p-2">
                <div className="w-96 h-96"><img className=" w-full rounded-full drop-shadow-xl" src={ user?.photoURL } alt="" /></div>
                <div className="w-full space-y-2">
                    <h1 className="border-b border-black text-2xl font-semibold w-full px-5 py-2 rounded-sm">Name: { user?.displayName }</h1>
                    <h1 className="border-b border-black text-2xl font-semibold w-full px-5 py-2 rounded-sm">Email: { user?.email }</h1>
                </div>
            </div>



            <div className="mt-20">

                <h1 className="text-3xl font-bold text-center border-b pb-4">Share Your Story With The World</h1>

                <>
                    <div className="">
                        <div className="hero-content ">
                            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Story Title</span>
                                        </label>
                                        <input type="text" placeholder="Title" className="input input-bordered" required name="title" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input type="text" placeholder="Location" className="input input-bordered" required name="location" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" placeholder="date" className="input input-bordered" required name="date" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Author</span>
                                        </label>
                                        <input type="text" placeholder="Author" className="input input-bordered" required name="author" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Write Your Story</span>
                                        </label>
                                        <textarea placeholder="Write Your Story here" name="content" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" placeholder="Image URL" className="input input-bordered" required name="imageUrl" />
                                    </div>
                                    
                                    <div className="form-control mt-6">
                                        <button className="btn bg-orange-600 hover:bg-blue-600 text-white">Post Your Story</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default MyProfile;