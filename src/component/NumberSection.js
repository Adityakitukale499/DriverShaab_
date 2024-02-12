import React from "react";
import { Box, Typography,useMediaQuery  } from "@mui/material";

const NumberSection = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <>
     {/* <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}> */}

      <div className="number_container" >
        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}>1600+</div>
          <div className="number_sec_text" style={{ fontWeight:'400'}}>Driver Partners</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}>16+</div>
          <div className="number_sec_text" style={{ fontWeight:'400'}}>Trips covered</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}>1600+</div>
          <div className="number_sec_text"  style={{ fontWeight:'400'}}>Happy Customers</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}>7</div>
          <div className="number_sec_text"  style={{ fontWeight:'400'}}>Cities Covere</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}>56K Km's</div>
          <div className="number_sec_text"  style={{ fontWeight:'400'}}>Distance Travelled</div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default NumberSection;
