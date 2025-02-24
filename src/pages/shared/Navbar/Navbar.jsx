
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import logo from "../../../../public/image/Art-Logo.jpg" ;

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {

        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    // console.log(theme);

    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allArtCraft'>All Art & craft Items</NavLink></li>
        <li><NavLink to='/addCraft'>Add Craft Item</NavLink></li>
        <li><NavLink to='/myCraft'>My Art & Craft List</NavLink></li>



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
                <img className=" lg:w-12 w-10 lg:h-12 h-10 rounded-full lg:ml-3" src={logo} alt="" />
                <a className="btn lg:text-xl px-2 ">SIArt</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end pb-4">

                <div className=" lg:mt-6 mt-5 lg:mr-3">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>

                <Link to='/login'>
                    {
                        user ? <div className="flex gap-3">
                            <div className="  btn-circle avatar relative">
                                <div className="tooltip absolute top-6 w-8 h-8" title={user?.displayName} id="loginBtn">
                                    <img className="w-10 mt-1 h-10 rounded-full" src={user?.photoURL} alt="" />
                                </div>
                                <ReactTooltip
                                    anchorId="loginBtn"
                                    place="top"
                                    content=""
                                ></ReactTooltip>
                            </div>
                            {/* <span>{user?.email}</span> */}
                            <button onClick={handleLogout} className="btn mt-6">Sign Out</button>
                        </div> : <Link to='/login'><button className="btn mt-6">Login</button></Link>

                    }

                </Link>

            </div>
        </div>
    );
};

export default Navbar;