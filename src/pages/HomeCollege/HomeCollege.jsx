
import { BsStar } from "react-icons/bs";
const HomeCollege = ({ colleges }) => {

    return (
        // <a href="#" className="group relative block bg-black">
        //     <img
        //         alt="Developer"
        //         src={colleges?.collegeImage}
        //         className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-50"
        //     />

        //     <div className="relative p-4 sm:p-6 lg:p-8">
        //         {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p> */}

        //         <div className="flex justify-between items-center">
        //             <p className="text-xl font-bold text-white sm:text-2xl">{colleges?.collegeName}</p>
        //             <div className="text-yellow-500 flex gap-[5px]"><BsStar /><BsStar /><BsStar /></div>
        //         </div>

        //         <div className="mt-32 sm:mt-48 lg:mt-64">
        //             <div
        //                 className="translate-y-0 transform opacity-100 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        //             >
        //                 {/* <p>
        //                     <span className="font-bold text-white">Events : </span>
        //                     <span className="text-sm text-white">{colleges.events}</span>
        //                 </p>
        //                 <p>
        //                     <span className="font-bold text-white">Sports : </span>
        //                     <span className="text-sm text-white">{colleges.sports}</span>
        //                 </p> */}
        //                 <p className="text-sm text-white my-[10px]">
        //                     {colleges.collegeDetails.slice(0,250)} <span className="font-bold">...Details</span>
        //                 </p>

        //             </div>
        //         </div>
        //     </div>
        // </a>
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img src={colleges?.collegeImage} className="h-[250px]" alt="" />
            <div className="flex justify-center -mt-12">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={colleges.collegeIcon} />
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{colleges?.collegeName}</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{colleges.collegeDetails.slice(0,250)} <span className="font-bold">...Details</span></p>
            <div className="flex justify-end mt-4">
                <a href="https://drodrik.scholar.harvard.edu/sites/scholar.harvard.edu/files/dani-rodrik/files/comment_on_penny_goldberg_et_al_-_ecta22088.pdf" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex={0} role="link">Details</a>
            </div>
        </div>

    );
};

export default HomeCollege;