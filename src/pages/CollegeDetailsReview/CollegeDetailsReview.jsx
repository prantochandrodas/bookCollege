import Slider from "react-slick";


const CollegeDetailsReview = ({ review ,name}) => {
    console.log(review)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay: true,
    //   speed: 2000,
      autoplaySpeed: 4000
    };
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        What our student saying
                    </h1>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
                    </div>
                    <Slider {...settings}>
                        {
                            review?.map((data,i)=> <div key={i} className="flex items-start  mx-auto mt-16">
                            
                            <div>
                                <p className="flex items-center text-center text-gray-500 lg:mx-8">
                                   {data?.details}
                                </p>
                                <div className="flex flex-col items-center justify-center mt-8">
                                    <img className="object-cover rounded-full w-14 h-14" src={data?.profileLogoimage} alt />
                                    <div className="mt-4 text-center">
                                        <h1 className="font-semibold text-gray-800 dark:text-white">{data?.name}</h1>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{name}</span>

                                    </div>
                                </div>
                            </div>
                        </div>)
                        }
                       
                    </Slider>
                </div>
            </section>

        </div>
    );
};

export default CollegeDetailsReview;