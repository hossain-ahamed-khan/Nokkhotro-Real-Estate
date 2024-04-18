import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    // google login 

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    // github login 

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#053a37b9] text-slate-100">Login</button>
                        </div>
                    </form>

                    <div className="text-center">
                        <button onClick={handleGoogleSignIn} className="w-2/5 btn btn-outline btn-success mr-2">Google login</button>
                        <button onClick={handleGithubSignIn} className="w-2/5 btn btn-outline ">Github login</button>
                    </div>

                    <div className="text-center my-6">
                        I have no account. Want to <Link className="font-bold text-[#053A37]" to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;