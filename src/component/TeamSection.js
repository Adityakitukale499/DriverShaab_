import React from 'react';
import '../Assets/css/style.css'
import '../Assets/css/bootstrap.css'
import '../Assets/css/responsive.css'
import '../Assets/css/color.css'
import BubbleLayout from './BubbleLayout/BubbleLayout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const TeamSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", position: 'relative' }}>
        <section className="our-team-section style-two" max-width="1200px" style={{zIndex:2}}>
          <div className="auto-container" >
            <div className="sec-title text-center">

              <h2>Meet Our Experts</h2>
              {/* <div className="image-container text-center">

              </div> */}
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div key={index} className={`col-lg-2 col-md-6 col-xs-6 team-block-one colno${index}`}>
                  <div className="frame">
                    <div className="inner-box">
                      <div className="image img_hover_3">
                        {/* <Avatar src={member.imageSrc} sx={{ height: '160px', width: '160px' }} /> */}
                        <img src={member.imageSrc} alt={member.name} style={{width:'100%'}} />
                      </div>
                      <div className="lower-content">
                        <div className="name">{member.name}</div>
                        <div className="designation">{member.designation}</div>
                        <ul className="social-links" >
                          {member.socialLinks.map((link, i) => (
                            <li key={`socialLinks${Math.random()}`} >
                              <a href={link.url} target="_blank" rel='noreferrer' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                {link.icon === 'LinkedInIcon' && <LinkedInIcon sx={{ fontSize: '20px', }}  />}
                                {link.icon === 'MailOutlineIcon' && <MailOutlineIcon sx={{ fontSize: '20px',}} />}
                                {link.icon === 'FacebookIcon' && <FacebookIcon sx={{ fontSize: '20px', }} />}
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
      <BubbleLayout />
      </div>

    </div>
  );
};

const teamMembers = [
  {
    name: 'Neha Shaikh',
    designation: 'Head of Procurement',
    imageSrc: 'nehaupdated.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/daisy-saikia-16072211a', icon: 'LinkedInIcon' },
      { url: 'mailto:neha.shaikh@drivershaab.com', icon: 'MailOutlineIcon' },
      { url: '#', icon: 'FacebookIcon'},
    ],
  },
  {
    name: 'Arpit Sinha',
    designation: 'Head of Supply',
    imageSrc: 'apritupdated.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/arpit-sinha-60593834', icon: 'LinkedInIcon'},
      { url: 'mailto:arpit.sinha@drivershaab.com', icon: 'MailOutlineIcon' },
      {
        url: '#', icon: 'FacebookIcon'
      }]
  },
  {
    name: 'James Joy',
    designation: 'Head of Operations',
    imageSrc: 'jamesh.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/james-joy-a77358241', icon: 'LinkedInIcon'},
      { url: '#', icon: 'MailOutlineIcon' },
      {
        url: '#', icon: 'FacebookIcon'
      }]
  },
  {
    name: 'Poulami Chaterjee',
    designation: 'Head of Marketing',
    imageSrc: 'poulami.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/vama-sethia-16116816b', icon: 'LinkedInIcon'},
      { url: '#', icon: 'MailOutlineIcon' },
      {
        url: '#', icon: 'FacebookIcon'
      }]
  },
  {
    name: 'Anchal Negi',
    designation: 'Recruiter at DriverShaab',
    imageSrc: 'anchal.jpg',
    socialLinks: [
      { url: 'https://www.linkedin.com/in/anchal-negi-155562260/', icon: 'LinkedInIcon'},
      { url: 'mailto:Anchal.negi@drivershaab.com', icon: 'MailOutlineIcon' },
      {
        url: '#', icon: 'FacebookIcon'
      }]
  }
];

export default TeamSection;