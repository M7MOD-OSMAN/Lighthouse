import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./StickyButton.css";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    // console.log(scrollTop);
    if (scrollTop > 66) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!location.pathname.includes("dashboard") && (
        <>
          {location.pathname !== "/survey" && (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://beyondhappiness.typeform.com/survey"
            >
              <button
                className={`sticky-button rounded-pill text-white ${
                  isVisible ? "visible" : ""
                }`}
              >
                Take the happiness survey
              </button>
            </a>
          )}
        </>
      )}
    </>
  );
};

export default StickyButton;
