import React from 'react'
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
    const navigate = useNavigate()
    setTimeout(()=>{navigate('/')},11000)
  return (
    <video src="WhatsApp Video 2024-02-12 at 15.39.30_0c88ca1e.mp4"></video>
  )
}

export default SplashScreen