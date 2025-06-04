
import UpperChest_2 from "/src/assets/Images/ChestPhotos/UpperCh_2.png";
import UpperChest_3 from "/src/assets/Images/ChestPhotos/UpperCh_3.png";
import LowerChest_1 from "/src/assets/Images/ChestPhotos/LoweCh_1.png";
import LowerChest_2 from "/src/assets/Images/ChestPhotos/LowerCh_2.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Chest() {

  const navigate =  useNavigate();
   const { t } = useTranslation();
  return (
    <>
   <Helmet>
    <title>
      Chest Exercises
    </title>
   </Helmet>
      <div className="chestMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("ChestUpperTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5"
                    src={UpperChest_2}
                    alt="UpperChest_logo"
                  />
                  <button  className="text-center">{t("Incline-Bench-Press")}</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
             <div className="content text-center">
               <div className="logo">
                <img
                  className="w-100 h-75 rounded-5"
                  src={UpperChest_3}
                  alt="UpperChest_logo"
                />
                <button onClick={() => navigate("/incline-dumbbell-bench-press")} className="text-center">
                  {t("Incline-Dumbbell-Bench-Press")}
                </button>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chestMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            {t("ChestLowerTitle")}
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
            <div className="content text-center">
                <div className="logo">
                <img
                  className="w-100 h-75 rounded-5 "
                  src={LowerChest_1}
                  alt="UpperChest_logo"
                />
                <button onClick={() => navigate("/flat-bench-press")} className="text-center">{t("Flat-Bench Press")}</button>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
             <div className="content text-center">
               <div className="logo">
                <img
                  className="w-100 h-75 rounded-5"
                  src={LowerChest_2}
                  alt="UpperChest_logo"
                />
                <button onClick={() => navigate("/flat-dumbbell-bench-press")} className="text-center">{t("Flat-Dumbbell-Bench-Press")}</button>
              </div>
             </div>
            </div>
             <h2 className="text-center my-5 fw-bold">
            {t("InformationMuscle")}
          </h2>

          <p className="text-center">
           {t("ChestParagraph")}
          </p>
          </div>

        </div>
      </div>
    </>
  );
}
