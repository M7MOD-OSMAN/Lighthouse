import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/slider2/Event 1.jpg";
import img2 from "./assets/slider2/Event 2.jpg";
import img3 from "./assets/slider2/Event 3.jpg";
import "./Slider2.css";

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "green-slick slick-dots",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="slick-dots-container">
        <ul style={{ padding: "0", margin: "0" }}>{dots}</ul>
      </div>
    ),
  };

  const slides = [
    {
      image: img1,
      title: "Special Events",
      description: "Melouk El-le3b - By Society of Play",
      buttonTitle: "Book Now",
    },
    {
      image: img2,
      title: "Special Events",
      description: "Scout for Kids - By AlZomra",
      buttonTitle: "Learn More",
    },
    {
      image: img3,
      title: "Special Events",
      description: "Irtigalia",
      buttonTitle: "Learn More",
    },
  ];

  return (
    <div className="overflow-hidden slider2" id="slider2">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <img
                src={slide.image}
                className="img-fluid p-0"
                alt={`Slide ${index + 1}`}
              />
              <div className="overlay2">
                <h2 className="text-capitalize text-dark">{slide.title}</h2>
                <p className="mb-3">{slide.description}</p>
                {/* <button className="rounded-pill px-3 px-md-5"
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-white"
                    href="https://book.thelighthousebymv.com/v2/#book/category/4/count/1/"
                  >
                    Book Now
                  </a>
                </button> */}
                <a
                  className=" text-decoration-none text-white "
                  target="_blank"
                  rel="noreferrer"
                  href="https://book.thelighthousebymv.com/v2/#error/e404"
                >
                  <button className="rounded-pill px-3 px-md-5">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slides;
