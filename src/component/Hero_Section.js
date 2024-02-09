import React from "react";
import driver from "../Assets/driver.png";
import { Box, Typography } from "@mui/material";
import { Hero_Section_Button } from "./Hero_Section_Button";

const Hero_Section = () => {
  const handleScheduleDemo = () => {};
  const handleJoinAsPartener = () => {};

  return (
    <div className="sec-hero">
      <div className="sec-hero-text-container-text">
        <h1 className="sec-hero-heading">India's Largest Driver Service</h1>

        <p className="sec-hero-description">
          DriverShaab is a tech enabled  driver service which provides drivers
          to individual car owners via DriverShaab app as well as to B2B and B2C
          partners across India!
        </p>
      </div>
      <div className="sec-hero-btn-div">
        <Hero_Section_Button
          text="Schedule Demo (B2B)"
          backgroundColor="#FB561E"
          variant="filled"
          color="#FFFFFF"
        />
        <Hero_Section_Button
          text="Join as Driver Partner"
          color="#FB561E"
          border="3px solid #FB561E"
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero_Section;
