import React, { useEffect, useRef, useState } from "react";
import driver from "../Assets/driver.png";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Hero_Section_Button } from "./Hero_Section_Button";
import { useNavigate } from "react-router-dom";
import '../Animation.css'

const Hero_Section = () => {

  const navigate = useNavigate()

  const Navigate_ScheduleDemo = () => {
    navigate("/scheduledemo")
  };

  const Navigate_JoinAsDriver = () => {
    navigate("/joinasdriver")
  }; const scrollEffect = useRef(null);
  const [scrollflag, setScrollflag] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === scrollEffect.current) {
            setScrollflag(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (scrollEffect.current) {
      observer.observe(scrollEffect.current);
    }

    return () => {
      if (scrollEffect.current) {
        observer.unobserve(scrollEffect.current);
      }
    };
  }, []);

  return (
    <div className="sec-hero" style={{ zIndex: -1 }} ref={scrollEffect} >
      <div className={`sec-hero-text-container-text ${scrollflag ? 'hero-animation' : ''}`}>
        <h1 className="sec-hero-heading">India's Largest Driver Service</h1>

        <p className="sec-hero-description">
          DriverShaab is a tech enabled driver service which provides drivers
          to individual car owners via DriverShaab app as well as to B2B and B2C
          partners across India!
        </p>
      </div>
      <div className={`sec-hero-btn-div ${scrollflag ? 'hero-animation' : ''}`} style={{ zIndex: 0 }}>

        <Hero_Section_Button
          text="Schedule Demo (B2B)"
          backgroundColor="#FB561E"
          variant="filled"
          color="#FFFFFF"
          onClick={Navigate_ScheduleDemo}
        />
        <Hero_Section_Button
          text="Join as Driver Partner"
          color="#FB561E"
          border="3px solid #FB561E"
          onClick={Navigate_JoinAsDriver}
        />
      </div>
    </div>
  );
};

export default Hero_Section;
