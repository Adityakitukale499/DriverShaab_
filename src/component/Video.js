import React from "react";
import YoutubeVideo from "../Assets/images/YoutubeVideo.png";

const Video = () => {
  return (
    <div style={{ margin: "auto" }}>
      <div
        style={{
          height: "521px",
          width: "855px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto"
        }}
      >
        <div style={{ height: "113px", width: "855px" }}>
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
          style={{ height: "408px", width: "855px", borderRadius: "2px" }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Video;
