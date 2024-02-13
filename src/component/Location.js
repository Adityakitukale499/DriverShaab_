import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Location = () => {
  return (
    // <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
    <Box sx={{
      backgroundImage: "url(" + "div.section-location.png" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: 4,
    
    }}>
      <Grid container sx={{maxWidth:'1300px'}}>
        <Grid item lg={6} xs={12} sx={{ p: 5 ,px:{lg:10,xs:0}}} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

          <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 700, fontSize: '36px', lineHeight: '42px', color: '#fff'}}>We Have Now <span style={{ color: '#FB561E' }}>20+</span> Locations</Typography>
          <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#fff',my:3 }}>Labore dolore magna aliqua ipsum veniam quis nostrud exercitation voluptate eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod.</Typography>
          <Button sx={{bgcolor:'#FB561E', color:'#fff', borderRadius:10, px:3, fontSize:{lg:'22px',xs:'17px'}, fontFamily:'Inter',fontWeight:500}}>join as driver partner</Button>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' ,mb:2}}>
            <img src="img-location-map.png.png" alt="" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap:2,mt:2 }}>
            <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 300, fontSize: '48px', lineHeight: '20px', color: '#FB561E', textAlign: 'center' }}>1470 <br /> <br /> <span style={{ fontWeight: 400, fontSize: '14px', lineHeight: '0px', color: '#fff' }}>Rental Cars Fleet</span> </Typography>
            <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 300, fontSize: '48px', lineHeight: '20px', color: '#FB561E', textAlign: 'center' }}>265 <br /> <br /> <span style={{ fontWeight: 400, fontSize: '14px', lineHeight: '0px', color: '#fff' }}>5 Star Reviews</span> </Typography>
            <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 300, fontSize: '48px', lineHeight: '20px', color: '#FB561E', textAlign: 'center' }}>308 <br /> <br /> <span style={{ fontWeight: 400, fontSize: '14px', lineHeight: '0px', color: '#fff' }}>Rental Awards</span> </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // </div>
  )
}

export default Location