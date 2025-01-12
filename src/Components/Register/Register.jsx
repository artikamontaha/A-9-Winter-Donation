import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

    const navigate = useNavigate();
    const { createUser, setUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                toast.success('register')
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log('ERROR', error.message)
                toast.error(error.message)
            })

    }


    return (
        <div className="items-center min-h-screen flex flex-col justify-center">
            <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="font-bold items-center justify-center flex text-3xl">Register Your Account</h1>

                    {/* name form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>

                    {/* photo form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter Your Photo-URL" className="input input-bordered" required />
                    </div>

                    {/* email form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>

                    {/* password form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-[rgb(14,165,233)] text-white">Register</button>
                    </div>


                    <p>Already Have An Account? <Link className="text-[rgb(14,165,233)] font-bold underline" to='/Login'>Login Here</Link></p>
                </form>

                <div className="mb-4 flex justify-center items-center">
                    <button className="btn w-[300px] flex items-center justify-center">
                        <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />
                        Register With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;