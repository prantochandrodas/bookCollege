import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import CollegeDetailsReview from "../CollegeDetailsReview/CollegeDetailsReview";
import EventDetails from "../EventDetails/EventDetails";
import { useLoaderData } from "react-router-dom";
import AddReviewModal from "../AddReviewModal/AddReviewModal";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";


const MyCollege = () => {
    const admission = useLoaderData();
    // const [CollegesData, setDatas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    // const [loading, setLoading] = useState(false);

    const { data: CollegesData = [], isLoading, refetch } = useQuery({
        queryKey: ['CollegesData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/findCollege?name=${admission?.college}`);
            const data = await res.json();
            return data;
        }
    });
    // useEffect(() => {
    //     setLoading(true);
    //     fetch(``)
    //         .then(res => res.json())
    //         .then(result => {
    //             setDatas(result)
    //             setLoading(false);
    //         })
    // }, [admission?.college]);
    // console.log(showModal)

    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            {
                CollegesData?.length == 0 ? <div className="h-[100vh] flex items-center justify-center">
                    <h1 className="font-bold text=2xl text-center text-4xl">Get your admission</h1>
                </div> :
                    <div>
                        <div style={{ backgroundImage: `url(${CollegesData?.collegeImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-[500px] imgdark mb-10 bg-[black] object-cover  flex flex-col items-center '>
                        </div>
                        <div className="college-content pTagFont w-[80%] mx-auto">
                            <div className="college-content-text lg:pt-[50px] md:pt-0 pt-[100px]">
                                <h3 className="lg:text-4xl text-2xl text-center text-white font-bold">{CollegesData?.collegeName}
                                    <br />
                                </h3>
                                <div className="borderdiv"></div>
                                <p className='text-[16px] tracking-wide lg:text-[20px] mt-4 text-white text-center'>University is not just a destination; it's a transformative journey where challenges <br /> become stepping stones, knowledge becomes power, and dreams find their wings.</p>
                            </div>
                        </div>

                        <div className="lg:flex lg:justify-between  lg:items-center w-[90%] mx-auto">
                            <div className="lg:mr-[100px] mr-2">
                                <h2 className="text-2xl pTagFont font-bold mb-10">About {CollegesData?.collegeName}</h2>
                                <p className="lg:text-lg text-[12px] text-justify">{CollegesData?.collegeDetails}</p>
                            </div>
                            <img className="lg:w-[500px] w-[100%] mt-3 lg:mt-0" src="https://houseofvolunteers.org/wp-content/uploads/2019/02/DU-Orientation.jpg" alt="" />
                        </div>

                        <div className='w-[88%] mx-auto lg:mb-32 mb-[600px]  relative mt-10'>
                            <div className='border-[8px] rounded-[10px] border-[#1b96cc] relative w-[100%] h-[327px] lg:w-[450px] lg:h-[450px]'>
                                <img src="https://www.shutterstock.com/image-photo/notepad-spring-text-on-page-600nw-2350727117.jpg" className='lg:h-[100%] w-[100%] left-[5%] top-[10%] h-[96%]  absolute lg:left-[50px] lg:top-[70px] lg:w-[450px]' alt="" />
                                <div className='bg-[#1b96cc] p-4 absolute lg:top-[300px] top-[100%] left-[25%] w-[200px] lg:left-[350px]'>
                                    <h1 className='lg:text-3xl  semibold text-white block'>Admission process</h1>
                                </div>
                            </div>
                            <div className='lg:w-[400px] top-[105%] absolute lg:left-[60%] lg:top-[0%]'>
                                <h1 className="">How to get addmission</h1>
                                <h1 className='lg:text-2xl text-xl font-bold mb-5'>Admission Process of {CollegesData?.collegeName}.</h1>
                                <p className='text-justify text-[12px] lg:text-[16px]'>
                                    {CollegesData?.admissionProcess}
                                </p>
                            </div>

                            <div className="mt-[200px]">
                                <h1 className="pTagFont text-4xl text-center my-10">Events</h1>

                                <div className="grid lg:grid-cols-2 pTagFont grid-col-1 gap-10">
                                    {
                                        CollegesData?.eventsDetails?.map((event, i) => <EventDetails
                                            key={i}
                                            event={event}
                                        ></EventDetails>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="lg:mt-40 mt-20 pTagFont mb-10">
                            <h1 className="text-2xl text-center font-bold mb-10 pTagFont">What Students Says About University</h1>
                            <div className="w-[92%] mb-10 mx-auto">
                                {
                                    showModal ? <AddReviewModal
                                    id={CollegesData?._id}
                                    refetch={refetch}
                                        setShowModal={setShowModal} /> : <></>
                                }

                                <button onClick={() => setShowModal(!showModal)} className="px-[20px] py-[10px] text-white bg-green-500">Add Review</button>
                            </div>
                            <div className="[column-fill:_balance]  sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 w-[92%] mx-auto">
                                {
                                    CollegesData?.reviewDetails?.map((review, i) => <div key={i} className="mb-8 rounded-lg bg-[#f5f5f5] p-6 shadow-sm sm:p-8 sm:break-inside-avoid">
                                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                                            {review?.details}
                                        </p>
                                        <div className="flex items-center mt-8 -mx-2">
                                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={review?.profileLogoimage} alt />
                                            <div className="mx-2">
                                                <h1 className="font-semibold text-gray-800 dark:text-white">{review?.name}</h1>
                                                {/* <span className="text-sm text-gray-500 dark:text-gray-400">{CollegesData?.map(college => college?.collegeName)}</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyCollege;