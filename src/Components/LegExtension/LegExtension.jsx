import React from 'react'
import cover from "/src/assets/Images/cover.png";
import quadriceps_1 from "/src/assets/Videos/QuadricepsEx/quadriceps_1.mp4";
import { Helmet } from 'react-helmet-async';
export default function LegExtension() {
  return (
    <>
      
<Helmet>
  <title>
    Leg-Extension
  </title>
</Helmet>
   <div className="leg-extension-section d-flex justify-content-center align-items-center">
        <div className="custom-card text-center p-4 shadow-lg rounded-4">
          <h2 className="text-white mb-4"> leg-extension</h2>
          <video
            width="100%"
            height="h-50"
            controls
            playsInline
            poster={cover}
            className="rounded-3 border border-white"
          >
            <source src={quadriceps_1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </>
  )
}
