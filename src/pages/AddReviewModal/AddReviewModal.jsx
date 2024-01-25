import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { AuthContext } from "../Contexts/AuthProvider";

const AddReviewModal = ({ setShowModal,refetch, id }) => {
    // add review 
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelAddReview = (data) => {
        const review = {
            findId:id,
            name: user?.displayName,
            profileLogoimage: user?.photoURL,
            details: data.text
        }
        fetch('http://localhost:5000/addReview', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(result=>{
            setShowModal(false);
            refetch();
        })
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 blackdrop-blur-lg flex justify-center items-center">
            <div className="flex flex-col gap-5">
                <button onClick={() => setShowModal(false)} className="text-white text-2xl"> <AiFillCloseCircle /></button>
                <div className="bg-white shadow p-4 py-6 lg:w-[500px] w-[90%] mx-auto space-y-8 sm:p-6 sm:rounded-lg">

                    <form
                        onSubmit={handleSubmit(handelAddReview)}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Add Review
                            </label>

                            <textarea
                                {...register("text", { required: "Review is required" })}
                                name="text" id="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                cols="30"
                                rows="6" />
                            {errors.text && <p className='text-red-600'>{errors.text?.message}</p>}
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Sign up
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviewModal;