import React from 'react'
import deadlift from "/src/assets/Videos/deadlift.mp4";
import cover from "/src/assets/Images/cover.png";
import { Helmet } from 'react-helmet-async';
export default function DeadLift() {
  return (
    <>
    <Helmet>
      <title>
        Deadlift
      </title>
    </Helmet>
      <div className="deadlift-section d-flex justify-content-center align-items-center">
              <div className="custom-card text-center p-4 shadow-lg rounded-4">
                <h2 className="text-white mb-4"> deadlift</h2>
                <video
                  width="100%"
                  height="h-50"
                  controls
                  playsInline
                  poster={cover}
                  className="rounded-3 border border-white"
                >
                  <source src={deadlift} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
    </>
  )
}
