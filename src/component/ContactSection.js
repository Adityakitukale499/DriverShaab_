import React from "react";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";

const ContactSection = () => {
  return (
    <div>
      <div className="group-title">
        <h3
          style={{
            fontFamily: "Inter",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "38px",
            letterSpacing: "0em",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Contact US
        </h3>

        <div
          className="text"
          style={{
            color: "orange",
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Let us know how we can help
        </div>
        <div className="contact-section">
          <div className="auto-container"></div>
          <div className="row clearfix">
            <div className="map-column column col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <section className="map-section">
                <div className="map-outer">{/* Map Canvas */}</div>

                <div className="map-content">
                  <div className="address-container">
                    <div className="address-text">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="entypo_address.png"
                          alt="Address Icon"
                          style={{
                            width: "24px",
                            height: "21.6px",
                            top: "1.2px",
                            marginBottom: "-10px",
                          }}
                        />
                        <h3
                          style={{
                            width: "85px",
                            height: "24px",
                            fontFamily: "Inter",
                            fontSize: "20px",
                            fontWeight: "bold",
                            lineHeight: "24px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            marginLeft: "10px",
                            color: "black",
                          }}
                        >
                          Address.
                        </h3>
                      </div>

                      <p>
                        Satadru Technologies Private Limited <br />
                        42/132/A New Ballygunge Road, <br />
                        New Kasba Police Station <br />
                        Kolkata, India 700039
                      </p>
                    </div>
                  </div>
                  <div className="contact-info">
                    <>
                      <div style={{ marginBottom: "20px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            src="email.png"
                            style={{
                              width: "24px",
                              height: "25px",
                              padding: "4px 2px",
                              marginBottom: "-10px",
                            }}
                          />
                          <h3
                            style={{
                              width: "85px",
                              height: "24px",
                              fontFamily: "Inter",
                              fontSize: "20px",
                              fontWeight: 500,
                              lineHeight: "24px",
                              letterSpacing: "0em",
                              textAlign: "left",
                              marginLeft: "10px",
                              color: "black",
                              fontWeight: "bold",
                              marginBottom: "0",
                            }}
                          >
                            Email Id
                          </h3>
                        </div>
                        <p style={{ marginBottom: "20px" }}>
                          info@drivershaab.com
                        </p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="phone.png"
                            style={{
                              width: "24px",
                              height: "24px",
                              padding: "3px",
                            }}
                          />
                          <h3
                            style={{
                              width: "115px",
                              fontFamily: "Inter",
                              fontSize: "20px",
                              fontWeight: 500,
                              lineHeight: "24px",
                              letterSpacing: "0em",
                              textAlign: "left",
                              margin: "0 10px",
                              color: "black",
                              fontWeight: "bold",
                              marginBottom: "0",
                            }}
                          >
                            Contact No.
                          </h3>
                        </div>
                        <p style={{ marginBottom: "20px" }}>8929000462</p>
                      </div>
                    </>
                  </div>
                </div>
              </section>
            </div>

            {/* Form Column */}
            <div className="form-column column col-lg-7 col-md-12 col-sm-12 col-xs-12">
              {/* Contact Form */}

              <div className="contact-form">
                <div className="group-title"></div>
                {/* Contact Form */}
                <form method="post" action="sendemail.php" id="contact-form">
                  <div className="row clearfix">
                    <div className="col-md-12 col-sm-6 col-xs-12 form-group">
                      <input type="text" name="username" placeholder="Name *" />
                    </div>

                    <div className="col-md-12 col-sm-6 col-xs-12 form-group">
                      <input type="email" name="email" placeholder="Email *" />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
