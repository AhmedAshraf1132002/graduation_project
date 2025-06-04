import React from "react";
import cover from "/src/assets/Images/cover.png";
import biceps_2 from "/src/assets/Videos/BicepsEx/biceps_2.mp4";
import { Helmet } from "react-helmet-async";
export default function DumbbellCurlFlat() {
  return (
    <>
    <Helmet>
      <title>
        Dumbbell-Curl-Flat
      </title>
    </Helmet>
      <div className="dumbbell-curl-flat-section d-flex justify-content-center align-items-center">
        <div className="custom-card text-center p-4 shadow-lg rounded-4">
          <h2 className="text-white mb-4"> dumbbell-curl-flat</h2>
          <video
            width="100%"
            height="h-50"
            controls
            playsInline
            poster={cover}
            className="rounded-3 border border-white"
          >
            <source src={biceps_2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
