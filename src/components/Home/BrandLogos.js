import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logos from "./LogosImport";
import "./Home.css";

const BrandLogos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    dotsClass: "green-slick slick-dots row position-relative mt-4",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="logo-container mb-3 mb-md-5 brandLogos">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item d-flex justify-content-center">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandLogos;
