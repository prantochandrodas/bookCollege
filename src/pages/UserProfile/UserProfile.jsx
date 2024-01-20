import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
const UserProfile = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <div className="p-[20px] pt-[150px] drop-shadow-xl min-h-screen lg:min-h-full md:min-h-full lg:w-[40%] md:w-[40%] w-[100%] mx-auto lg:bg-white  bg-[rgba(250,250,250,255)]">
                <div className="flex my-3 items-center justify-end">
                    <div className="text-gray-400 lg:text-[24px] text-[15px]"><img src="https://cdn-icons-png.flaticon.com/512/6815/6815140.png" className="w-[50px]" alt="" /></div>
                    <p style={{ fontFamily: 'Poppins' }} className="ml-2 lg:text-[24px] text-[15px] hover:text-red-400">Logout</p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <img className="object-cover w-24 ring ring-blue-500 h-24 rounded-full" src={data?.photo} alt="" />
                    <p className="mt-4 text-[25px]" style={{ fontFamily: 'Rubik' }}>{data?.name}</p>
                </div>

                <div className="flex my-3 items-center">
                    <div className="text-gray-400 lg:text-[24px] text-[15px]"><img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" className="w-[30px]" alt="" /></div>
                    <p style={{ fontFamily: 'Rubik' }} className="ml-2 lg:text-[24px] text-[15px]">Name : {data?.name}</p>
                </div>
                <div className="flex my-3 items-center">
                    <div className="text-gray-400 lg:text-[24px] text-[15px]"><img src="https://www.seekpng.com/png/full/93-934527_officelukov-design-com-red-envelope-icon-png.png" className="w-[30px]" alt="" /></div>
                    <p style={{ fontFamily: 'Rubik' }} className="ml-2 lg:text-[24px] text-[15px]">Email : {data?.email}</p>
                </div>
                <div className="flex my-3 items-center">
                    <div className="text-gray-400 lg:text-[24px] text-[15px]"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQb7Mh-uvDZG18imtBD5yCqPTnwW4JZptHj5-2Po-8hPRKN-L1qXKGdpq24cov4J4rSHY&usqp=CAU" className="w-[30px]" alt="" /></div>
                    <p style={{ fontFamily: 'Rubik' }} className="ml-2 lg:text-[24px] text-[15px]">Address : {data?.address}</p>
                </div>
                <div className="flex my-3 items-center">
                    <div className="text-gray-400 lg:text-[24px] text-[15px]"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OqGvFbIQxaLmDEN5wQnFG3taVoTHf579B_8im4_g4X22oYOsRZ3S7K85EJqB40M0k_s&usqp=CAU" className="w-[30px]" alt="" /></div>
                    <p style={{ fontFamily: 'Rubik' }} className="ml-2 lg:text-[24px] text-[15px]">University : {data?.university}</p>
                </div>
                <div className="flex mt-10 items-center justify-center">
                    <button className="w-[300px]  bg-green-400 text-white px-[20px] py-[10px] rounded">Edit Details</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;