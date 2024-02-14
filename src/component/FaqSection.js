import React, { useState } from "react";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/color.css";
import line from "../Assets/images/line.png";
import { useMediaQuery } from "@mui/material";

const AccordionBlock = ({ title, content, isActive, onClick }) => (
  <li className={`accordion block ${isActive ? "active-block" : ""}`}>
    <div className={`acc-btn ${isActive ? "active" : ""}`} onClick={onClick} style={{fontWeight:700}}>
      <div className="icon-outer">
        <span className={`far fa-angle-down`}></span>
      </div>
      {title}
    </div>
    <div className={`acc-content ${isActive ? "current" : ""}`} style={{backgroundColor:'#FFF2EE'}}>
      <div className="content">
        <div className="text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </li>
);

const FaqSection = () => {
  
  const isdescktop = useMediaQuery('(max-width:1000px))')
  console.log(isdescktop)
  const [active, setActive] = useState("First");

  const handleAccordionClick = (accordionKey) => {
    setActive(accordionKey);
  };

  return (
    <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
       <div className="aboutus_text_slash" style={{marginRight:'70px',marginLeft:'-80px',display:isdescktop?'block':'none' }}>
            <div className="aboutus_blur_heading">Feedbacks</div>
            <div className="line_img">
              <img src={line} alt="lineimg" style={{ height: "52px" }} />
            </div>
          </div> 
    <section className="faq-section" style={{maxWidth:"1200px"}}>
      <div className="auto-container">
        <div className="text-center mb-4">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="col-lg-12">
          <ul className="accordion-box">
            <AccordionBlock
              onClick={() => handleAccordionClick("First")}
              title="LHow do I Book Driver from the App?"
              content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
              isActive={active === "First"}
            />
            <AccordionBlock
              onClick={() => handleAccordionClick("Second")}
              title="LHow do I Book Driver from the App?"
              content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
              isActive={active === "Second"}
            />
            <AccordionBlock
              onClick={() => handleAccordionClick("Third")}
              title="LHow do I Book Driver from the App?"
              content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
              isActive={active === "Third"}
            />
            <AccordionBlock
              onClick={() => handleAccordionClick("Fourth")}
              title="LHow do I Book Driver from the App?"
              content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
              isActive={active === "Fourth"}
            />
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FaqSection;
