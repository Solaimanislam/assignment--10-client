import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Button from "../Button/Button";




const MyCraft = () => {

    const { user } = useContext(AuthContext) || {};

    const [item, setItem] = useState([]);
    const [items, setItems] = useState(item);
   
    useEffect(() => {
        fetch(`https://carft-store-server.vercel.app/myCraft/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setItems(data);
            });
    }, [user]);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://carft-store-server.vercel.app/craft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            const remaining = item.filter(c => c._id !== _id);
                            setItem(remaining);
                        }
                    })
            }
        });
    }

    const filterItems = (e) => {
        const coldItems = [...item];
        const newItems = coldItems.filter((newVal) => newVal.customization === e.target.value);
        setItems(newItems);
        
    }


    return (
        <div>
            <div className=" mx-auto text-center lg:mt-8">
                <span className="label-text text-2xl font-semibold">Filter by</span>
                <div className=" my-4">
                    <select onChange={filterItems} name="sort" id="sort" className="p-3 rounded-lg border-2 border-emerald-400 " >
                        <option value="custom">Customization</option>
                        <option  value="true">True</option>
                        <option  value="false">False</option>

                    </select>
                </div>
            </div>
            {/* <Button menuItems={menuItems}></Button> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 container mx-auto">
                {
                    items?.map(p => (
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
                                    <div className=" flex items-center gap-1 justify-between">
                                        <div className=" flex items-center text-lg font-semibold gap-1 ">

                                        <p className=" text-orange-400">Customization: {p.customization}</p>
                                        </div>
                                        <div className=" flex items-center text-lg font-semibold gap-1 ">

                                            <h4 className="  text-blue-800">Time: {p.time}</h4>
                                        </div>
                                    </div>
                                    <div className=" flex justify-around">

                                        <Link to={`updateCraft/${p._id}`} ><button className="btn btn-outline btn-primary">Update</button></Link>
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
        </div>
    );
};

export default MyCraft;