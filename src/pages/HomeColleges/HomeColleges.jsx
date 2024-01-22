import { useQuery } from "@tanstack/react-query";
import HomeCollege from "../HomeCollege/HomeCollege";
import { Link } from "react-router-dom";


const HomeColleges = () => {
    const { data: CollegesData = [], isLoading, refetch } = useQuery({
        queryKey: ['CollegesData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/colleges`);
            const data = await res.json();
            return data;
        }
    });
    // console.log(CollegesData);
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 block gap-10 bg-gray-4 mx-[20px] lg:my-20 md:my-10 my-10">
                {
                    CollegesData?.slice(0, 3).map(colleges => <HomeCollege
                        key={colleges._id}
                        colleges={colleges}
                    ></HomeCollege>)
                }
            </div>
            <Link to={`/allColleges`} className="flex justify-center my-10">
                 <button className="px-[20px] py-[10px] bg-green-600 text-white">See More</button>
            </Link>
        </div>
    );
};

export default HomeColleges;