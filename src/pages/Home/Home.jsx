import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";



const Home = () => {

    const crafts = useLoaderData();

    return (
        <div className=" container mx-auto ">

            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-blue-400">Art & Craft items</h2>
                <p className=" text-base lg:text-xl font-medium">Art and craft items encompass a vibrant world of materials and tools that fuel creativity and expression across various mediums. From traditional painting and drawing to modern digital art and intricate crafting, these items form the backbone of artistic endeavors worldwide.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:my-10 ">
                {
                    crafts.slice(0, 6).map(craft => <CraftCard
                        key={craft._id}
                        craft={craft}
                    ></CraftCard>)
                }
            </div>
        </div>
    );
};

export default Home;