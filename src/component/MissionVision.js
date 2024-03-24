import { Box, Typography } from '@mui/material'
import React from 'react'

const MissionVision = () => {
    return (
        <Box sx={{
            backgroundImage: "url(" + "missionback.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
        }}>
            <Box sx={{ maxWidth: '1300px', textAlign: 'center',px:2 }}>
                <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 700, fontSize: '36px', lineHeight: '42px', color: '#fff', textAlign: 'center' }}>Our Mission </Typography>
                <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#fff', my: 3, fontStyle: 'italic' }}>
                    " India’s Largest Technology enabled Driver Partner Market place "</Typography>

                <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 700, fontSize: '36px', lineHeight: '42px', color: '#fff', textAlign: 'center' }}>Our Vision </Typography>
                <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#fff', my: 3, fontStyle: 'italic' }}>
                    " To continuously improve, innovate and revolutionize the Driver partner ecosystem "</Typography>
            </Box>
        </Box>
    )
}

export default MissionVision