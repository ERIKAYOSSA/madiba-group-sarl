import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <Button
          onClick={scrollToTop}
          className="scroll-top-btn animate__animated animate__pulse animate__infinite"
        >
          <i className="bi bi-arrow-up-circle"></i>
        </Button>
      )}
    </>
  );
}

export default ScrollToTopButton;