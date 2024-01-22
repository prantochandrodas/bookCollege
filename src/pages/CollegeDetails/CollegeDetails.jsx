import { useLoaderData } from "react-router-dom";
import './CollegeDetails.css'

const CollegeDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div style={{ backgroundImage: `url(${data?.collegeImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-[400px] imgdark mb-10 bg-[black] object-cover  flex flex-col items-center '>
            </div>
            <div className="college-content">
                <div className="flex justify-center -mt-12">
                    <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={data.collegeIcon} />
                </div>
                <h1 className="text-white text-center text-2xl font-bold">{data?.collegeName}</h1>
            </div>
        </div>
    );
};

export default CollegeDetails;