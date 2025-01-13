import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex md:mt-[200px] md:mb-[313px] flex-col justify-center items-center space-x-4">
            <img
                src={user?.photoURL || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-28 h-28 rounded-full"
            />
            <span className="font-bold text-3xl">
                {user?.displayName || 'No Name Available'}
            </span>
        </div>
    );
};

export default Dashboard;
