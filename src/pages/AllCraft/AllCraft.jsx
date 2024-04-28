import { useLoaderData } from "react-router-dom";
import AllCraftData from "../AllCraftData/AllCraftData";


const AllCraft = () => {

    const crafts = useLoaderData();

    return (
        <div>
            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-purple-500">All Art & Craft items</h2>
                <p className=" text-base lg:text-xl text-amber-600 font-medium">Welcome to SI Art & Craft, your ultimate destination for all things art and craft! Dive into a world where creativity knows no bounds and imagination takes flight. Whether you are a seasoned artist, a crafting enthusiast, or just beginning to explore the wonders of DIY projects, we have something special just for you.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:my-10 ">
                {
                    crafts.map(craft => <AllCraftData
                        key={craft._id}
                        craft={craft}
                    ></AllCraftData>)
                }
            </div>
        </div>
    );
};

export default AllCraft;