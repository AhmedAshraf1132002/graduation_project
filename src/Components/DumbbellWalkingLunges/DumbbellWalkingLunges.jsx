import React from "react";
import { Helmet } from "react-helmet-async";
import Dumbbell_Static_Lunge from "/src/assets/Videos/Dumbbell-Static-Lunge.mp4";
import cover from "/src/assets/Images/cover.png";
export default function DumbbellWalkingLunges() {
  return (
    <>
      <Helmet>
        <title>Dumbbell-Walking-Lunges</title>
      </Helmet>

      <div className="dumbbell-walking-lunges-section d-flex justify-content-center align-items-center ">
        <div className="custom-card text-center p-4 shadow-lg rounded-4">
          <h2 className="text-white mb-4">Dumbbell-Walking-Lunges</h2>
          <video
            width="100%"
            height="h-50"
            controls
            playsInline
            poster={cover}
            className="rounded-3 border border-white"
          >
            <source src={Dumbbell_Static_Lunge} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
