import React from "react";
import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { CountUp } from 'use-count-up';

const NumberSection = () => {

  const container_styles={
    backgroundColor:"#F1F1F1",
    height:{md:'213px'},
    padding:{ 
      xs: ['6px', '26px', '6px', '26px'],  
      md: ['64px', '24px', '64px', '24px'],}
  }
  const wrapper_Styles={
    display: 'flex', 
    flexDirection: 'column',
     alignContent: 'center', 
     justifyContent: 'center',
     textAlign:"center"
  }
  const number_Styles = {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: {
      xs: "16px",
      sm: "40px",
    },
    lineHeight: {
      xs:'24px',
      sm:'60px',
    },
    textAlign:'center'
  };

  const text_Styles = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: {
      xs: "8px",
      sm: "14px",
    },
    lineHeight: {
      xs:'12px',
      sm:'21px',
    },
    textAlign:'center',
    color:"#FB561E"
  };

  return (
    <Grid container sx={container_styles} position={'relative'} zIndex={2}>
      <Grid item xs={6} md={2.25} sx={wrapper_Styles}>
        <Grid item  sx={number_Styles}><CountUp isCounting end={1600} duration={6} />+</Grid>
        <Grid item sx={text_Styles}>Driver Partners</Grid>
      </Grid>
      <Grid item xs={6} md={2.25} sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={16} duration={10} />K+</Grid>
        <Grid item sx={text_Styles}>Trips covered</Grid>
      </Grid>
      <Grid item xs={12} md={2.25}  sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={1600} duration={6} />+</Grid>
        <Grid item sx={text_Styles}>Happy Customers</Grid>
      </Grid>
      <Grid item xs={6} md={2.25} sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={7} duration={12} /></Grid>
        <Grid item sx={text_Styles}>Cities Covered</Grid>
      </Grid>
      <Grid item xs={6} md={3} sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={48} duration={9} />K Km's</Grid>
        <Grid item sx={text_Styles}>Distance Travelled</Grid>
      </Grid>
    </Grid>
  );
};

export default NumberSection;

