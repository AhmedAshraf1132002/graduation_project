import React from 'react'
import { Helmet } from 'react-helmet-async'
import latissimusdorsi_2 from "/src/assets/Videos/QuadricepsEx/quad_3.mp4";
import cover from "/src/assets/Images/cover.png";
export default function ExerciseLegPress() {
  return (
    <>
       <Helmet>
              <title>Exercise-Leg-Press</title>
            </Helmet>
            <div className="exercise-leg-Press-section d-flex justify-content-center align-items-center">
              <div className="custom-card text-center p-4 shadow-lg rounded-4">
                <h2 className="text-white mb-4"> Exercise-Leg-Press</h2>
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
  )
}
