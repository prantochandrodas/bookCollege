import { useQuery } from "@tanstack/react-query";
import HomeCollege from "../HomeCollege/HomeCollege";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const AllColleges = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    const [CollegesData, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    // modal 
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/allProduct?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(result => {
                console.log(result.result)
                setDatas(result)
                setLoading(false);
            })
    }, [page, size]);
    const newpages = Math.ceil(CollegesData.count / size);
    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 block gap-10 bg-gray-4 mx-[20px] lg:my-20 md:my-10 my-10">
                    {
                        CollegesData?.result?.map(colleges => <HomeCollege
                            key={colleges._id}
                            colleges={colleges}
                        ></HomeCollege>)
                    }
                </div>
                <div className='w-[90%] mx-auto my-4'>
                    <p className='font-bold text-xl'>Current Selected Page : {page}</p>
                   


                    <div className="w-full bg-white dark:bg-gray-800">
                        <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:space-y-0 ">
                            {
                                newpages >= 0 ? [...Array(newpages).keys()]?.map(number => <div key={number} className="-mx-2">
                                <a href="#" key={number} className={page === number ? 'inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg bg-gray-100 dark:text-white dark:hover:bg-gray-700' : 'inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'} onClick={() => setPage(number)}>
                                    {number}
                                </a>
                            </div>

                                ) :
                                    <></>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllColleges;