import { useLoaderData } from "react-router-dom";


const AllCraft = () => {

    const crafts = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl">All Art & Craft page:{crafts.length} </h2>
        </div>
    );
};

export default AllCraft;