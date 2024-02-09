import React from "react";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/style.css";
import "../Assets/css/color.css";

const Footer = () => {
  return (
    <div style={{ marginTop: "250px" }}>
      {/* Footer Section */}
      <footer className="customfooter">
        <div className="auto-container">
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Column */}
              <div className="column col-lg-3 col-md-6">
                <div className="widget links-widget">
                  <div className="widget-content ms-lg-4">
                    <h3 style={{ color: "white" }}>Customer App</h3>
                    <img
                      src="GooglePlay.png"
                      style={{ marginTop: "20px" }}
                    ></img>
                    <img
                      src="AppStore.png"
                      style={{ marginLeft: "-68px", marginTop: "20px" }}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="column col-lg-3 col-md-6">
                <div className="widget links-widget">
                  <div className="widget-content ms-lg-4">
                    <h3 style={{ color: "white" }}>Driver Partner App</h3>
                    <img src="element.png" style={{ marginTop: "20px" }}></img>
                    <img src="element.png" style={{ marginTop: "20px" }}></img>
                  </div>
                </div>
              </div>

              {/* Column */}
              <div className="column col-lg-3 col-md-6">
                <div className="widget links-widget">
                  <div className="widget-content ms-lg-4">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Meet the Team</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column */}
              <div className="column col-lg-3 col-md-6">
                <div className="widget about-widget">
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column */}
              <div className="column col-lg-3 col-md-6">
                <div className="widget contact-widget">
                  <div className="widget-content">
                    <div className="text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          *{/* Footer Bottom */}
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="copyright">
              <div className="text">© Copyright 2023 </div>
            </div>
            <div className="logo">
              <img src="Vector.png" alt="" />
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
