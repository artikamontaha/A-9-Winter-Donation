import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../../firebase.config";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email address.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!");
                setEmail("");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
                <form onSubmit={handleResetPassword} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Reset Password</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-6 flex gap-5">
                        <button type="submit" className="btn bg-[rgb(14,165,233)] text-white">
                            Send Reset Link
                        </button>
                        <Link type="submit" to='/Login' className="btn bg-[rgb(14,165,233)] text-white">
                            Go to Login Page
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
