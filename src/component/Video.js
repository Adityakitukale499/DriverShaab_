import React from "react";
import YoutubeVideo from "../Assets/images/YoutubeVideo.png";

const Video = () => {
  return (
    <div
      style={{
        width: "100vw",
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
          margin: "auto"
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
          style={{ width: "90%", borderRadius: "2px" ,margin:"0 5%"}}
        />
      </div>
      
    </div>
  );
};

export default Video;
