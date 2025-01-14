import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Successfully logged out!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>Home</NavLink></li>

            <li><NavLink to="/Donate" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>Donation Campaigns</NavLink></li>

            <li><NavLink to="/Help" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>How to Help</NavLink></li>

            <li><NavLink to="/Dashboard" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>Dashboard</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl bg-[rgb(14,165,233)] text-white">Winter-Donate</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>Home</NavLink></li>

          <li><NavLink to="/Donate" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>Donation Campaigns</NavLink></li>

          <li><NavLink to="/Help" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>How to Help</NavLink></li>

          <li><NavLink to="/Dashboard" className={({ isActive }) => isActive ? "bg-[rgb(14,165,233)] text-white" : "text-gray-600"}>Dashboard</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {
          user ? (
            <>
              {user.photoURL ? (
                <img src={user.photoURL} alt="User Avatar" className="h-14 w-14 rounded-full" />
              ) : (
                <div className=" h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white">No Photo</span>
                </div>
              )}
              <button onClick={handleLogout} className="w-[80px] bg-[rgb(14,165,233)] text-white btn">LogOut</button>
            </>
          ) : (
            <Link to='/Login' className="w-[80px] btn bg-[rgb(14,165,233)] text-white">Login</Link>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
