import React from 'react'
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/style.css";
import "../Assets/css/color.css";
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <>
    <Box sx={{bgcolor:'#212121', pt:2.5}}>
    <footer className="customfooter" >
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
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/aboutus">About Us</a>
                      </li>
                      <li>
                        <a href="/contactus">Meet the Team</a>
                      </li>
                      <li>
                        <a href="/contactus">Contact</a>
                      </li>
                      <li>
                        <a href="/inidividual">Services</a>
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
    </Box>
    
    <div className="footer-bottom">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="copyright">
              <div className="text" style={{textAlign:'center'}}>@copyright <br /> change it to all rights reserved to <br />SATADRU TECHNOLOGIES PRIVATE LIMITED </div>
            </div>
            <div className="logo">
              <img src="unnamed.png" alt="" style={{height:'60px'}} />
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
    </>
  )
}

export default Footer