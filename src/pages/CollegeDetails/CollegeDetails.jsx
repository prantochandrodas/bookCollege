import { useLoaderData } from "react-router-dom";
import './CollegeDetails.css'
import EventDetails from "../EventDetails/EventDetails";
import CollegeDetailsReview from "../CollegeDetailsReview/CollegeDetailsReview";

const CollegeDetails = () => {
    const data = useLoaderData();
    
    console.log(data);
    return (
        <div>
            <div style={{ backgroundImage: `url(${data?.collegeImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-[500px] imgdark mb-10 bg-[black] object-cover  flex flex-col items-center '>
            </div>
            <div className="college-content pTagFont w-[80%] mx-auto">
                <div className="college-content-text lg:pt-[50px] md:pt-0 pt-[100px]">
                    <h3 className="lg:text-4xl text-2xl text-center text-white font-bold">{data?.collegeName}
                        <br />
                    </h3>
                    <div className="borderdiv"></div>
                    <p className='text-[16px] tracking-wide lg:text-[20px] mt-4 text-white text-center'>University is not just a destination; it's a transformative journey where challenges <br /> become stepping stones, knowledge becomes power, and dreams find their wings.</p>
                </div>
            </div>

            <div className="lg:flex lg:justify-between  lg:items-center w-[90%] mx-auto">
                <div className="lg:mr-[100px] mr-2">
                    <h2 className="text-2xl pTagFont font-bold mb-10">About {data?.collegeName}</h2>
                    <p className="lg:text-lg text-[12px] text-justify">{data?.collegeDetails}</p>
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
                    <h1 className='lg:text-2xl text-xl font-bold mb-5'>Admission Process of {data?.collegeName}.</h1>
                    <p className='text-justify text-[12px] lg:text-[16px]'>
                        {data?.admissionProcess}
                    </p>
                </div>

                <div className="mt-[200px]">
                    <h1 className="pTagFont text-4xl text-center my-10">Events</h1>

                    <div className="grid lg:grid-cols-2 pTagFont grid-col-1 gap-10">
                        {
                            data?.eventsDetails?.map((event, i) => <EventDetails
                                key={i}
                                event={event}
                            ></EventDetails>)
                        }
                    </div>
                </div>
            </div>
            <CollegeDetailsReview name={data?.collegeName} review={data?.reviewDetails} />
        </div>
    );
};

export default CollegeDetails;