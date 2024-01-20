import HomeBanner from "../HomeBanner/HomeBanner";
import HomeColleges from "../HomeColleges/HomeColleges";
import HomeResearchPaper from "../HomeResearchPaper/HomeResearchPaper";
import ImageGallery from "../ImageGallery/ImageGallery";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {

  return (
    <div>
      <HomeBanner />
      <HomeColleges />
      <ImageGallery/>
      <HomeResearchPaper />
      <Testimonials/>
    </div>
  );
};

export default Home;