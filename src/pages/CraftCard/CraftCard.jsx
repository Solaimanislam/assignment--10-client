import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Fade } from "react-awesome-reveal";


const CraftCard = ({ craft }) => {

    const { _id, name, scName, price, rating, status, image } = craft;

    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <figure><img className=" w-full lg:h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <Fade direction="up">
                        <h2 className="card-title">Item_Name: {name}</h2>
                    </Fade>
                    <h4 className=" text-lg font-normal text-orange-500 ">Rating: {rating}</h4>
                </div>
                <Fade direction="right">
                    <h2 className="card-title text-purple-500">CategoryName: {scName}</h2>
                </Fade>
                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <p className="  text-green-400">Price: {price}</p>
                    </div>
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <h4 className="  text-blue-400">Status: {status}</h4>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link
                        to={`/craft/${_id}`}
                    ><button className="btn btn-outline btn-secondary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;

CraftCard.propTypes = {
    craft: PropTypes.node
}
