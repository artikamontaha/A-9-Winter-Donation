import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <section data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" className="bg-gray-200 rounded-xl mt-20 mb-20 py-12 px-6 md:px-20">

            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
                transition={{ duration: 1 }} // Animation duration
            >
                            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-primary border-b-2 border-dashed border-[rgb(14,165,233)]">About Us</h2>
                <p className="text-lg mb-4 text-gray-700">
                    Our mission is to provide humanitarian support with empathy and dignity. We strive to create a compassionate society through impactful contributions.
                </p>
                <p className="text-lg text-gray-700">
                    Donations help us deliver essential services such as food, clothing, and shelter to those in need. Your contribution makes a lasting impact on their lives.
                </p>
            </div>

            </motion.div>
        </section>
    );
};

export default AboutUs;