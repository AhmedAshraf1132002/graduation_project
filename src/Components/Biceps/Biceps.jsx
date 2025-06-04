import React from "react";
import cover from "/src/assets/Images/cover.png";
import biceps_1 from "/src/assets/Videos/BicepsEx/biceps_1.mp4";
import biceps_2 from "/src/assets/Videos/BicepsEx/biceps_2.mp4";
import bicepsLogo_1 from "/src/assets/Images/BicepsPhotos/bicepsLogo_1.png";
import bicepsLogo_2 from "/src/assets/Images/BicepsPhotos/bicepsLogo_2.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Biceps() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
    <Helmet>
      <title>
        Biceps Exercises
      </title>
    </Helmet>
      {/* <div className="bicepsMuscle">
             <div className="layer"></div>
             <div className="container pt-5">
               <h1 className="my-5 text-center fw-bolder">
                 💥 Build That Biceps Strength 💥
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
                       <source src={biceps_1} type="video/mp4" />
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
                       <source src={biceps_2} type="video/mp4" />
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
                       <source src={biceps_2} type="video/mp4" />
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
      </div> */} 

      <Helmet>
        <title>
          Biceps Exercises
        </title>
      </Helmet>
    
      <div className="bicepsMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("TricepsTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={bicepsLogo_1}
                    alt="UpperChest_logo"
                  />
                  <button
                    onClick={() => navigate("/barbell-curls-biceps")}
                    className="text-center"
                  >
                    {t("Barbell-Curls-Biceps")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5"
                    src={bicepsLogo_2}
                    alt="UpperChest_logo"
                  />
                  <button
                    onClick={() => navigate("/dumbbell-curl-flat")}
                    className="text-center"
                  >
                    {t("Dumbbell-Curl-Flat")}
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
             {t("BicepsParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
