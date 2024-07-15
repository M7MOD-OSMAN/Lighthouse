import { Col, Container, Row } from "react-bootstrap";
import logo from "./Home/assets/Logo - Updated-pdf.png";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {!location.pathname.includes("dashboard") && (
        <Container className="">
          <Row className="">
            <div className="col-12 col-sm-3 mb-5 px-4 col-md-4">
              <NavLink to={`/`}>
                <img
                  src={logo}
                  width={190}
                  height={50}
                  alt="Lighthouse Logo"
                  className="mb-2"
                />
              </NavLink>
              <Row>
                <div className="col-12 col-md-9"></div>
              </Row>
              <Row className="social">
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
              </Row>
            </div>
            <div className="col-12 col-sm-3 mb-5 px-4 col-md-2 quick">
              <h5 className="mb-3 ">The Lighthouse</h5>
              <NavLink className="d-block text-decoration-none " to={`/about`}>
                Our Story
              </NavLink>
              {/* <NavLink className="d-block text-decoration-none " to="/">
            Partners
          </NavLink> */}
              <NavLink
                className="d-block text-decoration-none "
                to={`/experience`}
              >
                Experience
              </NavLink>
            </div>
            <div className="col-12 col-sm-3 mb-5 px-4 col-md-2 useful">
              <h5 className="mb-3">Useful Links</h5>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://book.thelighthousebymv.com/v2/#book/count/1/"
                className="d-block text-decoration-none"
              >
                Book Now
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://beyondhappiness.typeform.com/survey"
                className="d-block text-decoration-none"
              >
                Happiness Survey
              </a>
              <NavLink
                className="d-block text-decoration-none"
                to={`/locations`}
              >
                Our Locations
              </NavLink>
            </div>
            <div className="col-12 col-sm-3 mb-5 px-4 col-md-4 contact">
              <h5 className="mb-3">Contact Us</h5>

              <a
                href="tel:16201"
                className="d-flex align-items-center gap-3 mb-3"
              >
                <i className="fa-solid fa-2x fa-phone "></i>
                <span>16201</span>
              </a>
              <a
                href="mailto:info@thelighthousebymv.com"
                className="d-flex align-items-center gap-3 mb-3"
              >
                <i className="fa-solid fa-2x fa-envelope "></i>
                <span>info@thelighthousebymv.com</span>
              </a>
              <a
                href="javascript:void(0)"
                className="d-flex align-items-center gap-3 mb-3"
              >
                <i className="fa-solid fa-2x fa-clock "></i>
                <span>5 PM - 1 AM | Sunday - Saturday</span>
              </a>
            </div>
          </Row>
          <hr />
          <center className="p-2 pb-3">
            COPYRIGHT 2023.THE LIGHTHOUSE. ALL RIGHTS RESERVED
          </center>
        </Container>
      )}
    </>
  );
};

export default Footer;
