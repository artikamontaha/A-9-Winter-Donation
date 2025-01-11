import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1600"
      className="card mb-5 bg-base-100 w-full mt-8 border-2 shadow-xl">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 5, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.postimg.cc/W1RGcm6J/cart-pic.jpg"
              alt="Shoes"
              className="rounded-xl" />
          </figure>

          <div className="card-body items-center text-center">

            <h2 className="card-title">Winter Donation – A Call for Warmth</h2>
            <p>On a freezing winter night, a little girl holds her younger brother close, trying to keep him warm. Their faces show the harsh reality of suffering and hardship. This image reminds us of the struggles faced by the underprivileged during winter. Through winter donations, we can spread warmth and love in their lives. Let’s come together and stand by them this winter. 🤝</p>
            <div className="card-actions">
              <Link to="/Donate" className="btn bg-[rgb(14,165,233)] text-white">Donate-Now</Link>
            </div>
          </div>

        </motion.div>
        {/* <div data-aos="fade-up" className="text-4xl font-bold">
  Scroll to Animate Me!
</div> */}
      </div>
    </>
  );
};

export default About;
