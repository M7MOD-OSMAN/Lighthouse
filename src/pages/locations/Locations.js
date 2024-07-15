import "./Locations.css";
import heroLocation from "./heroLocation.png";
import { Container, Row } from "react-bootstrap";

import gizaPlateau from "./Giza Plateau.png";
import rasElhikma from "./MV Ras el Heklma.png";
import icon from "./locationIcon.png";
import { useEffect } from "react";
const Locations = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <section className="mb-5">
        <div>
          <img
            className="halfHeight-hero img-fluid w-100"
            src={heroLocation}
            alt=""
          />
        </div>
      </section>
      <Container>
        <Row className="locations">
          <p className="lhStory">Find Us</p>
          <h2 className="mb-5 text-uppercase text-nowrap">
            lighthouse locations
          </h2>
        </Row>

        <Row className="text-center p-3 location-cards mb-5">
          <div className="p-2 col-12 col-md-4 mb-3 mb-md-5">
            <div className="border border-1">
              <img src={rasElhikma} height={150} alt="" />
              <h4>Mountain View Ras Elhikma</h4>
              <p className="">Visit Us Now</p>
              <div className="mb-3">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-decoration-none"
                  href="https://www.google.com/maps/place/Mountain+View+North+Coast/@31.0821701,28.0180684,15z/data=!3m1!4b1!4m6!3m5!1s0x145840abdbda9207:0xd73075b95107b09!8m2!3d31.082171!4d28.0283681!16s%2Fg%2F11bzsf4x78?entry=tts&shorturl=1"
                >
                  <span>
                    <img src={icon} width={35} height={35} alt="" />
                  </span>{" "}
                  View Location
                </a>
              </div>
            </div>
          </div>
          {/* <div className="p-2 col-12 col-md-4 mb-3 mb-md-5 ">
            <div className="border border-1">
              <img src={img2} alt="" />
              <h4>mountain view chillout park</h4>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                repellat repellendus similique libero distinctio cumque!
              </p>
              <div className="mb-3">
                <a className="" href="">
                  <span>
                    <img src={icon} width={35} height={35} alt="" />
                  </span>{" "}
                  View Location
                </a>
              </div>
            </div>
          </div> */}
          <div className="p-2 col-12 col-md-4 mb-3 mb-md-5 ">
            <div className="border border-1">
              <img src={gizaPlateau} alt="" height={150} />
              <h4>Mountain view giza plateau</h4>
              <p className="">Coming Soon</p>
              <div className="mb-3">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-decoration-none"
                  href="https://www.google.com/maps/place/Mountain+View+Giza+Plateau,+%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C+Al+Giza+Desert,+Giza+Governorate%E2%80%AD/@30.0188123,31.0821676,17z/data=!3m1!4b1!4m6!3m5!1s0x14584532323f152b:0xf355516b443ca836!8m2!3d30.0189988!4d31.0843855!16s%2Fg%2F11b8tcr7ls?entry=tts&shorturl=1"
                >
                  <span>
                    <img src={icon} width={35} height={35} alt="" />
                  </span>{" "}
                  View Location
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      {/* <div
        data-tf-widget="BSjR2nFJ"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Happiness Survey By Mountain View"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        data-tf-hidden="group1_grade="
        style={{ width: "100%", height: "600px" }}
      /> */}
    </>
  );
};

export default Locations;
