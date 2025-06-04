import React from 'react'
import { Helmet } from 'react-helmet-async'
import Calf_1 from "/src/assets/Videos/GastrocnemiusEx/Calf_1.mp4";
import cover from "/src/assets/Images/cover.png";
export default function StandingCalfRaiseAssisted() {
  return (
    <>


    <Helmet>
          <title>
            Standing-Calf-Raise-Assisted
          </title>
        </Helmet>

         <div
              className="standing-calf-raise-assisted-section d-flex justify-content-center align-items-center"
            >
              <div className="custom-card text-center p-4 shadow-lg rounded-4">
                <h2 className="text-white mb-4">Standing-Calf-Raise-Assisted</h2>
                <video
                  width="100%"
                  height="h-50"
                  controls
                  playsInline
                  poster={cover}
                  className="rounded-3 border border-white"
                >
                  <source src={Calf_1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
      
    </>
  )
}
