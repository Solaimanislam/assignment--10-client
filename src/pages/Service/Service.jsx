import 'animate.css';

const Service = () => {
    return (
        <div className="hero lg:my-8">
            <div className="hero-content p-0 flex-col lg:flex-row">
                <div className="" data-aos="zoom-in-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <img src="https://i.ibb.co/qy7Xdd0/ser1.jpg" className="max-w-sm  w-auto lg:h-[400px] rounded-lg shadow-2xl" />
                </div>
                <div className=" lg:w-[400px] w-auto">
                    <h1 className=" text-3xl lg:text-5xl font-bold text-pink-400  " data-aos="zoom-in-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">Comfort is Our Top Priority for Your</h1>
                    <p className="py-6 text-lg text-amber-800" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">We believe that finding your dream home should be a stress-free and enjoyable experience. That is why our team is dedicated to providing personalized service every step of the way. From understanding your unique needs and preferences to guiding you through the home buying or renting process, we are here to make sure you find a home that feels just right for you.</p>
                    <button className="btn btn-outline btn-secondary" data-aos="zoom-out-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;