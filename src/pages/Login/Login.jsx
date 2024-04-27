

import { Link, useLocation, useNavigate } from "react-router-dom";
import { TabTitle } from "../utils/title";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import auth from "../../Firebase/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {

    TabTitle('Login');

    const location = useLocation();
    const navigate = useNavigate();
    

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { signInUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    // const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // Navigate after login
                navigate(location?.state ? location.state : '/');
                
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset 
        setRegisterError('');
        setSuccess('');

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                // setSuccess('User Logged in Successfully');
                toast.success('User Logged in Successfully');
            })
            .catch(error => {
                console.error(error);
                // setRegisterError(error.message);
                toast.warn('auth/invalid-credential');
            })

    }

    return (
        <div>
            
            <ToastContainer />
            <div className="hero min-h-screen bg-base-200" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                <div className="hero-content w-full flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="text-3xl flex justify-center gap-6 border-b-2 pb-4">
                            <div className=" " onClick={handleGoogleSignIn}><FcGoogle /></div>
                            <div className=" " onClick={handleGithubSignIn}><FaGithub /></div>
                        </div>
                        {
                            registerError && <p className=" text-red-600 font-bold">{registerError}</p>
                        }
                        {
                            success && <p className=" text-green-500 font-bold">{success}</p>
                        }
                        <p className=" lg:ml-9 ml-3 text-lg ">New to myWebsite? please<Link to='/register'>
                            <button className="btn btn-link text-lg font-semibold">Register</button>
                        </Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;