import React from 'react'
import { Helmet } from 'react-helmet-async'
import cover from "/src/assets/Images/cover.png";
import Trapezius_1 from "/src/assets/Videos/TrapeziusEx/Trapezius_1.mp4";
export default function DumbbellShrugFlat() {
  return (
    <>

      <Helmet>
           <title>
             Dumbbell-Shrug-Flat
           </title>
         </Helmet>
             <div className="dumbbell-shrug-flat-section d-flex justify-content-center align-items-center">
                   <div className="custom-card text-center p-4 shadow-lg rounded-4">
                     <h2 className="text-white mb-4"> Dumbbell-Shrug-Flat</h2>
                     <video
                       width="100%"
                       height="h-50"
                       controls
                       playsInline
                       poster={cover}
                       className="rounded-3 border border-white"
                     >
                       <source src={Trapezius_1} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   </div>
                 </div>

    </>
  )
}
