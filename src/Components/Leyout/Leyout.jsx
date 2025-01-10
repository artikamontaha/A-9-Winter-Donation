import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
const Leyout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Leyout;