import { useLoaderData } from "react-router-dom";
import SingleNewsCart from "../SingleNewsCart/SingleNewsCart";

const Donate = () => {
    const donate = useLoaderData();
    

    return (
        <div>
            <h1 className="text-5xl text-center font-bold my-7 border-b-2 border-dashed border-[rgb(14,165,233)]  mx-auto pb-3 mb-12">
                Donation Campaigns
            </h1>

            <div>
                {
                    donate.map(singelNews => <SingleNewsCart key={singelNews.id} donate={singelNews}></SingleNewsCart>)

                }
            </div>
        </div>


    );
};

export default Donate;
