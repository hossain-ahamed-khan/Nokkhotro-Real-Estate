import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const UserProfile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl mr-8" />
                    <div>
                        <h1 className="text-5xl font-bold">{user.displayName}</h1>
                        <p className="py-6">Start the journey with curiosity and kindness. Striving for growth, not perfection. In pursuit of knowledge, creativity, and connection. Living authentically, one moment at a time.</p>
                        <Link to="/"><button className="btn bg-[#053a37b9] text-slate-200">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;