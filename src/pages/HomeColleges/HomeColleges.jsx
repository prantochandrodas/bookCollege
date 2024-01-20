import { useQuery } from "@tanstack/react-query";
import HomeCollege from "../HomeCollege/HomeCollege";


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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 block gap-10 bg-gray-4 mx-[20px] lg:my-20 md:my-10 my-10">
            {
                CollegesData?.slice(0,3).map(colleges=><HomeCollege
                    key={colleges._id}
                    colleges={colleges}
                ></HomeCollege>)
            }
        </div>
    );
};

export default HomeColleges;