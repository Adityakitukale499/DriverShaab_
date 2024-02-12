import React from "react";
import ServiceSection_card from "./ServiceSection_card";
import Service_Section1 from "../Assets/Service_Section1.png";
import Service_Section2 from "../Assets/Service_Section2.png";
import Service_Section3 from "../Assets/Service_Section3.png";
import {Container } from "@mui/material";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";

const Service_Section = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center", width:"100vw"}}>
    <section className="services-section-one"  style={{maxWidth:"1200px"}}>
      <Container>
        <div className="content-container">
          <div className="sec-title">
            <div className="inner-title-box">
             
              <p className="rotate-title">
                SERVICES
              </p>
              <p className="sec-service-main-heading">
                OUR OFERINGS
              </p>
            </div>
          </div>
          {/* <div className="sec-service-card-container"> */}
          <div className="sec-service-card-container">
            <ServiceSection_card
              src={Service_Section1}
              alt="OurOffering_img2"
              heading="Customized tech solution"
              description="Tailored logistics tech solutions enhance efficiency, adaptability, and cost management by customizing software to address specific operational needs."
            />
            <ServiceSection_card
              src={Service_Section2}
              alt="Service_Section1"
              heading="Pay as you go"
              description="The pay-as-you-go model allows users to pay only for the specific resources or services they consume, offering flexibility and cost efficiency without upfront commitments."
            />
            <ServiceSection_card
              src={Service_Section3}
              alt="Service_Section2"
              heading="Verified Drivers"
              description="Drivers with over three years of experience, thoroughly trained, and background verified, ensuring a reliable and skilled workforce for transportation needs."
            />
          </div>
        </div>
      </Container>
    </section>
    </div>
  );
};

export default Service_Section;
