import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BookDemo_img from "../Assets/BookDemo_img.png";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";

const BookDemo_Section = () => {
  return (
    <>
      <section className="cta-two">
        <div className="auto-container">
          <h4>
            Friendly & Patient <br /> Qualified Driver's
          </h4>
          <div className="link-btn">
            <a href="#" className="theme-btn btn-style-one">
              BOOK DEMO
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDemo_Section;
