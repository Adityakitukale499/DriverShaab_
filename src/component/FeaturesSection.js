import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";

// import '../Assets/css/revolution-slider.css'

const FeatureSection = () => {
  const servicesData = [
    {
      icon: <img src={'featureimg2.png'}/>,
      number: "01",
      title: "Real Time Tracking",
      text: "  Enjoy peace of mind with our advanced real-time tracking feature. Stay informed about your journey's progress, monitor the driver's location, and receive accurate ETAs.",
    },
    {
      icon: <img src={'featureimg1.png'}/>,
      number: "02",
      title: "Enhanced Security Measures",
      text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
    },
    {
      icon: <img src={'featureimg3.png'}/>,
      number: "03",
      title: "24/7 Customer Support",
      text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
    },
    {
      icon: <img src={'featureimg4.png'}/>,
      number: "04",
      title: "Credibility & Trust",
      text: "With a successful track record of five years, Drivershaab has become synonymous with credibility and trust.",
    },
    {
      icon: <img src={'featureimg5.png'}/>,
      number: "05",
      title: "Vehicle Cleanliness",
      text: "A comfortable journey begins with a well-maintained and clean vehicle. Drivershaab ensures that our fleet undergoes regular maintenance, adhering to the highest standards of cleanliness..",
    },
    {
      icon: <img src={'featureimg6.png'}/>,
      number: "06",
      title: "Privacy",
      text: " We understand the importance of confidentiality. Drivershaab values your privacy, and our drivers are trained to respect it. ",
    },
  ];

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center", width:"100vw", backgroundColor:'#f1f1f1', position:'relative', zIndex:11}}>
    <section className="services-section-one" style={{backgroundColor:'#f1f1f1'}} >
      <Container>
        <Box className="content-container" sx={{backgroundColor:'#f1f1f1'}}>
          <div className="sec-title">
            <div className="inner-title-box">
              <Typography variant="h2" >
                PROVIDING AMAZING FEATURES TO OUR CLIENTS
              </Typography>
              <Typography variant="h4"className="rotate-text" style={{color:'#ffffff'}} >
                FEATURES
              </Typography>
            </div>
          </div>

          <div className="row clearfix" style={{backgroundColor:'#f1f1f1'}}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="services-block col-md-4 col-sm-6 col-xs-6"
              >
                <div className="inner-box">
                  <div className="upper-box">
                    <div className="icon-box">{service.icon}</div>
                    <span className="number">{service.number}</span>
                  </div>
                  <div className="lower-box" style={{height:'200px', overflow:'scroll'}}>
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
    </div>
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
//       icon:<img src={smartPhone} style={{height:"53px",width:"53px"}}/>,
//       number: "01",
//       title: "Real Time Tracking",
//       text: "  Enjoy peace of mind with our advanced real-time tracking feature. Stay informed about your journey's progress, monitor the driver's location, and receive accurate ETAs.",
//     },
//     {
//       icon:<img src={smartPhone} style={{height:"53px",width:"53px"}}/>,
//       number: "02",
//       title: "Enhanced Security Measures",
//       text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
//     },
//     {
//       icon:<img src={smartPhone} style={{height:"53px",width:"53px"}}/>,
//       number: "03",
//       title: "24/7 Customer Support",
//       text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
//     },
//     {
//       icon:<img src={smartPhone} style={{height:"53px",width:"53px"}}/>,
//       number: "04",
//       title: "Credibility & Trust",
//       text: "With a successful track record of five years, Drivershaab has become synonymous with credibility and trust.",
//     },
//     {
//       icon:<img src={smartPhone} style={{height:"53px",width:"53px"}}/>,
//       number: "05",
//       title: "Vehicle Cleanliness",
//       text: "A comfortable journey begins with a well-maintained and clean vehicle. Drivershaab ensures that our fleet undergoes regular maintenance, adhering to the highest standards of cleanliness..",
//     },
//     {
//       icon:<img src={smartPhone} style={{height:"53px",width:"53px"}}/>,
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
