import React from "react";
import Gastrocnemius_1 from "/src/assets/Images/GastrocnemiusPhotos/Gastrocnemius_1.png";
import Gastrocnemius_2 from "/src/assets/Images/GastrocnemiusPhotos/Gastrocnemius_2.png";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Gastrocnemius() {

const navigate = useNavigate();
const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <title>Gastrocnemius Exercises</title>
      </Helmet>

      <div className="gastrocnemiusMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("GastrocnemiusTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={Gastrocnemius_1}
                    alt="Gastrocnemius_1_photo"
                  />
                  <button
                    onClick={() => navigate("/standing-calf-raise-assisted")}
                    className="text-center"
                  >
                    {t("Standing-Calf-Raise-Assisted")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5 "
                    src={Gastrocnemius_2}
                    alt="Gastrocnemius_2_photo"
                  />
                  <button
                    // onClick={() => navigate("/dumbbell-lateral-raise")}
                    className="text-center"
                  >
                    {t("Standing-Calf-Raises-Barbell")}
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-center my-5 fw-bold">
              {t("InformationMuscle")}
            </h2>

            <p className="text-center">
            {t("GastrocnemiusParagraph")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
