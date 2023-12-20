import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";


const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <img src={user?.photoURL} className="w-[20px]" alt="" />
        </div>
    );
};

export default Home;