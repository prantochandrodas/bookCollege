
import { useState } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            avatar: "https://upload.wikimedia.org/wikipedia/en/c/cb/Dhaka_University_logo.svg",
            name: "Rahat Ahamed",
            title: "Dhaka University",
            quote: "I am happy with majority of my professors. I think it's a demanding course but we have alright quality of education. I also like the campus. It's not breathtaking but I feel cozy in the library and the cafe's. The clubs and societies helped me socialise during my time here. The price feels like it's a robbery tho I feel like the uni could improve on the amount of free activities, socials etc. it offers."
        },
        {
            avatar: "https://seeklogo.com/images/J/jahangirnagar-university-logo-C0F9C18D05-seeklogo.com.png",
            name: "Sadia Aktar",
            title: "Jahangirnagar University",
            quote: "I am very happy with our main lecturer. I am happy with the majority of our lecturers actually. I felt as if the workload was a bit much but that was just according to my expectations and if it were me personally I would have wanted to change the course structure a bit to focus more on neuroscience but all biomedical students essentially take the same courses in the first year so it might be compulsory knowledge for the field."
        },
        {
            avatar: "https://w7.pngwing.com/pngs/454/533/png-transparent-university-of-rajshahi-rajshahi-university-of-engineering-technology-khulna-university-rajshahi-college-university-of-chittagong-others-logo-symmetry-university.png",
            name: "Karim ahmed",
            title: "Rajshahi University",
            quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati "
        },
    ]
    const [view,setView]=useState(true);
    console.log(view)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    return (
        <div>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-indigo-600 font-semibold pb-6">What students are saying about university</h3>
                        <ul>
                            {
                                testimonials.map((item, idx) => (
                                    currentTestimonial == idx ? (
                                        <li key={idx}>
                                            <figure>
                                                <blockquote>
                                                    {
                                                        view?<p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                        “{item.quote.slice(0, 200)}<button onClick={()=>setView(!view)} className='text-blue-500'>...ReadMore</button>“
                                                    </p>:<p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                        “{item.quote}<button onClick={()=>setView(!view)} className='text-blue-500'>...show less</button>“
                                                    </p>
                                                    }
                                                    

                                                </blockquote>
                                                <div className="mt-6">
                                                    <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                    <div className="mt-3">
                                                        <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                        <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                    </div>
                                                </div>
                                            </figure>
                                        </li>
                                    ) : ""
                                ))
                            }
                        </ul>
                    </div>
                    <div className="mt-6">
                        <ul className="flex gap-x-3 justify-center">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx}>
                                        <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                            onClick={() => setCurrentTestimonial(idx)}
                                        ></button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;