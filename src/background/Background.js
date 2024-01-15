import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <div className="playingvideo">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={video} type="video/mp4" />
      </video>
      </div>
      <div className="nobackground">
        <img src={fallbackImage} alt={"FallbackImage"} ></img>
      </div>
    </>
  );
};

export default Background;
