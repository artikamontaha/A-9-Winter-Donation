import {  useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="flex md:mt-[200px] md:mb-[313px] flex-col justify-center items-center space-x-4">
           
            <h2 className="font-bold text-4xl text-blue-500">
                Welcome, {user?.displayName || 'Guest'}!
            </h2>

            <img
                src={user?.photoURL || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-28 h-28 rounded-full mt-4"
            />

            {/* Profile Information */}
            <div className="text-center mt-4">
                <p className="text-2xl font-semibold">Name: {user?.displayName || 'No Name Available'}</p>
                <p className="text-xl text-gray-600">Email: {user?.email || 'No Email Available'}</p>
            </div>

            {/* Update Profile Button */}
            <button
                onClick={() => navigate('/update-profile')}
                className="btn bg-[rgb(14,165,233)] text-white mt-6"
            >
                Update Profile
            </button>
        </div>
    );
};

export default Dashboard;
