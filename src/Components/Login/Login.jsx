import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const navgate = useNavigate();
    const {signInUser, signInWithGoogle} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('Login Successfully')
            e.target.reset
            navgate('/')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            toast.success('successfully')
            navgate('/')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    return (
        <div className="items-center min-h-screen flex flex-col justify-center">
            <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h1 className="font-bold items-center justify-center flex text-3xl">Login Your Account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
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
          <button className="btn bg-[rgb(14,165,233)] text-white">Login</button>
        </div>
        <p>Don’t Have An Account? <Link className="text-[rgb(14,165,233)] font-bold underline" to='/Register'>Register Here</Link></p>
      </form>
      <div className="mb-4 flex justify-center items-center">
                    <button onClick={handleGoogleSignIn} className="btn w-[300px] flex items-center justify-center">
                      <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />
                        Login With Google
                    </button>
                </div>
    </div>   
        </div>
 );
};

export default Login;