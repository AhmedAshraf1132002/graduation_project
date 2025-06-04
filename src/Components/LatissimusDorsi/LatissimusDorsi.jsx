import React from "react";
import LatPulldownFlat from "/src/assets/Images/LatissimusPhotos/LatPulldownFlat.png";
import LowCableBack from "/src/assets/Images/LatissimusPhotos/LowCableBack.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function LatissimusDorsi() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
    <Helmet>
      <title>
        Latissimusdorsi Exercises
      </title>
    </Helmet>
      {/* <div className="latissimusDorsi">
        <div className="layer"></div>

        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            💪 This is Latissimus Dorsi Exercise 💪
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
                  <source src={latissimusdorsi_1} type="video/mp4" />
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
                  <source src={latissimusdorsi_1} type="video/mp4" />
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
                  <source src={latissimusdorsi_1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <h2 className="text-center my-5 fw-bold">
            🧠 Information About the Muscle
          </h2>

          <p className="text-center">
            The <strong>latissimus dorsi</strong>, often called the "lats," is
            one of the largest and most powerful muscles in the human body.
            Stretching across the middle and lower back, it forms a broad,
            wing-like shape that contributes significantly to the V-shaped torso
            appearance, especially in athletes. This muscle plays a vital role
            in movements that involve pulling, such as <em>climbing</em>,
            <em>swimming</em>, <em>rowing</em>, and <em>pull-ups</em>. It
            originates from the lower spine and pelvis and inserts into the
            upper arm bone (humerus), allowing it to extend, adduct, and
            internally rotate the shoulder. Beyond aesthetics and strength, the
            latissimus dorsi is essential for core stability and functional
            movements, making it a cornerstone in both athletic performance and
            daily physical activities.
          </p>
        </div>
      </div> */}

      <div className="latissimusDorsi">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("LatissimusDorsiTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={LatPulldownFlat}
                    alt="LatPulldownFlat_logo"
                  />
                  <button
                    onClick={() => navigate("/latpull-down-flat")}
                    className="text-center"
                  >
                    {t("Latpull-Down-Flat")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5"
                    src={LowCableBack}
                    alt="LowCableBack_logo"
                  />
                  <button
                    // onClick={() => navigate("/latpull-down-flat")}
                    className="text-center"
                  >
                    {t("Low-Cable-Back")}
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
             {t("LatissimusDorsiParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
