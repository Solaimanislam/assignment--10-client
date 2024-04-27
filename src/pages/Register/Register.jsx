
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TabTitle } from "../utils/title";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {

    TabTitle('Register');

    const location = useLocation();
    const navigate = useNavigate();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // reset 
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            toast.warning('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warning('Your password should have at least one Uppercase characters.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            
            toast.warning('Your password should have at least one Lowercase characters.');
            return;
        }


        createUser(email, password, name, image)
            .then(result => {
                updateUserProfile(name, image).then(() => {

                    console.log(result.user)
                })
                // setSuccess('User Created Successfully');
                toast.success('User Created Successfully');
                 // Navigate after login
                 navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                // setRegisterError(error.message);
                toast.warn('Email-already-in-use');
            })


    }


    return (
        <div>
            
            <ToastContainer />
            <div className="hero min-h-screen bg-base-200" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                <div className="hero-content w-full flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photoURL" name="image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="m-0 border-2 rounded-lg p-3 relative">
                                    <input 
                                    type={showPassword ? "text" : "password"} placeholder="Password" name="password" className=" outline-none  " required />
                                    <span className=" absolute top-1/3 right-8" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash className=" text-xl" /> : <FaEye className=" text-xl" />
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className=" text-red-600 font-bold">{registerError}</p>
                        }
                        {
                            success && <p className=" text-green-500 font-bold">{success}</p>
                        }
                        <p className=" ml-9">Already have Account? please <Link to='/login'>
                            <button className="btn btn-link">Login</button>
                        </Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;