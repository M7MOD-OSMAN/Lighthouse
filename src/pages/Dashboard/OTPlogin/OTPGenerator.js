import React, { useState } from "react";
import { Button, Form, NavLink } from "react-bootstrap";
import logo from "../../../components/Home/assets/Logo - Updated-pdf.png";
// import { sendOTPCode } from "../api"; // API from Ayman

const OTPGenerator = ({ phoneNumber, onOTPGenerated }) => {
  const [isGeneratingOTP, setIsGeneratingOTP] = useState(false);

  const handleGenerateOTP = async () => {
    setIsGeneratingOTP(true);
    try {
      //   const otpCode = await sendOTPCode(phoneNumber); // API from Ayman
      //   onOTPGenerated(otpCode);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGeneratingOTP(false);
    }
  };

  return (
    <>
      <div className="container my-3 my-md-5 ">
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
      </div>
    </>
  );
};

export default OTPGenerator;
