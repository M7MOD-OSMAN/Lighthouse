import { Container, Row } from "react-bootstrap";
import Slider from "./Slider";
import homeIntroImg from "./assets/Jin-limm.png";
import "./Home.css";
import { NavLink } from "react-router-dom";

import Slides from "./Slider2";
import BrandLogos from "./BrandLogos";
import imgCol1 from "./assets/Replacement-Rezied.jpg";
import imgCol2 from "./assets/imgCollection2.png";
import imgCol3 from "./assets/imgCollection3.png";
import imgCol4 from "./assets/imgCollection4.png";
import imgCol5 from "./assets/imgCollection5.png";
const Home = () => {
  return (
    <main className="">
      <Slider />
      <section className="home-about">
        <Row className="p-4">
          <div className="col-12 col-md-7 px-2 px-md-5">
            <p className="lhStory">The Lighthouse by Mountain View</p>
            <h2 className="">An experiential happiness destination </h2>

            <p className="fw-bold">
              In a new effort to enable its community and support its pursuit of
              meaningful happiness, Mountain View introduces its latest
              community enablement innovation, The Lighthouse, which offers an
              experiential journey that is entirely based on the science of
              happiness. Inspired by Jenn Lim, CEO of Delivering Happiness (DH)
              Global, and her book Beyond Happiness, The Lighthouse paves the
              participants' paths toward meaningful happiness by adopting the
              Five Truths of Happiness across every experience.
            </p>

            <button className="rounded-pill border-0">
              <NavLink to="/about" className="text-decoration-none text-white">
                Read More
              </NavLink>
            </button>
          </div>
          <div className="order-first mb-5 order-md-last col-12 col-md-5">
            <img
              src={homeIntroImg}
              className="img-fluid w-100 h-100"
              alt="lady With Painting"
            />
          </div>
        </Row>
      </section>
      <Slides />
      <section className="newsletter mb-4 p-2">
        <div className="container">
          <Row className="p-2 p-md-4 text-white">
            <div className="col-12 col-md-6 mb-3 text-center text-md-start">
              <p className="m-0">Stay Updated</p>
              <h2 className=" fs-1 fw-bold">Subscibe to our newsletter</h2>
            </div>
            <div className="col-12 col-md-6">
              <br className="d-none d-md-block" />

              <form className="">
                <div className="form-group col-12">
                  <div className="search-container">
                    <input
                      type="text"
                      className="search-box rounded-pill px-3 "
                      placeholder="Email Address"
                    />
                    <button className="search-button rounded-pill">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Row>
        </div>
      </section>
      <section>
        <Container>
          <Row className="partners text-center">
            <h4 className="mb-md-5 mb-3">The Lighthouse Partners</h4>
          </Row>
          <Row className="overflow-hidden">
            <BrandLogos />
          </Row>
        </Container>
      </section>
      <section className="container-fluid p-0 mb-5">
        <div>
          <Row className="p-0">
            <div className="col-12 p-0 col-md-6">
              <img
                src={imgCol1}
                className="img-fluid w-100 h-100"
                alt="Group of women is having a relaxing session"
              />
            </div>
            <div className="col-12 p-0 col-md-6">
              <Row className="p-0">
                <div className="col-12 p-0 col-md-6">
                  <img
                    src={imgCol2}
                    className="img-fluid w-100 h-100"
                    alt="Group of women is having a relaxing session"
                  />
                </div>
                <div className="col-12 p-0 col-md-6">
                  <img
                    src={imgCol3}
                    className="img-fluid w-100 h-100"
                    alt="Group of women is having a relaxing session"
                  />
                </div>
              </Row>
            </div>
          </Row>
          <Row className="p-0">
            <div className="col-12 p-0 col-md-4">
              <img
                src={imgCol4}
                className="img-fluid w-100 h-100"
                alt="Group of women is having a relaxing session"
              />
            </div>
            <div className="col-12 p-0 col-md-8">
              <img
                src={imgCol5}
                className="img-fluid w-100 h-100"
                alt="Group of women is having a relaxing session"
              />
            </div>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Home;
