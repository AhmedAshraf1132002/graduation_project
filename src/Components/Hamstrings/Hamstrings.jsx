import React from "react";
import deadlift from "/src/assets/Images/dedlift.png";
import dumbbell_walking_lunges from "/src/assets/Images/dumbbell-walking-lunges.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function Hamstrings() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
    <Helmet>
      <title>
        Hamstrings Exercises
      </title>
    </Helmet>
      <div className="hamstringsMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("HamstringsTitle")}
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
                    className="w-100 h-75 rounded-5 "
                    src={dumbbell_walking_lunges}
                    alt="dumbbell_walking_lunges_Logo"
                  />
                  <button
                    onClick={() => navigate("/dumbbell-walking-lunges")}
                    className="text-center"
                  >
                   {t("Dumbbell-Walking-Lunges")}
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
              {t("HamstringsParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
