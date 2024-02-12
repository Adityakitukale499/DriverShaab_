import React from "react";
import { Container, Typography, Box } from "@mui/material";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import smartPhone  from "../Assets/images/smartPhone.png"
// import '../Assets/css/revolution-slider.css'

const FeatureSection = () => {
  const servicesData = [
    {
      icon: <img src={smartPhone} style={{height:"53px",width:"53px"}}/>,
      number: "01",
      title: "Real Time Tracking",
      text: "  Enjoy peace of mind with our advanced real-time tracking feature. Stay informed about your journey's progress, monitor the driver's location, and receive accurate ETAs.",
    },
    {
      icon: <PhoneAndroidOutlinedIcon />,
      number: "02",
      title: "Enhanced Security Measures",
      text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
    },
    {
      icon: <PhoneAndroidOutlinedIcon />,
      number: "03",
      title: "24/7 Customer Support",
      text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
    },
    {
      icon: <PhoneAndroidOutlinedIcon />,
      number: "04",
      title: "Credibility & Trust",
      text: "With a successful track record of five years, Drivershaab has become synonymous with credibility and trust.",
    },
    {
      icon: <PhoneAndroidOutlinedIcon />,
      number: "05",
      title: "Vehicle Cleanliness",
      text: "A comfortable journey begins with a well-maintained and clean vehicle. Drivershaab ensures that our fleet undergoes regular maintenance, adhering to the highest standards of cleanliness..",
    },
    {
      icon: <PhoneAndroidOutlinedIcon />,
      number: "06",
      title: "Privacy",
      text: " We understand the importance of confidentiality. Drivershaab values your privacy, and our drivers are trained to respect it. ",
    },
  ];

  return (
    <section className="services-section-one">
      <Container>
        <Box className="content-container">
          <div className="sec-title">
            <div className="inner-title-box">
              <Typography variant="h2">
                PROVIDING AMAZING FEATURES TO OUR CLIENTS
              </Typography>
              <Typography variant="h4" className="rotate-text">
                SERVICES
              </Typography>
            </div>
          </div>

          <div className="row clearfix">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="services-block col-md-4 col-sm-6 col-xs-12"
              >
                <div className="inner-box">
                  <div className="upper-box">
                    <div className="icon-box">{service.icon}</div>
                    <span className="number">{service.number}</span>
                  </div>
                  <div className="lower-box">
                    <Typography variant="h3">
                      <a href="services.html">{service.title}</a>
                    </Typography>
                    <div className="text">{service.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default FeatureSection;






// import React from "react";
// import { Container, Typography, Box } from "@mui/material";
// import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
// import "../Assets/css/style.css";
// import "../Assets/css/bootstrap.css";
// import "../Assets/css/responsive.css";
// // import '../Assets/css/revolution-slider.css'
// import line from "../Assets/images/line.png";

// const FeatureSection = () => {
//   const servicesData = [
//     {
//       icon: <PhoneAndroidOutlinedIcon />,
//       number: "01",
//       title: "Real Time Tracking",
//       text: "  Enjoy peace of mind with our advanced real-time tracking feature. Stay informed about your journey's progress, monitor the driver's location, and receive accurate ETAs.",
//     },
//     {
//       icon: <PhoneAndroidOutlinedIcon />,
//       number: "02",
//       title: "Enhanced Security Measures",
//       text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
//     },
//     {
//       icon: <PhoneAndroidOutlinedIcon />,
//       number: "03",
//       title: "24/7 Customer Support",
//       text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
//     },
//     {
//       icon: <PhoneAndroidOutlinedIcon />,
//       number: "04",
//       title: "Credibility & Trust",
//       text: "With a successful track record of five years, Drivershaab has become synonymous with credibility and trust.",
//     },
//     {
//       icon: <PhoneAndroidOutlinedIcon />,
//       number: "05",
//       title: "Vehicle Cleanliness",
//       text: "A comfortable journey begins with a well-maintained and clean vehicle. Drivershaab ensures that our fleet undergoes regular maintenance, adhering to the highest standards of cleanliness..",
//     },
//     {
//       icon: <PhoneAndroidOutlinedIcon />,
//       number: "06",
//       title: "Privacy",
//       text: " We understand the importance of confidentiality. Drivershaab values your privacy, and our drivers are trained to respect it. ",
//     },
//   ];

//   return (
//     <div className="aboutus_container" >
//         <div className="servise_text_container">

//           <div className="aboutus_text_slash">
//             <div className="aboutus_blur_heading">About us</div>
//             <div className="line_img">
//               <img src={line} alt="lineimg" style={{ height: "52px" }} />
//             </div>
//           </div>

//           <div className="">
//             {servicesData.map((service, index) => (
//               <div
//                 key={index}
//                 className="services-block col-md-4 col-sm-6 col-xs-12"
//               >
//                 <div className="inner-box">
//                   <div className="upper-box">
//                     <div className="icon-box">{service.icon}</div>
//                     <span className="number">{service.number}</span>
//                   </div>
//                   <div className="lower-box">
//                     <Typography variant="h3">
//                       <a href="services.html">{service.title}</a>
//                     </Typography>
//                     <div className="text">{service.text}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>


//         </div>



//       </div>
//     // <section className="services-section-one">
 
//     //     <Box  sx={{mx:'15%'}}>
//     //       <div className="sec-title">
//     //         <div className="inner-title-box">
//     //           <Typography variant="h2">
//     //             PROVIDING AMAZING FEATURES TO OUR CLIENTS
//     //           </Typography>
//     //           <Typography variant="h4" className="rotate-title">
//     //             SERVICES
//     //           </Typography>
//     //         </div>
//     //       </div>

//           // <div className="row clearfix">
//           //   {servicesData.map((service, index) => (
//           //     <div
//           //       key={index}
//           //       className="services-block col-md-4 col-sm-6 col-xs-12"
//           //     >
//           //       <div className="inner-box">
//           //         <div className="upper-box">
//           //           <div className="icon-box">{service.icon}</div>
//           //           <span className="number">{service.number}</span>
//           //         </div>
//           //         <div className="lower-box">
//           //           <Typography variant="h3">
//           //             <a href="services.html">{service.title}</a>
//           //           </Typography>
//           //           <div className="text">{service.text}</div>
//           //         </div>
//           //       </div>
//           //     </div>
//           //   ))}
//           // </div>
//     //     </Box>
//     // </section>
//   );
// };

// export default FeatureSection;

// // Update webpack Configuration:
// // If you're using Webpack, check your webpack configuration to make sure it's correctly configured to resolve CSS files. Ensure that the 'css-loader' is set up properly in your webpack configuration.

// // Example webpack.config.js:

// // js
// // Copy code
// // module.exports = {
// //   // ...
// //   module: {
// //     rules: [
// //       {
// //         test: /\.css$/,
// //         use: ['style-loader', 'css-loader'],
// //       },
// //     ],
// //   },
// // };
