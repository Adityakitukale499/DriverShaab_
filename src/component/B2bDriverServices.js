import React from "react";
import b2b1 from "../Assets/images/b2b1.png"
import b2b2 from "../Assets/images/b2b2.png"
import b2b3 from "../Assets/images/b2b3.png"
import { Grid, Typography ,useMediaQuery} from "@mui/material";
import SimpleSlider from "./Slider";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React from "react";
// import Slider from "react-slick";

const B2bDriverServices = () => {

  const isDesktop = useMediaQuery("(min-width:900px)");

  const text_container_styles={
    padding:{ 
      // xs: ['6px', '26px', '6px', '26px'],  
      md: ['0px', '29px', '0px', '0px'],}
  }

  const main_heading_styles={
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      md:"32px"
    },
    lineHeight: {
      xs:'16.8px',
      md:'38.4px'
    },
    color:"#000000",
    textAlign:'center',
  }
  const main_description_styles={
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: {
      xs: "10px",
      md:"18px"
    },
    lineHeight: {
      xs:'12px',
      md:'21.6px'
    },
    color:"#373737",
    textAlign:'center',
  }


  const heading_styles={
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: {
      xs: "12px",
      md:"24px"
    },
    lineHeight: {
      xs:'14.4px',
      md:'28.8px'
    },
    color:"#373737",
    textAlign:'center',
  }



  const description_styles={
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: {
        xs: "14px",
        md:"16px"
      },
      lineHeight: {
        xs:'12px',
        md:'19.2px'
      },
      color:"#373737"
    }
  



  return (
    <>
    <Grid container sx={{ display:"flex",gap:'85px', alignItems:"center", justifyContent:"center",padding:"90px"}}>


<Grid item  md={12} sx={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center",gap:'31px'}}>
          <Grid item>
          <Typography sx={main_heading_styles}> B2b driver services</Typography>
         </Grid>
          <Grid item>   
          <Typography sx={main_description_styles}>
          Drivershaab operates in all the major cities of India and works with
            50,000+ well-trained professional drivers. Driveshaab is committed to
            help our driver partners become micro-entrepreneurs and increase their
            income. also strives to improve quality of life for its driver
            partners through training in etiquette, hygiene, service quality etc. 
          </Typography>     
          
            </Grid>
     </Grid>
     </Grid>

{isDesktop ? (
<>
<Grid container sx={{ display:"flex",gap:'85px', alignItems:"center", justifyContent:"center",padding:"90px"}}>
      <Grid item md={12} sx={{display:"flex", flexDirection:"row",}}>
      <Grid item md={10}><img src={b2b1} alt="img" style={{ width: '100%',height:'100%' }} /></Grid>
          <Grid item  sx={{ display:'flex',flexDirection:"column",alignItems:'start', gap:"20px",padding:"10px 30px 20px 15px", background:'#f9e1d9'}}>
          <Typography sx={heading_styles}>Pickup & Drop Service</Typography>
          <Typography sx={description_styles}>
          Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.
          </Typography>
        </Grid>
      </Grid>


      <Grid item md={12} sx={{display:"flex", flexDirection:"row",}}>
          <Grid item  sx={{ display:'flex',flexDirection:"column",alignItems:'start', gap:"20px",padding:"10px 30px 20px 15px",background:"#F4F8FF"}}>
          <Typography sx={heading_styles}>Pickup & Drop Service</Typography>
          <Typography sx={description_styles}>
          Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.
          </Typography>
        </Grid>
        <Grid item md={10}><img src={b2b2} alt="img" style={{ width: '100%',height:'100%' }} /></Grid>
      </Grid>



      <Grid item md={12} sx={{display:"flex", flexDirection:"row",}}>
      <Grid item md={10}><img src={b2b3} alt="img" style={{ width: '100%',height:'100%' }} /></Grid>
          <Grid item  sx={{ display:'flex',flexDirection:"column",alignItems:'start', gap:"20px",padding:"10px 30px 20px 15px",background:'#f9e1d9'}}>
          <Typography sx={heading_styles}>Pickup & Drop Service</Typography>
          <Typography sx={description_styles}>
          Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.
          </Typography>
        </Grid>
      </Grid>
      </Grid>
</>

):(
  <div>
      <SimpleSlider/>
  </div>
)}

      




</>

  );
};

export default B2bDriverServices;
