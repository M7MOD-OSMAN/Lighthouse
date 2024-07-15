import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

const OTPVerifier = ({ otpCode, onOTPVerified }) => {
  const [enteredOTP, setEnteredOTP] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredOTP == otpCode) {
      onOTPVerified();
    } else {
      alert("Incorrect OTP code!");
    }
  };

  const handleOTPChange = (event) => {
    setEnteredOTP(event.target.value);
  };

  return (
    <Container>
      <Row>
        <div className="col-12 col-md-8">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="otp-code">Enter OTP:</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                id="otp-code"
                name="otp-code"
                value={enteredOTP}
                onChange={handleOTPChange}
                required
              />
              <Button type="submit">Verify OTP</Button>
            </Form.Group>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default OTPVerifier;
