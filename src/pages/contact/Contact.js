import { Container, Row } from "react-bootstrap";
import heroImage from "../locations/heroLocation.png";
import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selectValue: "",
    message: "",
  });
  const form = useRef();
  const [formSubmitMessage, setFormSubmitMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_3qcvyck",
        "template_jiqzf4e",
        form.current,
        "khxuZtSOozW7mNFx3"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setFormSubmitMessage("Email sent successfully");
          setTimeout(() => {
            setFormSubmitMessage("");
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          setFormSubmitMessage(
            "There was a problem sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <>
      <section className="mb-5">
        <div>
          <img
            className="halfHeight-hero img-fluid w-100"
            src={heroImage}
            alt=""
          />
        </div>
      </section>
      <Container>
        <Row className="mb-5">
          <div className="col-12 col-md-6 contact mb-5">
            <p className="lhStory">For More Info</p>
            <h2 className="fw-bold mb-5">Contact Us</h2>
            <a
              href="mailto:info@thelighthouse.com"
              className="d-flex align-items-center gap-3 mb-3"
            >
              <i className="fa-solid fa-2x fa-envelope"></i>
              <span className="fs-25px">Email: info@thelighthouse.com</span>
            </a>
            <a
              href="tel:16201"
              className="d-flex align-items-center gap-3 mb-5"
            >
              <i className="fa-solid fa-2x fa-phone"></i>
              <span className="fs-25px">Phone Number: 16201</span>
            </a>
            <h2 className="fw-bold fs-3 mb-4">Follow Us:</h2>
            <div className="d-flex gap-3 ">
              <a
                href="https://www.facebook.com/Thelighthousebymountainview/"
                rel="noreferrer"
                target={"_blank"}
              >
                <i className="fa-brands fa-2x fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/thelighthouse.by.mv/"
                rel="noreferrer"
                target={"_blank"}
              >
                <i className="fa-brands fa-2x fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="contact-form">
              <Row>
                <div className="col-12 py-5 px-4 px-md-5">
                  <Row>
                    <h2 className="text-uppercase text-danger fw-bold mb-4">
                      get in touch
                    </h2>
                  </Row>
                  <Row>
                    <form ref={form} onSubmit={handleSubmit}>
                      <Row>
                        <div className="col-12">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              // value={formData.name}
                              // onChange={handleChange}
                              name="name"
                              className="form-control rounded-pill"
                            />
                          </div>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              // value={formData.phone}
                              // onChange={handleChange}
                              className="form-control rounded-pill"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              name="email"
                              id="email"
                              // value={formData.email}
                              // onChange={handleChange}
                              className="form-control rounded-pill"
                            />
                          </div>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-12 mb-3">
                          <label htmlFor="select" className="form-label">
                            Choose Type
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="value"
                            // value={formData.selectValue}
                            // onChange={handleChange}
                            id="select"
                          >
                            <option value="">General Inquiry</option>
                            <option value="Complian">Complain</option>
                            <option value="Partnership">Partnership</option>
                          </select>
                        </div>
                      </Row>
                      <Row>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Your Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            // value={formData.message}
                            // onChange={handleChange}
                            rows="5"
                          ></textarea>
                        </div>
                      </Row>
                      <Row>
                        <div className="d-flex justify-content-center mb-3">
                          <button className="rounded-pill text-white px-5 py-1 border-0 ">
                            Submit
                          </button>
                        </div>
                      </Row>
                      {formSubmitMessage && (
                        <center className="text-success ">
                          <p> {formSubmitMessage}</p>
                        </center>
                      )}
                    </form>
                  </Row>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
      <section className="newsletter mb-4 p-2">
        <div className="container">
          <Row className="p-2 p-md-4 text-white">
            <div className="col-12 col-md-6 mb-3 text-center text-md-start">
              <p className="mb-2">Stay Updated</p>
              <h2 className="fs-2 fw-bold">Subscibe to our newsletter</h2>
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
    </>
  );
};

export default Contact;
