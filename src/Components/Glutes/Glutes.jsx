import React from "react";

import deadlift from "/src/assets/Images/dedlift.png";
import dumbbell_walking_lunges from "/src/assets/Images/dumbbell-walking-lunges.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Glutes() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>

    <Helmet>
      <title>
        Glutes Exercises
      </title>
    </Helmet>
      {/* <div className="glutesMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            💥 Build That Glutes Strength 💥
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
                  <source src={deadlift} type="video/mp4" />
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
                  <source src={deadlift} type="video/mp4" />
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
                  <source src={deadlift} type="video/mp4" />
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

      <div className="glutesMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("GlutesTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={deadlift}
                    alt="deadlift_logo"
                  />
                  <button
                    onClick={() => navigate("/deadlift")}
                    className="text-center"
                  >
                    {t("Deadlift")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
                          <div className="content text-center">
                            <div className="logo">
                             <img
                               className="w-100 h-75 rounded-5"
                               src={dumbbell_walking_lunges}
                               alt="dumbbell_walking_lunges_logo"
                             />
                             <button onClick={() => navigate("/dumbbell-walking-lunges")} className="text-center">{t("Dumbbell-Walking-Lunges")}</button>
                           </div>
                          </div>
                         </div>
            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
             {t("GlutesParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
