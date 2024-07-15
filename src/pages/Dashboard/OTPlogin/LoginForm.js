import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../components/Home/assets/Logo - Updated-pdf.png";

const LoginForm = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(phoneNumber);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="container mt-5 ">
      <NavLink to="/">
        <img src={logo} width={190} height={50} alt="Lighthouse Logo" />
      </NavLink>
      <div className="d-none d-md-block">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="row">
        <h2>LOGIN</h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="phone-number">Phone Number:</Form.Label>
              <br />
              <Form.Control
                type="text"
                name="phone-number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                className="mb-3"
              />
              <Button className="login-btn" type="submit">
                Send OTP
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
