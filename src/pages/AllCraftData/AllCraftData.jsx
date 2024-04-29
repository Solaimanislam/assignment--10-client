import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Fade } from "react-awesome-reveal";


const AllCraftData = ({ aCraft }) => {

    const { _id, item_name, subcategory, short_description, price, rating, processing_time, image } = aCraft;


    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <figure><img className=" w-full lg:h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <Fade direction="down">
                        <h2 className="card-title">Item_Name: {item_name}</h2>
                    </Fade>
                    <h4 className=" text-lg font-normal text-orange-500 ">Rating: {rating}</h4>
                </div>
                <Fade direction="up">
                    <h2 className="card-title text-green-400">CategoryName: {subcategory}</h2>
                </Fade>
                <h2 className="card-title text-purple-500">short_description: {short_description}</h2>

                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <Fade direction="right">
                            <p className="  text-green-400">Price: {price}</p>
                        </Fade>
                    </div>
                    <div className=" flex items-center text-lg font-semibold gap-1 ">

                        <Fade direction="right">
                            <h4 className="  text-blue-400">Processing Time: {processing_time}</h4>
                        </Fade>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Fade direction="left">
                        <Link
                            to={`/aCraft/${_id}`}
                        ><button className="btn btn-outline btn-secondary">Show Details</button></Link>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AllCraftData;

AllCraftData.propTypes = {
    aCraft: PropTypes.node
}
