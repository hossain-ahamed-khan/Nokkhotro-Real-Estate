

const UpdateProfile = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                        </div>

                        <div className="relative form-control">
                            <label className="label">
                                <span className="label-text">Current Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered" required />
                        </div>

                        <div className="relative form-control">
                            <label className="label">
                                <span className="label-text">New Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#053a37b9] text-slate-100">Update Profile</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;