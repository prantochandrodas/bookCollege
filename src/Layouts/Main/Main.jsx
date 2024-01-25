import { Outlet } from "react-router-dom";
import HomeNavbar from "../../pages/HomeNavbar/HomeNavbar";
import Footer from "../../pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <HomeNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;