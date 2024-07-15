import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import heroImage from "./assets/heroAbout.png";
import img1 from "../../components/Home/assets/Jin-limm.png";
import img2 from "./assets/Our Story - 2.jpg";
import img3 from "./assets/Our Story - 3.jpg";
const About = () => {
  return (
    <>
      {/* <section className="mb-5">
        <div>
          <img
            src={heroImage}
            alt="Teacher is teaching student how to paint"
            className="halfHeight-hero halfHeight img-fluid w-100"
          />
        </div>
      </section>
      <div className="container-fluid bg-white">
        <Row className="mb-5">
          <div className="col-12 col-md-7 px-3 px-md-5 about mb-4 mb-md-5">
            <p className="lhStory mb-0">The Lighthouse Story</p>
            <h2 className="about-title">
              “Let nothing dim the light <br /> that shines from within.” –Maya
              Angelou
            </h2>
            <div className="col-12 col-md-9">
              <p className=" mb-4">
                The Lighthouse is a community enablement space that aims to
                spark and feed individuals’ passion as well as encourage
                community bonding by offering a space for learning, growth, fun,
                and connection.
              </p>
            </div>
            <div className="col-12 col-md-9">
              <p className="fw-bold mb-4">
                This is achieved through a well-constructed development program
                that is tailored to every participant’s interests. On this
                journey of development, participants can attend a range of
                workshops and events that add to their skills and knowledge in a
                fun, engaging, and enabling environment.
              </p>
            </div>
            <div className="col-12 col-md-9">
              <p className="mb-2 mb-2 mb-md-3">
                Through development, engagement, and the opportunity to give
                back to the community, The Lighthouse, in partnership with DH
                Global, offers the Mountain View community an uninterrupted path
                toward meaningful happiness and consistent growth.{" "}
              </p>
            </div>
            <button className="rounded-pill border-0">Read More</button>
          </div>
          <div className="col-12 col-md-5">
            <img
              src={mother}
              alt="Very happy mother holding a smiling child"
              className="img-fluid"
            />
          </div>
        </Row>
      </div> */}
      <section className="mb-5">
        <div>
          <img
            src={heroImage}
            alt="Teacher is teaching student how to paint"
            className="halfHeight-hero halfHeight img-fluid w-100"
          />
        </div>
      </section>
      <Container className="about">
        <Row className="my-5">
          <Col md={4} className="mb-3 order-md-1">
            <img src={img1} alt="Section 1" className="img-fluid" />
          </Col>
          <Col md={8} className="order-md-2">
            {/* <h2>Section 1 Title</h2> */}
            <p>
              Happiness lies at the heart of all human pursuit; whatever we do,
              whatever choices we make, is ultimately a means to achieve a sense
              of fulfillment – or, as we like to call it, meaningful happiness.
              By partnering with the Happiness Expert Jenn Lim the founder and
              CEO of Delivering Happiness Global The Lighthouse brings you a
              holistic experience that is designed according to the science of
              happiness and customized to your specific needs, interests, and
              aspirations. At The Lighthouse, participants of all ages can
              develop and connect with others through a wide range of workshops,
              one-time classes, and community events that enable them to find
              their true, meaningful happiness.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={8} className="order-2 order-md-1">
            <h3>How does The Lighthouse shine a path toward happiness? </h3>
            <p>
              According to the Science of Happiness, a happy life stems from the
              balance between meaning, vitality, delight, engagement, and
              freedom – otherwise known as the five truths of happiness. Without
              this balance, meaningful happiness becomes challenging to achieve
              or maintain. Meaning is closely tied to living in accordance with
              and toward a higher purpose that defines one’s values and guiding
              principles. This can be equally achieved by working in an
              environment that matches one’s values or by volunteering to extend
              a helping hand to others within the community. Vitality addresses
              one’s overall health and wellness, whether physical or mental.
              Some of the sure paths to vitality include exercising regularly,
              meditating, and even getting enough rest. Freedom is associated
              with autonomy, authenticity, and empowerment – especially where
              people feel a sense of control over their lives, both in and out
              of the workplace. Freedom begins with safety, which makes way for
              the ability to make choices and personalize experiences to one’s
              preference. Engagement is one of the features that underscore the
              human experience. As social beings, we constantly have the need
              for sharing genuine and meaningful interactions with those
              surrounding us, from family to friends and coworkers. Engagement
              allows us to feel like we belong to a community of like-minded
              people where we are valued and validated. Delight is marked by our
              ability to relish in the joy of the moment, whether through acts
              of creativity and playfulness or others that spark surprise and
              excitement. By basing all of The Lighthouse experiences, from
              workshops to events, on the five truths of happiness, each
              participant can select the best-suited experiences that enable
              them to achieve meaningful happiness – as revealed by the
              Happiness Index survey created based on the science of happiness
            </p>
          </Col>
          <Col md={4} className="mb-3 order-1 order-md-2">
            <img src={img2} alt="Section 2" className="img-fluid" />
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={4} className="mb-3 order-md-1">
            <img src={img3} alt="Section 3" className="img-fluid" />
          </Col>
          <Col md={8} className="order-md-2">
            <h3>
              How do I know which workshops or experiences suit me the best?{" "}
            </h3>
            <p>
              Thanks to the science of happiness, which forms the DNA of The
              Lighthouse, we are able to guide all participants on their
              journeys to meaningful happiness using the Happiness Index – an
              easy-to-navigate, science-based survey that reveals how balanced
              one’s life is. Upon completion of the 40-question-long survey, our
              professional happiness counselors analyze participants’ answers
              based on the Happiness Index metrics to reveal how well they are
              performing on the five truths of happiness. The survey’s
              science-based insights allow our counselors to tailor The
              Lighthouse experience to each participant’s unique needs to
              achieve meaningful happiness. Participants are free to follow our
              counselors’ recommendations or design their own Lighthouse
              experience based on their interests. To ensure that all Lighthouse
              participants are steadfast in their pursuit of meaningful
              happiness, our counselors recommend that they take the Happiness
              Index survey periodically to track their progress.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
