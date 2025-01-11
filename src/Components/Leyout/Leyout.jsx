import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Footer from "../Footer/Footer";
const Leyout = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Leyout;