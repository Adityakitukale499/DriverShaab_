import React, { useContext, useEffect, useState } from 'react'
import { Box, TextField, Typography, Button, Hidden, Grid } from "@mui/material";
import { ScheduledemoContext } from '../../App';
import { ref, set } from 'firebase/database';
import { db } from '../../firebase.config';
import { useNavigate } from 'react-router-dom';


const SchuduleDemoForm = () => {
  const { scheduledemo, setScheduledemo } = useContext(ScheduledemoContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (scheduledemo) {
      document.getElementById("scheduledemo").scrollIntoView();
      window.scrollBy(0, -80);
      setScheduledemo(false)
    }else{
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    city: "",
    additionalInfo: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && !formData.email && !formData.contactNo) {
      return;
    }
    const id = Date.now()
    const useref = ref(db, 'DemoRequests/' + id)
    set(useref, {
      ...formData,
      timeStamp: new Date().toLocaleString(),
    })
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      city: "",
      additionalInfo: '',
    })
    navigate('/querysubmit')
  };

  return (
    <Box display={'flex'} justifyContent={'center'} mt={2} id='scheduledemo'>
      <Grid container maxWidth={'1200px'}>
        <Grid item lg={12} md={12} xs={12} display={'flex'} justifyContent={{ lg: 'end', xs: 'center' }} alignItems={'center'}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "30px", width: '90vw', maxWidth: "500px" }}>
            <div className="joinasdriver_form_container">
              <div className="joinasdriver_heading">
                <p className="join-as-driver-heading">Schedule a demo with us</p>
                <p className="join-as-driver-sub-heading">
                  A At DriverShaab, we provide PAN India level B2B services To corporate
                  and logistics companies.
                </p>
              </div>

              <div className="joinasdriver_form" >
                <form onSubmit={handleSubmit} className="scheduledemo_form" style={{ width: '100%' }}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={{'& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root':{fontSize:'15px'}}}
                  />

                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{'& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root':{fontSize:'15px'}}}
                  />

                  <TextField
                    label="Contact No."
                    variant="outlined"
                    fullWidth
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    sx={{'& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root':{fontSize:'15px'}}}
                  />

                  <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    sx={{'& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root':{fontSize:'15px'}}}
                  />

                  <TextField
                    label="your message..."
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    sx={{'& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root':{fontSize:'15px'}}}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    className="join-as-driver-btn"
                    sx={{fontSize:"15px", textTransform:'none'}}
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





