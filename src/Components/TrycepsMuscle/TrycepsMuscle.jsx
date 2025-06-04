import React from "react";
import cover from "/src/assets/Images/cover.png";
import tricepsLogo_1 from "/src/assets/Images/TricebsPhotos/tricepsLogo_1.png";
import tricepsLogo_2 from "/src/assets/Images/TricebsPhotos/tricepsLogo_2.png";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Triceps() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
    <Helmet>
      <title>
        Triceps Exercises
      </title>
    </Helmet>
      {/* <div className="tricepsMuscle">
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
        </div> */}

      <div className="tricepsMuscle">
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
                    src={tricepsLogo_1}
                    alt="tricepsLogo_1"
                  />
                  <button
                    onClick={() => navigate("/cable-triceps-pull-down")}
                    className="text-center"
                  >
                    {t("Cable-Triceps-Pull-Down")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5"
                    src={tricepsLogo_2}
                    alt="tricepsLogo_2"
                  />
                  <button
                    onClick={() => navigate("/cable-triceps-kickbacks")}
                    className="text-center"
                  >
                    {t("Cable-Triceps-Kickbacks")}
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
             {t ("TricepsParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
