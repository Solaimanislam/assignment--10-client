import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 my-7 lg:my-10 p-2" >
            <div className="card lg:w-96 h-auto bg-base-100 shadow-xl" data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img className=" h-64 w-full" src="https://i.ibb.co/9rYZknx/cus1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <Fade direction="down">
                        <h2 className="card-title">Amar Malik</h2>
                    </Fade>
                    <Fade direction="right">
                        <p>I appreciate the competitive pricing offered by SI Art & Craft. I received high-quality prints without breaking the bank.</p>
                    </Fade>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                            checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <Fade direction="up">
                        <h2 className="card-title">Software Engineer</h2>
                    </Fade>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl" data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img src="https://i.ibb.co/NWRvSLw/cus2.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <Fade direction="down">
                        <h2 className="card-title">Faizan Ali</h2>
                    </Fade>
                    <Fade direction="right">
                        <p>The attention to detail in SI Art & Craft is printing work is impressive. My prints turned out exactly as I envisioned.</p>
                    </Fade>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                            checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <Fade direction="up">
                        <h2 className="card-title">Engineer</h2>
                    </Fade>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl" data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img src="https://i.ibb.co/267VHqk/cus3.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <Fade direction="down">
                        <h2 className="card-title">Rakib Islam</h2>
                    </Fade>
                    <Fade direction="right">
                        <p>SI Art & Craft is rush printing service came in handy when I had a tight deadline. They delivered my prints promptly without compromising quality.</p>
                    </Fade>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <Fade direction="up">
                        <h2 className="card-title">Doctor</h2>
                    </Fade>
                </div>
            </div>


        </div>
    );
};

export default About;