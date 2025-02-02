import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="w-full">
            <div className="navbar bg-base-100 shadow-lg px-4 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/update-profile">Update Profile</Link></li>
                            <li><Link to="/user-profile">User Profile</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <h1 className="text-xl text-[#053A37] font-bold font-vidaloka">Nokkhotro real estate</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/update-profile">Update Profile</Link></li>
                        <li><Link to="/user-profile">User Profile</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {
                    user ?
                        <div className="navbar-end">
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <img className="w-10 h-10 rounded-full mr-4" src={user.photoURL} alt="" />
                            </div>

                            <Link onClick={handleLogOut} to="" className="btn">Log out</Link>
                        </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login" className="btn">Login</Link>
                        </div>
                }
            </div>

        </div>
    );
};

export default Navbar;