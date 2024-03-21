import { LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';


const SplashScreen = ({ setSplash }) => {
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => {
                const newCount = prevCount + 1;
                if (newCount >= 2) {
                    clearInterval(intervalId);
                }
                return newCount;
            });
        }, 1700);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prevCount => {
                const newCount = prevCount + 10;
                if (newCount >= 100) {
                    clearInterval(intervalId);
                    setSplash(false)
                }
                return newCount;
            });
        }, 420);

        return () => clearInterval(intervalId);
    }, []);
    const imageSrc = `splash${count + 1}.png`;

    return (
        <div style={{ height: '100vh', width: '100vw', background:'black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={imageSrc} alt={`Splash ${count}`} style={{ maxWidth: '80vw', maxHeight: '60vh' }} />
            
            {/* <video src={'onbordingvideo.mp4'} autoPlay={true} onError={(e) => console.error('Video playback error:', e)} style={{height:'40vh'}}/> */}

            <br />
            <br />
            <LinearProgress variant="buffer" value={progress} sx={{
                width: '65vw', "& .MuiLinearProgress-bar1Buffer": {
                    bgcolor: '#FB561E'
                }, "& .MuiLinearProgress-bar2Buffer": {
                    bgcolor: '#2F2C33'
                },
                p:0.4,
                borderRadius:2
            }} />
        </div>
    );
};

export default SplashScreen;

