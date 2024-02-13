import React,{useState} from 'react'
import { Box, TextField, Typography, Button, Hidden, Grid } from "@mui/material";


const SchuduleDemoForm = () => {
  
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        contactNo: "",
        city: "",
        requirement: "",
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
      };

  return (
    <Box display={'flex'} justifyContent={'center'} my={2}>
    <Grid container maxWidth={'1200px'}>
      <Grid item lg={6} display={{lg:'flex',xs:'none'}} justifyContent={'center'}>
        <img src="scheduledemo.png" alt="" />
      </Grid>
      <Grid item lg={6} md={12} xs={12} display={'flex'} justifyContent={'center'}>
      <div style={{display:'flex',marginTop:"30px",maxWidth:"500px",}}>
       <div className="joinasdriver_form_container">
          <div className="joinasdriver_heading">
            <p className="join-as-driver-heading">Schedule a demo with us</p>
            <p className="join-as-driver-sub-heading">
              A At DriverShaab, we provide PAN India level B2B services To corporate
             and logistics companies.
            </p>
          </div>

          <div className="joinasdriver_form">
            <form onSubmit={handleSubmit} className="scheduledemo_form">
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Contact No."
                variant="outlined"
                fullWidth
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
              />

              <TextField
                label="City"
                variant="outlined"
                fullWidth
                name="city"
                value={formData.city}
                onChange={handleChange}
              />

              <TextField
                label="Additional Info"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                className="join-as-driver-btn"
              >
                Schedule Demo
              </Button>
            </form>
          </div>
          </div>
    </div>
      </Grid>
    </Grid>
    </Box>
  )
}

export default SchuduleDemoForm



// const SchuduleDemoForm = () => {
//   const [formData, setFormData] = useState({
//       companyName: "",
//       email: "",
//       contactNo: "",
//       city: "",
//       requirement: "",
//     });
  
//     const handleChange = (event) => {
//       setFormData({
//         ...formData,
//         [event.target.name]: event.target.value,
//       });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log("Form submitted:", formData);
//     };

// return (
//   <div 
//   // style={{ display:'flex',flexDirection:'column',height:"875px",width:"500px",  justifyContent:"center", margin:"auto"}}
//   >
//      <div className="schduledemo_container">
//         <div className="schduledemo_heading">
//           <p className="scheduledemo_heading">Schedule a demo with us</p>
//           <p className="scheduledemo_sub_heading">
//             A At DriverShaab, we provide PAN India level B2B services To corporate
//            and logistics companies.
//           </p>
//         </div>

//         <div className="schduledemo_form_container">
//           <form onSubmit={handleSubmit} className="scheduledemo_form">
//             <TextField
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//             />

//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <TextField
//               label="Contact No."
//               variant="outlined"
//               fullWidth
//               name="contactNo"
//               value={formData.contactNo}
//               onChange={handleChange}
//             />

//             <TextField
//               label="City"
//               variant="outlined"
//               fullWidth
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//             />

//             <TextField
//               label="Additional Info"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               name="additionalInfo"
//               value={formData.additionalInfo}
//               onChange={handleChange}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               className="scheduledemo-btn"
//             >
//               Schedule Demo
//             </Button>
//           </form>
//         </div>
//         </div>
//   </div>
// )
// }

// export default SchuduleDemoForm


