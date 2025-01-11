import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="rounded-md carousel mt-8 w-full md:h-[700px] object-cover">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.postimg.cc/TY6qgKKy/pic-1.jpg"
                    className="w-full object-cover"
                    alt="Winter Landscape"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
                    <h1 className="text-4xl font-bold">Winter Donation Campaign</h1>
                    <p className="text-lg">Help us bring warmth to those in need this winter.</p>
                    <Link to='/Donate' className="btn bg-[rgb(14,165,233)] text-white">Get Involved</Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.postimg.cc/TwB0ZQ2Q/pic-2.jpg"
                    className="w-full object-cover"
                    alt="Helping Hands"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
                    <h1 className="text-4xl font-bold">Join Our Mission</h1>
                    <p className="text-lg">Your donations make a difference in countless lives.</p>
                    <Link to='/Donate' className="btn bg-[rgb(14,165,233)] text-white">Donate Now</Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.postimg.cc/RCnXcrGY/pic-3.jpg"
                    className="w-full object-cover"
                    alt="Charity Work"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
                    <h1 className="text-4xl font-bold">Volunteer with Us</h1>
                    <p className="text-lg">Give your time and skills to support our cause.</p>
                    <Link to='Help' className="btn bg-[rgb(14,165,233)] text-white">Learn More</Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://i.postimg.cc/Nf6Dz137/pic-4.jpg"
                    className="w-full object-cover"
                    alt="Community Support"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
                    <h1 className="text-4xl font-bold">Together We Can Make a Difference</h1>
                    <p className="text-lg">Every little bit helps. Thank you for your support!</p>
                    <button className="btn bg-[rgb(14,165,233)] text-white">Support Us</button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
