import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";
import Slider from "../shared/Slider/Slider";
import Service from "../Service/Service";



const Home = () => {

    const crafts = useLoaderData();

    return (
        
        <div className=" container mx-auto ">
            <Slider></Slider>
            {/*  */}
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
            {/* service section */}
            <div className=" text-center mx-auto mt-6 mb-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-purple-500 " data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">Our Services</h2>
                <p className=" text-base lg:text-xl font-medium">Each service should be described in detail, emphasizing the value it brings to your clients and how it sets your residential home agency apart from competitors. Including testimonials or case studies can also help demonstrate your expertise and the positive outcomes you have achieved for your clients.</p>
            </div>
            <Service></Service>
        </div>
    );
};

export default Home;