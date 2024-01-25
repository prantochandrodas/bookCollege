import { useQuery } from "@tanstack/react-query";



const Testimonials = () => {

    const { data: testiCollege = [], isLoading, refetch } = useQuery({
        queryKey: ['testiCollege'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/colleges`);
            const data = await res.json();
            return data;
        }
    });
  
    return (
       <div className="lg:mt-40 mt-20">
        <h1 className="text-2xl text-center font-bold mb-10">What Students Says About University</h1>
         <div className="[column-fill:_balance]  sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 w-[92%] mx-auto">
            {
                testiCollege?.slice(0,2)?.map(college => college?.reviewDetails?.map((review, i) => <div key={i} className="mb-8 rounded-lg bg-[#f5f5f5] p-6 shadow-sm sm:p-8 sm:break-inside-avoid">
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
                ))
            }
        </div>
       </div>
    );
};

export default Testimonials;