import React from 'react';
import '../Assets/css/style.css'
import '../Assets/css/bootstrap.css'
import '../Assets/css/responsive.css'
import '../Assets/css/color.css'
import BubbleLayout from './BubbleLayout/BubbleLayout';
import line from "../Assets/images/line.png";
import { useMediaQuery } from '@mui/material';


const TeamSection = () => {
  const isdescktop = useMediaQuery('1000px')
  return (
    <div style={{ position: 'relative' }}>


      <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", position: 'relative' }}>
        <div className="aboutus_text_slash" style={{ marginRight: '70px', marginLeft: '-200px', display: isdescktop ? 'block' : 'none' }}>
          <div className="aboutus_blur_heading">Teams</div>
          <div className="line_img">
            <img src={line} alt="lineimg" style={{ height: "52px" }} />
          </div>
        </div>
        <BubbleLayout />
        <section className="our-team-section style-two" max-width="1200px">
          <div className="auto-container">
            <div className="sec-title text-center">
              {/* <div className="intro-paragraph" style={{height:"fitContent", width: 'auto', margin: '20px auto', fontFamily: 'Inter', fontSize: '20px', fontWeight: 400, lineHeight: '30px', letterSpacing: '0em', textAlign: 'center' }}>
  <h1>Elevating Journeys for 5 Years</h1>
  <p>Drivershaab has been dedicated to providing unparalleled driver services to individuals and businesses across 25 cities, covering an impressive distance of over 5000 km. Our story is one of commitment, reliability, and the unwavering pursuit of excellence.</p>
</div>
<img src="img.png" alt="img.png" style={{ maxWidth: '100%', borderRadius: '9px', margin: '20px auto' }} /> */}


              <h2>Meet Our Experts</h2>
              <div className="image-container text-center">

              </div>
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-xs-6 team-block-one">
                  <div className="frame">
                    <div className="inner-box">
                      <div className="image img_hover_3">
                      <img style={{height:'170px'}} src={member.imageSrc} alt={member.name} />
                      </div>
                      <div className="lower-content" style={{width:'230px'}}>
                        <div className="name">{member.name}</div>
                        <div className="designation">{member.designation}</div>
                        <ul className="social-links">
                          {member.socialLinks.map((link, i) => (
                            <li key={i}>
                              <a href={link.url} target="_blank">
                                <i className={`fab ${link.icon}`}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: 'Neha Shaikh',
    designation: 'Head of Procurement',
    imageSrc: 'neha.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/daisy-saikia-16072211a', icon: 'fa-linkedin' },
      { url: '#', icon: 'fa-facebook-f' },
      { url: '#', icon: 'fa-instagram' },
    ],
  },
  {
    name: 'Arpit Sinha',
    designation: 'Head of Supply',
    imageSrc: 'arpit.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/arpit-sinha-60593834', icon: 'fa-linkedin' },
      { url: '#', icon: 'fa-facebook-f' },
      { url: '#', icon: 'fa-instagram' },
    ],
  },
  {
    name: 'James Joy',
    designation: 'Head of Operations',
    imageSrc: 'jamesh.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/james-joy-a77358241', icon: 'fa-linkedin' },
      { url: '#', icon: 'fa-facebook-f' },
      { url: '#', icon: 'fa-instagram' },
    ],
  },
  {
    name: 'Poulami Chaterjee',
    designation: 'Head of Marketing',
    imageSrc: 'poulami.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/vama-sethia-16116816b', icon: 'fa-linkedin' },
      { url: '#', icon: 'fa-facebook-f' },
      { url: '#', icon: 'fa-instagram' },
    ],
  }
];

export default TeamSection;