import React from "react";
import Grid from "@mui/material/Grid";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/color.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h1>Customer Testimonials</h1>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <TestimonialBlock
              text="I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
              imageSrc="image-14.jpg"
              name="Mike Hardson"
              designation="Student"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TestimonialBlock
              text="I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
              imageSrc="image-15.jpg"
              name="Christine Eve"
              designation="Student"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TestimonialBlock
              text="I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
              imageSrc="image-16.jpg"
              name="David Cooper"
              designation="Student"
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

const TestimonialBlock = ({ text, imageSrc, name, designation }) => {
  return (
    <div className="testimonials-block-one">
      <div className="inner-box">
        <div className="text">{text}</div>
        <div className="author-info">
          <div className="image">
            <img src={imageSrc} alt={name} />
          </div>
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
