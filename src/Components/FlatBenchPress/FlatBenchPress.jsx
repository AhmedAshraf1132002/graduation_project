import React from 'react'
import { Helmet } from 'react-helmet-async'
import cover from "/src/assets/Images/cover.png";
import Flat_Bench_Press from "/src/assets/Videos/ChestEx/Flat_Bench_Press.mp4";
export default function FlatBenchPress() {
  return (
    <>
       <Helmet>
            <title>
              Flat-Bench-Press
            </title>
          </Helmet>
        
          <div
            className="flat-bench-press-section d-flex justify-content-center align-items-center"
          >
            <div className="custom-card text-center p-4 shadow-lg rounded-4">
              <h2 className="text-white mb-4">Flat-Bench-Press</h2>
              <video
                width="100%"
                height="h-50"
                controls
                playsInline
                poster={cover}
                className="rounded-3 border border-white"
              >
                <source src={Flat_Bench_Press} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
    </>
  )
}
