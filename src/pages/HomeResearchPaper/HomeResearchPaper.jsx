import './HomeResearchPaper.css'
import img from '../../assets/research/new.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeResearchPaper = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div>
                <div className="lg:h-[400px] h-[300px] flex justify-center items-center" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='text-center px-4'> <h1 className='researchtitle font-bold lg:text-4xl md:text-2xl text-xl text-white'>Research</h1>
                        <h1 className='text-white my-4 lg:text-lg researchDescription'>Research is the compass guiding us through the uncharted territories of knowledge, illuminating the path to understanding and progress.</h1></div>
                </div>
            </div>
          <div className='lg:w-[90%] w-[80%] mx-auto -mt-40'>
          <Slider {...settings}>
                <div className="bg-white  lg:!w-[340px] !w-[200px] !h-[200px] shadow-xl mt-4 lg:mt-0 lg:p-8 p-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Quote_Mining_Fallacy_Icon.png" className="w-[40px] lg:-mt-[50px] -mt-[30px] z-10" alt="" />
                    <h2 className="mt-[20px] lg:text-[16px] text-[12px] lg:text-normal"><span className="font-bold">Rodrik D.</span> A Comment on “Presidential Address: Demand-Side Constraints in Development: Reed.</h2>
                    <div className="flex gap-[5px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/391px-PDF_file_icon.svg.png" className="w-[25px]" alt="" />
                        <a className="inline text-[20px] text-blue-500" href="https://drodrik.scholar.harvard.edu/sites/scholar.harvard.edu/files/dani-rodrik/files/comment_on_penny_goldberg_et_al_-_ecta22088.pdf">PDF</a>
                    </div>
                </div>

                <div className="bg-white lg:!w-[340px] !w-[200px] !h-[200px] shadow-xl mt-4 lg:mt-0 lg:p-8 p-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Quote_Mining_Fallacy_Icon.png" className="w-[40px] lg:-mt-[50px] -mt-[30px]" alt="" />
                    <h2 className="mt-[20px] lg:text-[16px] text-[12px]"><span className="font-bold">Mazzucato M,</span> Rodrik D. Industrial Policy with Conditionalities: A Taxonomy and Sample Cases. 2023.</h2>
                    <div className="flex gap-[5px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/391px-PDF_file_icon.svg.png" className="w-[25px]" alt="" />
                        <a className="inline text-[20px] text-blue-500" href="https://drodrik.scholar.harvard.edu/sites/scholar.harvard.edu/files/dani-rodrik/files/mazzucato_m._rodrik_d._2023._industrial_policy_with_conditionalities_a_taxonomy_and_sample_cases.pdf">PDF</a>
                    </div>
                </div>
                <div className="bg-white lg:!w-[340px] !w-[200px] !h-[200px] shadow-xl mt-4 lg:mt-0 lg:p-8 p-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Quote_Mining_Fallacy_Icon.png" className="w-[40px] lg:-mt-[50px] -mt-[30px]" alt="" />
                    <h2 className="mt-[20px] lg:text-[16px] text-[12px]"><span className="font-bold">Mazzucato M,</span> Rodrik D. Industrial Policy with Conditionalities: A Taxonomy and Sample Cases. 2023.</h2>
                    <div className="flex gap-[5px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/391px-PDF_file_icon.svg.png" className="w-[25px]" alt="" />
                        <a className="inline text-[20px] text-blue-500" href="https://drodrik.scholar.harvard.edu/sites/scholar.harvard.edu/files/dani-rodrik/files/mazzucato_m._rodrik_d._2023._industrial_policy_with_conditionalities_a_taxonomy_and_sample_cases.pdf">PDF</a>
                    </div>
                </div>
                <div className="bg-white lg:!w-[340px] !w-[200px] !h-[200px] shadow-xl mt-4 lg:mt-0 lg:p-8 p-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Quote_Mining_Fallacy_Icon.png" className="w-[40px] lg:-mt-[50px] -mt-[30px]" alt="" />
                    <h2 className="mt-[20px] lg:text-[16px] text-[12px]"><span className="font-bold">Juhász R, Lane N, Rodrik D.</span> The New Economics of Industrial Policy. 2023.</h2>
                    <div className="flex gap-[5px]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/391px-PDF_file_icon.svg.png" className="w-[25px]" alt="" />
                        <a className="inline text-[20px] text-blue-500" href="https://drodrik.scholar.harvard.edu/sites/scholar.harvard.edu/files/dani-rodrik/files/the_new_economics_of_ip_081423.pdf">PDF</a>
                    </div>
                </div>
            </Slider>
          </div>
            <div className="lg:px-10 px-[10px] -mt-20 my-10 grid grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-4  lg:gap-10">

            </div>
        </div>
    );
};

export default HomeResearchPaper;