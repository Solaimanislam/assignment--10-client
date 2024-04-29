import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const loaderCraft = useLoaderData();
    // console.log(loaderCraft);

    // const newCraft = {name, scName, description, price, rating, customization, time, status, email, uName, image};

    const { id } = useParams();
    // const idInt = parseInt(id);
    const craft = loaderCraft.find(craft => craft._id === id);
    // console.log(craft);

    return (
        <div className="card bg-base-100 shadow-xl mb-6 p-3">
        <figure data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"><img className=" lg:w-1/2 rounded-xl lg:h-[450px]" src={craft.image} alt="Shoes" /></figure>
        <div className="card-body" data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="flex items-center justify-between">
                <h2 className="lg:text-xl font-bold text-orange-500"><span className=" lg:text-2xl font-bold text-black">Item Name:</span> {craft.name}</h2>
                <h4 className=" lg:text-lg font-medium text-orange-500 border border-yellow-400 px-3 rounded-lg">{craft.rating}</h4>
            </div>

            <p className=" lg:text-xl font-bold text-purple-500"><span className=" text-orange-700 ">Subcategory Name: </span> {craft.scName}</p>
            <p className=" lg:text-xl font-bold text-sky-800"><span className=" text-yellow-800 ">Description: </span> {craft.description}</p>
            <div className=" lg:flex items-center gap-4 justify-between">
                <div className=" flex items-center lg:text-lg font-semibold gap-3 ">
                    
                    <p className="  text-red-400"><span className=" text-black font-bold">status: </span> {craft.status}</p>
                </div>
                <div className=" flex items-center lg:text-lg font-semibold gap-3 ">
                    
                    <h4 className="  text-blue-400"><span className=" text-black font-bold">Customization: </span> {craft.customization}</h4>
                </div>
            </div>
            <div className=" lg:flex items-center gap-4 justify-between">
                <div className=" flex items-center lg:text-lg font-semibold gap-3 ">

                    <p className="  text-green-400"><span className=" text-black font-bold">Price: </span> {craft.price}</p>
                </div>
                <div className=" flex items-center text-lg font-semibold gap-3 ">

                    <h4 className="  text-blue-400"><span className=" text-black font-bold">Time: </span>{craft.time}</h4>
                </div>
            </div>
            
        </div>
    </div>
    );
};

export default Details;