import React from "react";
import { Box, Typography,useMediaQuery  } from "@mui/material";
import { CountUp } from 'use-count-up'
const NumberSection = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
     <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center", backgroundColor:'#f1f1f1',position:'relative', zIndex:10}}>

      <div className="number_container" style={{maxWidth:'1400px'}} >
        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}> <CountUp isCounting end={1600} duration={6} />+</div>
          <div className="number_sec_text" style={{ fontWeight:'400'}}>Driver Partners</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}><CountUp isCounting end={16} duration={10} />K +</div>
          <div className="number_sec_text" style={{ fontWeight:'400'}}>Trips covered</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}><CountUp isCounting end={1600} duration={6} />+</div>
          <div className="number_sec_text"  style={{ fontWeight:'400'}}>Happy Customers</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}><CountUp isCounting end={7} duration={12} /></div>
          <div className="number_sec_text"  style={{ fontWeight:'400'}}>Cities Covere</div>
        </div>

        <div className="number_sec_items">
          <div className="number_sec_num" style={{ fontWeight:'700'}}><CountUp isCounting end={48} duration={9} />K Km's</div>
          <div className="number_sec_text"  style={{ fontWeight:'400'}}>Distance Travelled</div>
        </div>
      </div>
      </div>
  );
};

export default NumberSection;
