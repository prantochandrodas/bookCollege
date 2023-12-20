import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const { user,logOut } = useContext(AuthContext);
    const handelLogout = () => {
        logOut()
            .then(() => {
                navigate('/signUp')
            })

    }
    return (
        <div>
            <img src={user?.photoURL} className="w-[20px]" alt="" />
            <button onClick={handelLogout}>logout</button>
        </div>
    );
};

export default Home;