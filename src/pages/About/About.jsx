

const About = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 my-7 lg:my-10 p-2" >
            <div className="card lg:w-96 h-auto bg-base-100 shadow-xl" data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img className=" h-64 w-full" src="https://i.ibb.co/9rYZknx/cus1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Amar Malik</h2>
                    <p>I recently had the pleasure of purchasing my dream home through SI Enterprise, and I could not be happier with my experience. From start to finish, they exceeded my expectations every step of the way.</p>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                            checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <h2 className="card-title">Software Engineer</h2>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl" data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img src="https://i.ibb.co/NWRvSLw/cus2.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Faizan Ali</h2>
                    <p>I recently relocated to the area for work and was in search of a place to call home. The team at SI Enterprise took the time to understand my unique situation and preferences, and they worked tirelessly to find a property that met my needs.</p>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                            checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <h2 className="card-title">Engineer</h2>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl" data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <figure><img src="https://i.ibb.co/267VHqk/cus3.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Rakib Islam</h2>
                    <p>As a first-time homeBuyer, I was overwhelmed by the prospect of navigating the real estate market on my own. However, from the moment I contacted SI Enterprise, I felt at ease. Their team of experts guided me through every step of the process with patience and expertise.</p>
                    <p><span className=" text-lg font-semibold">Rating:</span> <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <h2 className="card-title">Doctor</h2>
                </div>
            </div>


        </div>
    );
};

export default About;