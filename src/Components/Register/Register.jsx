import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="items-center min-h-screen flex flex-col justify-center">
            <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
                <form className="card-body">
                <h1 className="font-bold items-center justify-center flex text-3xl">Register Your Account</h1>

                    {/* name form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>

                    {/* photo form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" placeholder="Enter Your Photo-URL" className="input input-bordered" required />
                    </div>

                    {/* email form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>

                    {/* password form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
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