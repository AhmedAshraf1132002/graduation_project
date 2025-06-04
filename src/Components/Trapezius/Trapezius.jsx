import React from "react";
import { Helmet } from "react-helmet-async";
import Trapezius_1 from "/src/assets/Images/TrapeziusPhotos/trapezius_1.png";
import Trapezius_2 from "/src/assets/Images/TrapeziusPhotos/trapezius_2.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Trapezius() {

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Trapezius Exercises</title>
      </Helmet>

      <div className="trapeziusMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("TrapeziusTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={Trapezius_1}
                    alt="Trapezius_1_logo"
                  />
                  <button
                    // onClick={() => navigate("/dumbbell-lateral-raise")}
                    className="text-center"
                  >
                   {t("Barbell-Shoulder-Shrug")}
                    
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={Trapezius_2}
                    alt="Trapezius_2_logo"
                  />
                  <button
                    onClick={() => navigate("/dumbbell-Shrug-Flat")}
                    className="text-center"
                  >
                    {t("Dumbbell-Shrug-Flat")}
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
             {t("TrapeziusParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
