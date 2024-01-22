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
                 setDatas((prev)=>[...prev,...result.result])
                 setLoading(false);
             })
     }, [page, size]);
    

    const handelInfinityScroll = async () => {
       
        try {
            if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
                setPage((prev)=>prev+1) 
                // setLoading(true); 
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handelInfinityScroll);
        return()=> window.removeEventListener("scroll",handelInfinityScroll)
    }, []
    )

//   if(loading){
//     return <h1 className="text-center">loading...</h1>
//   }

console.log(CollegesData)
    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 block gap-10 bg-gray-4 mx-[20px] lg:my-20 md:my-10 my-10">
                    {
                        CollegesData?.map(colleges => <HomeCollege
                            key={colleges._id}
                            colleges={colleges}
                        ></HomeCollege>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllColleges;