import React from 'react'
import cover from "/src/assets/Images/cover.png";
import Chest_3 from "/src/assets/Videos/ChestEx/chest_3.mp4";
import { Helmet } from 'react-helmet-async';
export default function FlatDumbbellBenchPress() {
  return (
    <>
<Helmet>
  <title>
    Flat-Dumbbell-Bench-Press
  </title>
</Helmet>
      <div
           className="flat-dumbbell-section d-flex justify-content-center align-items-center"
         >
           <div className="custom-card text-center p-4 shadow-lg rounded-4">
             <h2 className="text-white mb-4"> Flat Dumbbell Bench Press</h2>
             <video
               width="100%"
               height="h-50"
               controls
               playsInline
               poster={cover}
               className="rounded-3 border border-white"
             >
               <source src={Chest_3} type="video/mp4" />
               Your browser does not support the video tag.
             </video>
           </div>
         </div>

    </>
  )
}
