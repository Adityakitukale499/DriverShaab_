import React from "react";
import { Box, Typography } from "@mui/material";

const NumberSection = () => {
  return (
    <>
      <div className="number_container">
        <div className="number_sec_items">
          <div className="number_sec_num">1600+</div>
          <div className="number_sec_text">Driver Partners</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num">16+</div>
          <div className="number_sec_text">Trips covered</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num">1600+</div>
          <div className="number_sec_text">Happy Customers</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num">7</div>
          <div className="number_sec_text">Cities Covere</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num">56K Km's</div>
          <div className="number_sec_text">Distance Travelled</div>
        </div>
      </div>
    </>
  );
};

export default NumberSection;
