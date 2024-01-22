import { useForm } from "react-hook-form";


const AddCollege = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handeladdCollege=()=>{

    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(handeladdCollege)}
                className="space-y-5"
            >
                
                <div>
                    <label className="font-medium">
                        Name
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                   
                </div>
                <div>
                    <label className="font-medium">
                    collegeImage
                    </label>
                    <input
                        {...register("collegeImage")}
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                   
                </div>
                <div>
                    <label className="font-medium">
                    collegeDetails
                    </label>
                    <input
                        {...register("collegeDetails")}
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                   
                </div>
                <div>
                    <label className="font-medium">
                        Email
                    </label>
                    <input
                        {...register("email", { required: "email Address is required" })}
                        type="email"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div>
                    <label className="font-medium">
                        Password
                    </label>
                    <input
                        {...register("password", { required: "password is required" })}
                        type="password"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>



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
                        University
                    </label>
                    <input
                        {...register("university", { required: "university is required" })}
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    {errors.university && <p className='text-red-600'>{errors.university?.message}</p>}
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
                <button
                    className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                >
                    Sign up
                </button>

            </form>
        </div>
    );
};

export default AddCollege;