import { useLoaderData } from "react-router-dom";
import AllCraftData from "../AllCraftData/AllCraftData";


const AllCraft = () => {

    const crafts = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl">All Art & Craft page:{crafts.length} </h2>
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