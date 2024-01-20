import './HomeBanner.css'
import vide from '../../assets/HomeBanner/Mississippi State University 2019 National Commercial.mp4'

const HomeBanner = () => {
   
    return (
        <div>
            <section className="home h-[600px] lg:px-10 lg:h-[98vh] md:h-[50vh] pt-10 p-[20px] md:pt-20 lg:pt-40" id="home">
                <video autoPlay loop muted playsInline src={vide} className='back-video'></video>
               
                <div className="content lg:pt-[50px] md:pt-0 pt-[100px]">
                    <h3 className="lg:text-4xl text-2xl text-white font-bold">Discover Your Future: <br /> Find Your Perfect College Match Today!
                        <br />
                        Your Path to Success Starts Here.</h3>
                    <p className='text-[12px] lg:text-[18px] mt-4 text-white'>Uncover Opportunities, Navigate Choices, and Excel.
                      <br />  Empowering Your Journey to Higher Education Excellence.
                      <br />  Begin Your Quest for the Ideal College Experience!</p>


                    <div className="relative mt-8 w-[70%] lg:w-[400px]">
                        <label htmlFor="Search" className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for colleges..."
                            className="w-full ps-2 rounded-md border-gray-200 lg:py-2.5 py-[5px] pe-10 shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button type="button" className="text-gray-600 hover:text-gray-700">
                                <span className="sr-only">Search</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default HomeBanner;