import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";


const MyCard = ({ p}) => {
    console.log(p);

    const [item, setItem] = useState([]);

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


                fetch(`http://localhost:5000/craft/${_id}`, {
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


    const { _id, image, name, rating, scName, price, status, customization, time } = p;
    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <figure><img className=" w-full lg:h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">Item_Name: {name}</h2>
                    <h4 className=" text-lg font-normal text-orange-500 ">Rating: {rating}</h4>
                </div>
                <h2 className="card-title text-purple-500">CategoryName: {scName}</h2>
                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <p className="  text-green-400">Price: {price}</p>
                    </div>
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <h4 className="  text-blue-400">Status: {status}</h4>
                    </div>
                </div>
                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <p className=" text-orange-400">Customization: {customization}</p>
                    </div>
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <h4 className="  text-blue-800">Time: {time}</h4>
                    </div>
                </div>
                <div className=" flex justify-around">

                    <Link to={`updateCraft/${_id}`} ><button className="btn btn-outline btn-primary">Update</button></Link>
                    <Link ><button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-outline btn-secondary">Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyCard;

MyCard.propTypes = {
    p: PropTypes.node
}

