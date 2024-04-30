import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";
import Slider from "../shared/Slider/Slider";
import Service from "../Service/Service";
import { useEffect, useState } from "react";
import AllCraftData from "../AllCraftData/AllCraftData";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'
import About from "../About/About";



const Home = () => {

    const crafts = useLoaderData();

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ArtcraftS')
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, []);

    // console.log(item);

    return (

        <div className=" container mx-auto p-3 border-2">
            <Slider></Slider>
            {/*  */}

            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-blue-400"><span style={{ color: 'red', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Art', '&', 'Craft ', 'Painting']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span> Section</h2>
                <Fade direction="right">
                    <p className=" text-base lg:text-xl font-medium">Welcome to our Craft Items Section, where creativity knows no bounds! Whether you are a seasoned crafter or just starting on your DIY journey, you have come to the right place. Here, you will find everything you need to unleash your imagination and bring your artistic visions to life.</p>
                </Fade>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 lg:my-10 ">
                {
                    crafts.slice(0, 6).map(craft => <CraftCard
                        key={craft._id}
                        craft={craft}
                    ></CraftCard>)
                }
            </div>
            {/* Art & Craft section */}
            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-orange-500"><span style={{ color: 'green', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Art', '&', 'Craft ', 'Categories']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span> Section</h2>
                <Fade direction="right">
                    <p className=" lg:text-xl font-medium">Art and craft items encompass a vibrant world of materials and tools that fuel creativity and expression across various mediums. From traditional painting and drawing to modern digital art and intricate crafting, these items form the backbone of artistic endeavors worldwide.</p>
                </Fade>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:my-10 ">
                {
                    item.map(aCraft => <AllCraftData
                        key={aCraft._id}
                        aCraft={aCraft}
                    >
                    </AllCraftData>)
                }
            </div>
            {/* <div>
                {
                    item.map(cCraft => <CateDetails
                    key={cCraft._id}
                    cCraft={cCraft}
                    >
                    </CateDetails> )
                }
            </div> */}
            {/* service section */}
            <div className=" text-center mx-auto mt-6 mb-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-purple-500 " data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">Our Services</h2>
                <p className=" text-base lg:text-xl font-medium">Each service should be described in detail, emphasizing the value it brings to your clients and how it sets your residential home agency apart from competitors. Including testimonials or case studies can also help demonstrate your expertise and the positive outcomes you have achieved for your clients.</p>
            </div>
            <Service></Service>
            {/* About us */}

            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-orange-800 " data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">About US</h2>
                <p className=" text-base lg:text-xl font-medium" data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">What Our <span style={{ color: 'red', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Customers', 'Say', 'About ', 'Us']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span></p>
            </div>
            <About></About>
        </div>
    );
};

export default Home;