import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css"; // import all styles
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"; // import core styles
import "@fortawesome/fontawesome-free/css/solid.min.css"; // import solid styles
import "@fortawesome/fontawesome-free/css/regular.min.css"; // import regular styles
import "@fortawesome/fontawesome-free/css/brands.min.css"; // import brand styles
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
