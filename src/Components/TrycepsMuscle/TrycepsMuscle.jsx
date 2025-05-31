import React from 'react'
import cover from "/src/assets/Images/cover.png";
import triceps_1 from "/src/assets/Videos/TricepsEx/triceps_1.mp4";
import triceps_2 from "/src/assets/Videos/TricepsEx/triceps_2.mp4";

export default function Triceps() {
  return (
    <>
      
          <div className="tricepsMuscle">
             <div className="layer"></div>
             <div className="container pt-5">
               <h1 className="my-5 text-center fw-bolder">
                 💥 Build That Triceps Strength 💥
               </h1>
     
               <div className="row justify-content-center">
                 <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                   <div className="video">
                     <video
                       width={440}
                       height={350}
                       controls
                       playsInline
                       className="pb-3"
                       poster={cover}
                     >
                       <source src={triceps_1} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   </div>
                 </div>
     
                 <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                   <div className="video">
                     <video
                       width={440}
                       height={350}
                       controls
                       playsInline
                       className="pb-3"
                       poster={cover}
                     >
                       <source src={triceps_2} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   </div>
                 </div>
     
                 <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                   <div className="video">
                     <video
                       width={440}
                       height={350}
                       controls
                       playsInline
                       className="pb-3"
                       poster={cover}
                     >
                       <source src={triceps_1} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   </div>
                 </div>
               </div>
     
               <h2 className="text-center my-5 fw-bold">
                 🧠 Information About the Muscle
               </h2>
     
               <p className="text-center">
                 The <strong>chest muscles</strong>, primarily made up of the
                 <strong> pectoralis major</strong> and{" "}
                 <strong>pectoralis minor</strong>, play a key role in upper body
                 strength and movement. The pectoralis major, a large, fan-shaped
                 muscle, enables pushing and lifting, while the pectoralis minor
                 stabilizes the scapula and aids in breathing. Common exercises like
                 push-ups, bench presses, and chest flys are essential to strengthen
                 and develop these muscles.
               </p>
             </div>
        </div>

    </>
  )
}
