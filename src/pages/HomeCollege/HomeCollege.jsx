
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const HomeCollege = ({ colleges }) => {

    return (

        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img src={colleges?.collegeImage} className="h-[250px]" alt="" />
            <div className="flex justify-center -mt-12">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={colleges.collegeIcon} />
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{colleges?.collegeName}</h2>
            <Link to={`/college/${colleges?._id}`}><p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{colleges.collegeDetails?.slice(0, 250)} <span className="font-bold">...Details</span></p></Link>
            <div className="flex justify-end mt-4">
                <Link to={`/college/${colleges?._id}`} className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex={0} role="link">Details</Link>
            </div>
        </div>

    );
};

export default HomeCollege;