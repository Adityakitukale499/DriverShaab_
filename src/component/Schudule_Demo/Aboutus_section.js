import React from "react";
import "../../Assets/css/style.css";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import line from "../../Assets/images/line.png";
import car from "../../Assets/images/car.png"
// import '../Assets/css/revolution-slider.css'

const AboutSection = () => {
  return (
    <>
      <div className="aboutus_container">
        <div className="aboutus_text_container">

          <div className="aboutus_text_slash">
            <div className="aboutus_blur_heading">About us</div>
            <div className="line_img">
              <img src={line} alt="lineimg" style={{ height: "52px" }} />
            </div>
          </div>

          <div className="aboutus_texts">
            <div className="aboutus_two_texts">
              <div className="aboutus_heading">
                WE PROMISE, YOU WILL HAVE THE BEST EXPERIENCE
              </div>

              <div className="text">
                <p>
                  At DriverShaab we eliminate your hassle of driving with our
                  timely and on-demand driver booking services. Whether it is
                  late night partying, driving to work, going for a long trip or
                  more, we got you covered!
                
                </p>
                <p>
                  We also provide SaaS based driver related services to our B2B
                  corporate and logistics partners, feel free to reach out to us
                  and schedule a demo.
                </p>
                <p>
                  Our Driver partners are background verified and both
                  transmission trained so all you need to do is now is schedule
                  a ride!
                </p>
              </div>
            </div>
            <div className="about_us_btn">
              <a href="#" className="book-btn theme-btn btn-style-three">
              Schedule Demo (B2B)
              </a>
            </div>
          </div>


        </div>

        <div className="aboutus_car_img">
          <img src={car} alt="img"  style={{height:"500px"}}/>
        </div>


      </div>
    </>
  );
};

export default AboutSection;
