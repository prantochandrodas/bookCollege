import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCollege from "../HomeCollege/HomeCollege";
import Loading from "../Loading/Loading";


const SearchColleges = () => {
    const getText = localStorage.getItem('serch_text');
    console.log(getText);
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/serch?text=${getText}`)
            .then(res => res.json())
            .then(result => {
                setDatas(result);
                setLoading(false);
            });
    }, [getText]);
   datas.map(data=>console.log(data))
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 block gap-10 bg-gray-4 mx-[20px] lg:my-20 md:my-10 my-10">
                {
                    datas?.map(colleges => <HomeCollege
                        key={colleges._id}
                        colleges={colleges}
                    ></HomeCollege>)
                }
            </div>
        </div>
    );
};

export default SearchColleges;