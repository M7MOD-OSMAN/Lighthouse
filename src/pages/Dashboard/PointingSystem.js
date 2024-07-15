import React from "react";
import { Accordion } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const PointingSystem = () => {
  return (
    <div className="points container mt-5">
      <div className="row text-end ">
        <span>
          WELCOME BACK! <br /> <h3>AYMAN</h3>
        </span>
      </div>
      <div className="row ">
        <span>
          My Points Balance <br /> <h3>200,000</h3>
        </span>
      </div>
      <div className="row p-3">
        <nav className="col-12 col-md-3 d-flex flex-column ">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="null"
          >
            My Points
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="null"
          >
            History
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="null"
          >
            Store
          </NavLink>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>My Account</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li className="mb-3">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active-link" : null
                      }
                      to="null"
                    >
                      My Profile
                    </NavLink>
                  </li>

                  <li className="mb-3">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active-link" : null
                      }
                      to="null"
                    >
                      Family Member
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </nav>
        <div className="col-12 col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PointingSystem;
