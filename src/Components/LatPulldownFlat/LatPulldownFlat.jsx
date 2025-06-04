import React from "react";
import latissimusdorsi_2 from "/src/assets/Videos/Lat_DorsiEx/latissimusdorsi_2.mp4";
import cover from "/src/assets/Images/cover.png";
import { Helmet } from "react-helmet-async";
export default function LatPulldownFlat() {
  return (
    <>
      <Helmet>
        <title>Latpull-Down-Flat</title>
      </Helmet>
      <div className="latpull-down-flat-section d-flex justify-content-center align-items-center">
        <div className="custom-card text-center p-4 shadow-lg rounded-4">
          <h2 className="text-white mb-4"> latpull-down-flat</h2>
          <video
            width="100%"
            height="h-50"
            controls
            playsInline
            poster={cover}
            className="rounded-3 border border-white"
          >
            <source src={latissimusdorsi_2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
