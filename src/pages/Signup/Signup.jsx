import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/book-education-arrow-logo-vector-15820150.jpg'

const Signup = () => {
    return (
        <div>
            <div>
                <main className="w-full h-full flex flex-col items-center justify-center bg-white sm:px-4">
                    <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                        <div className="text-center">
                            <img src={logo} width={150} className="mx-auto" />
                            <div className="mt-5 space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">SignUp your account</h3>
                                <p className="">Do you have an account? <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-500">Login</Link></p>
                            </div>
                        </div>
                        <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">

                            <form
                                // onSubmit={handleSubmit(handelSignUp)}
                                className="space-y-5"
                            >
                                <div>
                                    {/* {signUpError && <p className='text-red-600 my-4 text-xl'>{signUpError}</p>} */}
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Name
                                    </label>
                                    <input
                                        // {...register("name", { required: "Name is required" })}
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                    {/* {errors.name && <p className='text-red-600'>{errors.name?.message}</p>} */}
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Email
                                    </label>
                                    <input
                                        // {...register("email", { required: "email Address is required" })}
                                        type="email"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                    {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Password
                                    </label>
                                    <input
                                        // {...register("password", { required: "password is required" })}
                                        type="password"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                    {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Photo
                                    </label>
                                    <input
                                        // {...register("photo", { required: "photo is required" })}
                                        type="file"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                    {/* {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>} */}
                                </div>
                                <button
                                    className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                >
                                    Sign up
                                </button>

                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Signup;