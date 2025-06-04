import React from "react";
import DumbbellLateralRaise from "/src/assets/Images/shoulderPhotos/DumbbellLateralRaise.png";
import rear_delt_machine from "/src/assets/Images/shoulderPhotos/rear-delt-machine.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Shoulder() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
    <Helmet>
      <title>
        Shoulders Exercises
      </title>
    </Helmet>
      

      <div className="shoulderMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("SoulderTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={DumbbellLateralRaise}
                    alt="DumbbellLateralRaise_logo"
                  />
                  <button
                    onClick={() => navigate("/dumbbell-lateral-raise")}
                    className="text-center"
                  >
                    {t("Dumbbell-Lateral-Raise")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={rear_delt_machine}
                    alt="DumbbellLateralRaise_logo"
                  />
                  <button
                    onClick={() => navigate("/rear-delt-machine")}
                    className="text-center"
                  >
                    {t("Rear-Delt-Machine")}
                  </button>
                </div>
              </div>
            </div>

         

            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
             {t("ShoulderParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
