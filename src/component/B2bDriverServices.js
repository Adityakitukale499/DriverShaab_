import React from "react";
import service_img1 from "../Assets/images/service_img1.png"
import service_img2 from "../Assets/images/service_img2.png"
import service_img3 from "../Assets/images/service_img3.png"


const B2bDriverServices = () => {
  return (
    <div className="driver_services_container">
      <div className="Driver_srvices_item1">
        <div className="driver_services_Main_heading">B2b driver services</div>
        <div className="driver_services_subheading">
          Drivershaab operates in all the major cities of India and works with
          50,000+ well-trained professional drivers. Driveshaab is committed to
          help our driver partners become micro-entrepreneurs and increase their
          income. also strives to improve quality of life for its driver
          partners through training in etiquette, hygiene, service quality etc.
        </div>
      </div>

      <div className="Driver_srvices_items">
        <div className="driver_services_img">
          <img src={service_img1} alt="img" 
          // style={{width:"399px",height:"193px"}} 

          />
        </div>
        <div  className="driver_services_text">
          <div className="driver_services_heading">Pickup & Drop Service</div>
          <div className="driver_services_description"> Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.</div>
        </div>
      </div>

      <div className="Driver_srvices_items">
        <div className="driver_services_img">    
        <img src={service_img2} alt="img" 
        />
        </div>
        <div className="driver_services_text">
          <div className="driver_services_heading">Pickup & Drop Service</div>
          <div className="driver_services_description"> Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.</div>
        </div>
      </div>

      <div className="Driver_srvices_items">
        <div className="driver_services_img" style={{}}>    
        <img src={service_img3} alt="img" 
        // style={{width:"399px",height:"193px"}} 

        /></div>
        <div className="driver_services_text">
          <div className="driver_services_heading">Pickup & Drop Service</div>
          <div className="driver_services_description"> Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.</div>
        </div>
      </div>
    </div>
  );
};

export default B2bDriverServices;
