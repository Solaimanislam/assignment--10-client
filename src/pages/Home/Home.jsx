import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";



const Home = () => {

    const crafts = useLoaderData();

    return (
        <div className=" container mx-auto ">

            <h2 className="text-3xl">This is Home Craft:{crafts.length} </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    crafts.map(craft => <CraftCard
                        key={craft._id}
                        craft={craft}
                    ></CraftCard>)
                }
            </div>
        </div>
    );
};

export default Home;