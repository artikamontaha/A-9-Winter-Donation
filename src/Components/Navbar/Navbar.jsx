import { Link } from "react-router-dom";

const Navbar = () => {
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
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Donate">Donation Campaigns</Link></li>
            <li><Link to="/Help">How to Help</Link></li>
            <li><Link to="/DashBoard">DashBoard</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl bg-[rgb(14,165,233)] text-white">Artika</Link>
        </div>
      <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
    <li>
      <Link 
        to="/" 
        className={({ isActive }) => isActive ? "bg-red-600" : ""}
      >
        Home
      </Link>
    </li>
    <li>
      <Link 
        to="/Donate" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Donation Campaigns
      </Link>
    </li>
    <li>
      <Link 
        to="/Help" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        How to Help
      </Link>
    </li>
    <li>
      <Link 
        to="/DashBoard" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        DashBoard
      </Link>
    </li>
  </ul>
</div>

      <div className="navbar-end gap-2">
        <Link to="/Login" className="btn bg-[rgb(14,165,233)] text-white">Login</Link>
        <Link to="/Register" className="btn bg-[rgb(14,165,233)] text-white">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
