import React from "react";
import Video from "../../component/Video";
import B2bDriverServices from "../../component/B2bDriverServices";
import Schedule_Demo from "../../component/Schudule_Demo/Schedule_Demo";
import AppSection from "../../component/AppSection";
import Footer from "../../component/Footer";
import SchuduleDemoForm from "../../component/Schudule_Demo/SchuduleDemoForm";
const Businesses = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <div>
        <Video />
      </div>
      <div>
        {" "}
        <B2bDriverServices />
      </div>
      <div>
        {" "}
        <SchuduleDemoForm />
      </div>
      <div>
        {" "}
        <AppSection />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Businesses;
