import React, { useContext, useEffect, useState } from 'react'
import { Box, TextField, Typography, Button, Hidden, Grid, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { ScheduledemoContext } from '../App';
import { ref, set } from 'firebase/database';
import { db } from '../firebase.config';
import { useNavigate } from 'react-router-dom';


const Careers = () => {

  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    city: "",
    state: '',
    additionalInfo: '',
    roles: ''
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
    const useref = ref(db, 'Applications/' + id)
    set(useref, {
      ...formData,
      timeStamp: new Date().toLocaleString(),
    })
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      city: "",
      state: '',
      additionalInfo: '',
      roles: ''
    })
    navigate('/querysubmit')
  };


  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={3} mb={15} >
      <Grid container maxWidth={'1200px'}>
        <Grid item lg={12} md={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "30px" }}>
            <div className="joinasdriver_form_container" style={{ width: '90vw', maxWidth: "500px" }}>
              <p className="join-as-driver-heading">We are glad you wish to join us!</p>

              <div className="joinasdriver_form" >
                <form onSubmit={handleSubmit} className="scheduledemo_form" style={{ width: '100%' }}>

                  <FormControl>
                    <InputLabel id="demo-select-small-label1">Roles</InputLabel>
                    <Select
                      labelId="demo-select-small-label1"
                      id="demo-select-small1"
                      label='Roles'
                      value={formData.roles}
                      fullWidth
                      name='roles'
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={'For Driver Partner'}>{'For Driver Partner'}</MenuItem>
                      <MenuItem value={'For Other Roles'}>{'For Other Roles'}</MenuItem>

                    </Select></FormControl>
                  <TextField
                    required
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  />

                  <TextField
                    required
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <TextField
                    required
                    label="Contact No."
                    variant="outlined"
                    fullWidth
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                  <FormControl >
                    <InputLabel id="demo-select-small-label2">State</InputLabel>
                    <Select
                      required
                      labelId="demo-select-small-label2"
                      id="demo-select-small2"
                      value={formData.state}
                      fullWidth
                      label='State'
                      name='state'
                      onChange={handleChange}
                    >

                      {/* <MenuItem value={''}>{'state'}</MenuItem> */}
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>{state}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    label="City"
                    variant="outlined"
                    fullWidth
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />

                  <TextField
                    required
                    label="your message..."
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
                    sx={{ mt: 3 }}
                  >
                    Submit
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

export default Careers





