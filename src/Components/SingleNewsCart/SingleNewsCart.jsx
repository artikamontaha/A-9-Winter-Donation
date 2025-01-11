import { useNavigate } from "react-router-dom";

const SingleNewsCart = ({ donate }) => {
    const navigate = useNavigate(); 

    const { id, image, title, description, status, contactInfo, division } = donate;

    return (
        <div className="p-5 mt-20 rounded-lg shadow-md md:flex border-2 border-dashed mb-8 gap-5">
            <div>
                <img
                    src={image}
                    alt={title}
                    className="w-[500px] border-4 object-contain h-[300px] rounded-lg mb-3 border-[rgb(14,165,233)]"
                />
            </div>
            <div className="gap-5">
                <button className="btn text-white py-1 px-3 rounded-full bg-[rgb(14,165,233)]">{status}</button>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="mb-5 mt-5">
                    <span className="font-bold">Description:</span> {description}
                </p>
                <p className="text-sm mb-5 text-gray-500">Contact: {contactInfo}</p>
                <p className="text-sm text-gray-500">Division: {division}</p>

                <button
                    onClick={() => navigate(`/donate/${id}`)}
                    className="bg-[rgb(14,165,233)] text-white btn mt-5"
                >
                    Donate
                </button>
            </div>
        </div>
    );
};

export default SingleNewsCart;
