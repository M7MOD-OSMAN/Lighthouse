import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { encryptData, decryptData } from '../../../http/encrypt';
import { getOTP } from '../../../http/axios';

import LoginForm from "./LoginForm";
import OTPGenerator from "./OTPGenerator";
import OTPVerifier from "./OTPVerifier";

const LoginPage = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOTPCode] = useState(null);
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const handlePhoneNumberSubmit = (phoneNumber) => {
    getOTP(phoneNumber).then((response) => {
      setOTPCode(response);
      localStorage.setItem("PhoneNumber", phoneNumber);
    })
  };

  const handleOTPVerified = () => {
    // Correct Code entered successfully => direct to pointing homepage
    setIsOTPVerified(true);
    localStorage.setItem("userVerified", true);
  };

  useEffect(() => {
    if (isOTPVerified) {
      window.location.reload();
      return;
    }
  }, [isOTPVerified]);

  return (
    <>
      {!otpCode ? (
        <LoginForm
          onPhonechange={setPhoneNumber}
          onSubmit={handlePhoneNumberSubmit}
        />
      ) : (
        <>
          <OTPGenerator />
          <OTPVerifier otpCode={otpCode} onOTPVerified={handleOTPVerified} />
        </>
      )}
    </>
  );
};

export default LoginPage;
