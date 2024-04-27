import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { Link } from "react-router-dom";


const MyCraft = () => {

    const { user } = useContext(AuthContext) || {};
    // console.log(user);
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myCraft/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [user]);

    const handleDelete = _id => {
        console.log(_id);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
            {
                item?.map(p => (
                    <div key={p._id}  >
                        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">
                            <figure><img className=" w-full lg:h-[300px]" src={p.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="flex items-center justify-between">
                                    <h2 className="card-title">Item_Name: {p.name}</h2>
                                    <h4 className=" text-lg font-normal text-orange-500 ">Rating: {p.rating}</h4>
                                </div>
                                <h2 className="card-title text-purple-500">CategoryName: {p.scName}</h2>
                                <div className=" flex items-center gap-1 justify-between">
                                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                                        <p className="  text-green-400">Price: {p.price}</p>
                                    </div>
                                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                                        <h4 className="  text-blue-400">Status: {p.status}</h4>
                                    </div>
                                </div>
                                <div className=" flex justify-around">

                                    <Link ><button className="btn btn-outline btn-primary">Update</button></Link>
                                    <Link ><button 
                                    onClick={() => handleDelete(p._id)}
                                     className="btn btn-outline btn-secondary">Delete</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyCraft;