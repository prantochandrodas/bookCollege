import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";


const Admission = () => {
    const [signUpError, setSignUpError] = useState('');
    const [loading, SetLoading] = useState(false);
    const imgHostKey = import.meta.env.VITE_imgbb_key;
    const { user } = useContext(AuthContext);
    const { data: allColleges = [], isLoading, refetch } = useQuery({
        queryKey: ['allColleges'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/colleges`);
            const data = await res.json();
            return data;
        }
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handelAdmission = (data) => {
        setSignUpError('')
        SetLoading(true);
        const image = data.photo[0];
        const formData = new FormData();

        console.log(formData)
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData.data.url);
                const admittion = {
                    // collegeId:data
                    photo: imageData.data.url,
                    Candidate_Name: data.Candidate_Name,
                    college: data.College,
                    Candidate_Email: data.Candidate_Email,
                    phone: data.phone,
                    address: data.address,
                    date: data.Date,
                    userEmail: user?.email
                }
                fetch('http://localhost:5000/addmition', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(admittion)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result == false) {
                            toast.error('You have already took admission', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                // transition: Bounce,
                            });
                        }
                        if(result[1].acknowledged==true){
                            toast.success('Admission Sucessful', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                });
                        }
                        reset();
                    })
            })
    }
    console.log(allColleges);
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className="lg:my-10 my-40">
            <h1 className="text-4xl text-center font-bold">Get your addmition</h1>
            <div className="bg-white w-[90%] mx-auto shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">

                <form
                    onSubmit={handleSubmit(handelAdmission)}
                    className="space-y-5"
                >
                    <div>
                        {signUpError && <p className='text-red-600 my-4 text-xl'>{signUpError}</p>}
                    </div>

                    <label className="mr-4">College Selection</label>
                    <select {...register("College")}>
                        {
                        allColleges && allColleges?.map(college => <option key={college?._id} value={college?.collegeName}>{college.collegeName}</option>)
                        }
                    </select>


                    {/* Candidate Name */}
                    <div>
                        <label className="font-medium">
                            Candidate Name
                        </label>
                        <input
                            {...register("Candidate_Name", { required: "Candidate_Name is required" })}
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        {errors.Candidate_Name && <p className='text-red-600'>{errors.Candidate_Name?.message}</p>}
                    </div>

                    {/* Candidate_Email */}
                    <div>
                        <label className="font-medium">
                            Candidate_Email
                        </label>
                        <input
                            {...register("Candidate_email", { required: "Candidate_email Address is required" })}
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        {errors.Candidate_email && <p className='text-red-600'>{errors.Candidate_email?.message}</p>}
                    </div>




                    <div>
                        <label className="font-medium">
                            Phone  Number
                        </label>
                        <input
                            {...register("phone", { required: "Number is required" })}
                            type="number"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>




                    {/* address */}
                    <div>
                        <label className="font-medium">
                            address
                        </label>
                        <input
                            {...register("address", { required: "address is required" })}
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        {errors.address && <p className='text-red-600'>{errors.address?.message}</p>}
                    </div>

                    <div>
                        <label className="font-medium">
                            Photo
                        </label>
                        <input
                            {...register("photo", { required: "photo is required" })}
                            type="file"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
                    </div>

                    <div>
                        <label className="font-medium">
                            Date
                        </label>
                        <input
                            {...register("Date", { required: "Date is required" })}
                            type="date"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        {errors.Date && <p className='text-red-600'>{errors.Date?.message}</p>}
                    </div>

                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign up
                    </button>

                </form>
            </div>

        </div>
    );
};

export default Admission;