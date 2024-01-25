import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";


const SingelEventDetails = () => {
    const {event}=useContext(AuthContext);
    console.log(event);
    return (
        <div>
             <div className="lg:flex lg:justify-between h-[100vh]  lg:items-center w-[90%] mx-auto">
                <div className="lg:mr-[100px] mr-2">
                    <h2 className="text-2xl pTagFont font-bold mb-10">About {event?.name}</h2>
                    <p className="lg:text-lg text-[12px] text-justify">{event?.details}</p>
                </div>
                <img className="lg:w-[500px] w-[100%] mt-3 lg:mt-0" src={event?.eventimage} alt="" />
            </div>
        </div>
    );
};

export default SingelEventDetails;