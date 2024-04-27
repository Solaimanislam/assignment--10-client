import { useLoaderData } from "react-router-dom";



const Home = () => {

    const crafts = useLoaderData();
    console.log(crafts);

    return (
        <div>
            
            <h2 className="text-3xl">This is Home Craft:{crafts.length} </h2>
        </div>
    );
};

export default Home;