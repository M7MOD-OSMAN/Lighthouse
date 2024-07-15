import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./Home/assets/Logo - Updated-pdf.png";
import "./Home/Home.css";
import { useState } from "react";
function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const handleNavToggle = () => {
    setExpanded(!expanded);
  };
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const handleStickyButton = () => {
    if (window.screenY >= 66) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <>
      {!location.pathname.includes("dashboard") && (
        <Navbar expand="lg" className="navbar">
          <Container>
            <NavLink to="/">
              <img src={logo} width={190} height={50} alt="Lighthouse Logo" />
              <div className="position-relative"></div>
            </NavLink>

            <Navbar.Toggle
              onClick={handleNavToggle}
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-md-flex justify-content-md-center position-relative"
            >
              <Nav className="bg-white">
                <NavLink
                  exact="true"
                  to="/"
                  className="text-decoration-none nav-link text-white mx-2"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-decoration-none nav-link text-white mx-2"
                >
                  About Us
                </NavLink>
                {/* <NavLink
              to="/"
              className="text-decoration-none nav-link text-white mx-2"
              >
              Our Partners
            </NavLink> */}
                <NavLink
                  to="/experience"
                  className="text-decoration-none nav-link text-white mx-2"
                >
                  Experiences
                </NavLink>
                <NavLink
                  to="/locations"
                  className="text-decoration-none nav-link text-white mx-2"
                >
                  Locations
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-decoration-none nav-link text-white mx-2"
                >
                  Contact Us
                </NavLink>
                <br className="d-block d-md-none" />
                <br className="d-block d-md-none" />
                <div className="sticky-btn-cont position-absolute ">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://book.thelighthousebymv.com/v2/#book/count/1/"
                  >
                    <button className="position-sticky text-white border-0 p-2 top-0 px-4 z-1 rounded-pill  ">
                      Book Now
                    </button>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default MyNavbar;
