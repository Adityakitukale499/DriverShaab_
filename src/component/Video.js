import React from "react";
import YoutubeVideo from "../Assets/images/YoutubeVideo.png";

const Video = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "113px", width: "100%" }}>
          <p
            style={{
              fontWeight: "500",
              fontFamily: "Inter",
              fontSize: "32px",
              lineHeight: "38.4px",
              textAlign: "center",
            }}
          >
            How Businesses can use Drivershaab app
          </p>
        </div>
        <img
          src={YoutubeVideo}
          alt="video"
          style={{
            maxWidth:'1200px', width: "90%" ,margin:"0 5%", marginBottom:'40px', borderRadius:'10px'}}
        />
      </div>
      
    </div>
  );
};

export default Video;
