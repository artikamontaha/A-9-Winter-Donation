import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Added import for icons

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false); // Added state for password visibility

    // Handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Logged in successfully!");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    // Handle Google sign-in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                setUser(result.user);
                toast.success("Successfully logged in with Google!");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="items-center min-h-screen flex flex-col justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                {/* Login Form */}
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="font-bold items-center justify-center flex text-3xl">Login Your Account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Your Password"
                            className="input input-bordered"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs absolute right-2 top-12"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <Link to="/ForgetPassword" className="label-text-alt link link-hover">
                        Forgot password?
                    </Link>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[rgb(14,165,233)]  text-white">
                            Login
                        </button>
                    </div>
                    <p>
                        Don’t Have An Account?{" "}
                        <Link className="text-[rgb(14,165,233)]  font-bold underline" to="/Register">
                            Register Here
                        </Link>
                    </p>
                </form>

                {/* Google Sign-In Button */}
                <div className="mb-4 flex justify-center items-center">
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn w-[300px] flex items-center justify-center"
                    >
                        <img
                            className="h-8 w-8 mr-2"
                            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            alt="Google Icon"
                        />
                        Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
