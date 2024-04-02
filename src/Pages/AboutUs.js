import React from "react";
import TeamSection from "../component/TeamSection";
import Location from "../component/Location";
import AppSection from "../component/AppSection";
import Footer from "../component/Footer";
import MissionVision from "../component/MissionVision";
import OurCustomer from "../component/OurCustomer";

const AboutUs = () => {
  return (
    <div>
      <TeamSection />
      <MissionVision/>
      <OurCustomer/>
      <AppSection />
      <br />
      <Location />
    </div>
  );
};

export default AboutUs;
