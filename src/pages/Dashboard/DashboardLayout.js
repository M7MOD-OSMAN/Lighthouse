import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import LoginPage from "./OTPlogin/LoginPage";
import { getAviPoints } from "../../http/axios";

export default function HostLayout() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [MyPoints, setMyPoints] = useState(0);

  if (localStorage.getItem("userVerified") === "true" && loggedIn === false) {
    setLoggedIn(true);
    getAviPoints().then((res) => setMyPoints(res));
  }

  return (
    <>
      {true ? (
        <div className="points container mt-5">
          <div className="row text-end ">
            <span>
              WELCOME BACK! <br /> <h3></h3>
            </span>
          </div>
          <div className="row ">
            <span>
              My Points Balance <br /> <h3>{MyPoints}</h3>
            </span>
          </div>
          <div className="row p-3">
            <nav className="col-12 col-md-3 d-flex flex-column ">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : null)}
                to="my-points"
              >
                My Points
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : null)}
                to="history"
              >
                History
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : null)}
                to="store"
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
                          to="my-profile"
                        >
                          My Profile
                        </NavLink>
                      </li>

                      <li className="mb-3">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active-link" : null
                          }
                          to="my-family"
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
      ) : (
        <LoginPage />
      )}
    </>
  );
}
