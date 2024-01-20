import { Outlet } from "react-router-dom";
import HomeNavbar from "../../pages/HomeNavbar/HomeNavbar";


const Main = () => {
    return (
        <div>
            <HomeNavbar/>
            <Outlet/>
        </div>
    );
};

export default Main;