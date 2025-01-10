import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="items-center min-h-screen flex flex-col justify-center">
            <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
      <form className="card-body">
        <h1 className="font-bold items-center justify-center flex text-3xl">Login Your Account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
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
          <button className="btn bg-[rgb(14,165,233)] text-white">Login</button>
        </div>
        <p>Don’t Have An Account? <Link className="text-[rgb(14,165,233)] font-bold underline" to='/Register'>Register Here</Link></p>
      </form>
    </div>   
        </div>
 );
};

export default Login;