import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../../firebase.config';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { user, setUser } = useContext(AuthContext);
    const [newName, setNewName] = useState('');
    const [newPhotoURL, setNewPhotoURL] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const currentUser = auth.currentUser;

            if (!currentUser) {
                throw new Error('No user logged in');
            }

            await updateProfile(currentUser, {
                displayName: newName,
                photoURL: newPhotoURL
            });

            setUser({
                ...user,
                displayName: newName,
                photoURL: newPhotoURL
            });

            toast.success('Profile updated successfully!');
            setIsEditing(false);
        } catch (error) {
            toast.error('Error updating profile: ' + error.message);
        }
    };

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

            <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn bg-[rgb(14,165,233)] text-white mt-4"
            >
                {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>

            {isEditing && (
                <form onSubmit={handleUpdateProfile} className="mt-4 flex flex-col">
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="input input-bordered mt-2"
                        placeholder="Update Name"
                    />
                    <input
                        type="text"
                        value={newPhotoURL}
                        onChange={(e) => setNewPhotoURL(e.target.value)}
                        className="input input-bordered mt-2"
                        placeholder="Update Photo URL"
                    />
                    <button type="submit" className="btn bg-[rgb(14,165,233)] text-white mt-4">
                        Update Profile
                    </button>
                </form>
            )}
        </div>
    );
};

export default Dashboard;
