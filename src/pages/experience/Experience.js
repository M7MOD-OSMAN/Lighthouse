import { Container, Row } from "react-bootstrap";
import heroImage from "../contact/heroContact.png";
import img1 from "./assets/facilitiesCard1.png";
import img2 from "./assets/lifeCoaching.png";
import img3 from "./assets/food.png";
import img4 from "./assets/facilitiesCard4.png";
import "./experience.css";

const Experience = () => {
  return (
    <>
      <section className="mb-5 mt-0">
        <div>
          <img
            src={heroImage}
            alt="Happy young man is carrying little happy girl over his shoulders"
            className="halfHeight-hero img-fluid w-100"
          />
        </div>
      </section>
      <section className="facilities-cards mb-5">
        <Container>
          <Row className="locations">
            <p className="lhStory">Explore The Lighthouse</p>
            <h2 className="mb-5">Experiences</h2>
          </Row>
          <Row className=" justify-content-center">
            <div className="col-12 col-md-9 d-flex justify-content-center">
              <Row className="p-3">
                <div className="col-12 col-md-6 d-flex justify-content-center  fa-card">
                  <div>
                    <img
                      src={img1}
                      width="417px"
                      className="mb-5 workshopImg img-fluid"
                      alt=""
                    />
                    <div className="btn-cont">
                      <button className=" rounded-pill text-nowrap px-5 py-2 border-0 mb-5  card-button">
                        Workshops
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center  fa-card">
                  <div>
                    <img src={img2} className="mb-5 img-fluid" alt="" />
                    <div className="btn-cont">
                      <button className="rounded-pill text-nowrap px-3 py-2 border-0 mb-5  card-button">
                        Happiness Coaching Sessions
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center  fa-card">
                  <div>
                    <img src={img3} className="mb-5 img-fluid" alt="" />
                    <div className="btn-cont">
                      <button className="rounded-pill text-nowrap px-5 py-2 border-0 mb-5  card-button">
                        Food and beverages
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center  fa-card">
                  <div>
                    <img src={img4} className="mb-5 img-fluid" alt="" />
                    <div className="btn-cont">
                      <button className="rounded-pill text-nowrap px-5 py-2 border-0 mb-5  card-button">
                        Special Events
                      </button>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
            <center>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://book.thelighthousebymv.com/v2/#book/count/1/"
              >
                <button className="position-sticky fs-5 text-white border-0 p-2 top-0 px-4 z-1 rounded-pill  ">
                  Go to Events Schedule
                </button>
              </a>
            </center>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Experience;
