import React from "react";
import service_img1 from "../Assets/images/service_img1.png"
import service_img2 from "../Assets/images/service_img2.png"
import service_img3 from "../Assets/images/service_img3.png"
import { Grid } from "@mui/material";


const B2bDriverServices = () => {
  return (
    <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="driver_services_container" style={{ maxWidth: "1200px" }}>
        <div className="Driver_srvices_item1"  style={{ maxWidth: "1200px" }}>
          <div className="driver_services_Main_heading">B2b driver services</div>
          <div className="driver_services_subheading">
            Drivershaab operates in all the major cities of India and works with
            50,000+ well-trained professional drivers. Driveshaab is committed to
            help our driver partners become micro-entrepreneurs and increase their
            income. also strives to improve quality of life for its driver
            partners through training in etiquette, hygiene, service quality etc.
          </div>
        </div>
        <Grid container sx={{ maxWidth: '1200px', bgcolor: '#f9e1d9' }}>
          <Grid item lg={3} xs={12}> <img src={'Frame 4000.png'} alt="img" style={{ width: '100%' }} /></Grid>
          <Grid item lg={9} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="driver_services_heading">Pickup & Drop Service</div><div className="driver_services_description"> Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.</div></Grid>
        </Grid>
        <Grid container sx={{ maxWidth: '1200px', bgcolor: '#f9e1d9' }}>
          <Grid item lg={9} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="driver_services_heading">Pickup & Drop Service</div><div className="driver_services_description"> Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.</div></Grid>
          <Grid item lg={3} xs={12}> <img src={'Frame 4000.png'} alt="img" style={{ width: '100%' }} /></Grid>
        </Grid>
        <Grid container sx={{ maxWidth: '1200px', bgcolor: '#f9e1d9' }}>
          <Grid item lg={3} xs={12}> <img src={'Frame 4000.png'} alt="img" style={{ width: '100%' }} /></Grid>
          <Grid item lg={9} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="driver_services_heading">Pickup & Drop Service</div><div className="driver_services_description"> Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.</div></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default B2bDriverServices;
