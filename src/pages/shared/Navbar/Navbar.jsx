
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/UpdateP'>Updated Profile</NavLink></li>


        <li><NavLink to='/blogs'>Blogs</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-100 items-center">
            <div className="navbar-start">
                <div className="dropdown z-30">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="btn lg:text-xl ">SI Enterprise</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end pb-4">

                <Link to='/login'>
                    {
                        user ? <>
                            <div className="  btn-circle avatar relative ">
                                <div className="tooltip absolute top-6 mr-2" title={user?.email} id="loginBtn">
                                    <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                                </div>
                                <ReactTooltip
                                    anchorId="loginBtn"
                                    place="top"
                                    content=""
                                ></ReactTooltip>
                            </div>
                            {/* <span>{user?.email}</span> */}
                            <button onClick={handleLogout} className="btn">Sign Out</button>
                        </> : <Link to='/login'><button className="btn">Login</button></Link>

                    }

                </Link>
            </div>
        </div>
    );
};

export default Navbar;