const DonationTheme = () => {
    return (
        <section data-aos="fade-up"
         className="border-4 border-[rgb(14,165,233)]  py-16 px-4 mb-20 rounded-xl">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Our goal is to stand by the underprivileged people of society through winter donations. With your help, we can support them during the winter season.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Winter Clothing Collection</h3>
                        <p className="text-gray-600">
                            We collect winter clothing and deliver them to the poor. Your donations could include coats, sweaters, gloves, etc.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Helping the Homeless</h3>
                        <p className="text-gray-600">
                            We start new initiatives daily to help the poor during the winter. Your donations will be of great assistance to them.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Technology and Education</h3>
                        <p className="text-gray-600">
                            In addition to winter donations, we also conduct educational activities and provide assistance through technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationTheme;
