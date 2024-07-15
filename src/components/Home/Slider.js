import Slider from "react-slick";
import slide1 from "./assets/slideImage.png";
import banner1 from "./assets/sliderBannerImgs/Banner 1.jpg";
import banner2 from "./assets/sliderBannerImgs/Banner 2.jpg";
import banner3 from "./assets/sliderBannerImgs/banner 3.jpg";
import banner4 from "./assets/sliderBannerImgs/Banner 4.jpg";
import slideImg from "../../pages/locations/heroLocation.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { NavLink } from "react-router-dom";
const Slides = () => {
  const settings = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
    centerPadding: "0px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="slick-dots-container">
        <ul style={{ padding: "0", margin: "0" }}>{dots}</ul>
      </div>
    ),
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slide slide-text-readable">
          <img src={banner1} id="img1" className="img-fluid" alt="Slide 1" />
          <div className="overlay">
            <h2 className="  mrDafoeFont ">Be The Light</h2>
            <p>An experiential Happiness Destination by Mountain View </p>
            <button className="rounded-pill">
              <NavLink to="/about" className="mainColor text-decoration-none ">
                Our Story
              </NavLink>
            </button>
          </div>
        </div>
        <div className="slide slide-text-readable">
          <img src={banner2} id="img2" className="img-fluid" alt="Slide 2" />
          <div className="overlay">
            <h2 className="  mrDafoeFont ">The science of Happiness</h2>
            <p>Based on the Science of Happiness by Jenn Lim</p>
            <button className="rounded-pill">
              <NavLink to="/about" className="mainColor text-decoration-none ">
                Know More
              </NavLink>
            </button>
          </div>
        </div>
        <div className="slide slide-text-readable">
          <img src={banner3} id="img3" className="img-fluid" alt="Slide 3" />
          <div className="overlay">
            <h2 className="  mrDafoeFont ">Immersive Experiences</h2>
            <p>
              Variety of workshops, events, developmental activities and
              happiness coaching sessions
            </p>
            <button className="rounded-pill">
              <NavLink
                to="/experience"
                className="mainColor text-decoration-none "
              >
                Experiences
              </NavLink>
            </button>
          </div>
        </div>
        <div className="slide slide-text-readable">
          <img src={banner4} id="img4" className="img-fluid" alt="Slide 2" />
          <div className="overlay">
            <h2 className="  mrDafoeFont ">Measure your Happiness </h2>
            <p>Take the survey to understand your current Happiness Level</p>
            <button className="rounded-pill">
              <a
                className="text-decoration-none mainColor"
                target="_blank"
                rel="noreferrer"
                href="https://beyondhappiness.typeform.com/survey"
              >
                Take the Survey
              </a>
            </button>
          </div>
        </div>
      </Slider>
      {/* <div className="overlay">
        <h2 className="  mrDafoeFont ">Be The Light</h2>
        <p>We inspire towards meaningful happy communities</p>
        <button className="rounded-pill">Curious for more ?</button>
      </div> */}
    </div>
  );
};

export default Slides;
