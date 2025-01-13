import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth"; 
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;


        if (password.length < 6) {
            toast.error('Password should be 6 characters or longer');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('At least one uppercase, one lowercase, one number, one special character');
            return;
        }


        createUser(email, password)
            .then(async (result) => {
                const user = result.user;

                await updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL || 'default-photo-url',
                });

                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photoURL || 'default-photo-url',
                });

                toast.success('Registered successfully!');
                e.target.reset();
                navigate('/');
            })
            .catch((error) => {
                console.log('ERROR', error.message);
                toast.error(error.message);
            });
    };

    return (
        <div className="items-center min-h-screen flex flex-col justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="font-bold items-center justify-center flex text-3xl">Register Your Account</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="Enter Your Photo-URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder="password"
                        className="input input-bordered" required />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className='btn btn-xs absolute right-2 top-12'>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[rgb(14,165,233)] text-white">Register</button>
                    </div>

                    <p>Already Have An Account? <Link className="text-[rgb(14,165,233)] font-bold underline" to='/Login'>Login Here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
