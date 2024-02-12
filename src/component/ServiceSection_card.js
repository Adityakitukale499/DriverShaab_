import React from "react";
import { Box, Typography } from "@mui/material";

const ServiceSection_card = ({ src, alt, heading, description }) => {
  return (
    <>
   

      {/* <div className="sec-service-card">
        <img src={src} alt={alt} className="sec-service-img" />
        <div className="sec-service-text-div">
        <p className="sec-service-heading">{heading}</p>
        <p className="sec-service-description"
        >
          {description}
        </p>
        </div>
      
      </div> */}


      <div className="sec-service-card">
        <img src={src} alt={alt} className="sec-service-img" />
        <div className="sec-service-text-div">
        <p className="sec-service-heading">{heading}</p>
        <p className="sec-service-description"
        >
          {description}
        </p>
        </div>
      
      </div>
    </>
  );
};

export default ServiceSection_card;
