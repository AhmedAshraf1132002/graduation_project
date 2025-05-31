import { useContext, useState } from "react";
import Female from "/src/assets/Images/Female.png";
import fezail from "/src/assets/Images/fezail.png";
import Male from "/src/assets/Images/gym.png";
import Male_2 from "/src/assets/Images/gym_2.png";
import Gastrocnemius from "/src/assets/Images/Gastrocnemi.png";
import Triceps from "/src/assets/Images/Triceps .png";
import Biceps from "/src/assets/Images/Biceps.png";
import Quadriceps from "/src/assets/Images/Quadriceps.png";
import Hamstrings from "/src/assets/Images/Hamstrings.png";
import Glutes from "/src/assets/Images/Glutes.png";
import LatissimusDorsi from "/src/assets/Images/LatissimusDo.png";
import Trapezius from "/src/assets/Images/Trapezius.png";
import Shoulders from "/src/assets/Images/Shoulders.png";
import Chest from "/src/assets/Images/Chest.png";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserIdContext } from "../../Contexts/UserIdContext";

export default function Practise() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);
  const { userId , targetPath } = useContext(UserIdContext);

  const { t } = useTranslation();

  const handleMuscleClick = (path) => {
    if (!userId && targetPath) {
      // If no valid ID, go to members first
      navigate("/Graduation-Project/members", {
        state: { returnPath: path },
      });
    } else {
      // If has valid ID, go directly to muscle
      navigate(path);
    }
  };

  return (
    <>
      <Helmet>
        <title>Practise</title>
      </Helmet>

      <section>
        <div className="practise vh-100 d-flex flex-column justify-content-center align-items-center">
          <div className="layer"></div>
          <div className="container m d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white title">{t("Exercises")}</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="practise_content pe-5 m-auto  d-flex flex-column align-items-center justify-content-center ">
                  <div className="image my-5">
                    <img className="w-100" src={fezail} alt="Female_Logo" />
                  </div>
                  <button
                    onClick={() => navigate("/Graduation-Project/coming-soon")}
                    className="gender btn"
                  >
                    {t("Female")}
                  </button>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="practise_content ps-5 m-auto d-flex flex-column align-items-center justify-content-center ">
                  <div className="image two my-5">
                    <img className="w-100" src={Male_2} alt="Male_Logo" />
                  </div>
                  <button
                    onClick={() => setSelectedGender("male")}
                    className="genderTwo btn"
                  >
                    {t("Male")}
                  </button>
                </div>
              </div>
            </div>

            {selectedGender == "male" && (
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="iconsOfMuscles d-flex justify-content-center align-items-center my-5 gap-5">
                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/shouldersexercises"
                          )
                        }
                        className="shouldersIcon"
                      >
                        <img src={Shoulders} alt="shoulders_Icon" />

                        {/* <Link to={"/Graduation-Project/shouldersexercises"}>
                        </Link> */}
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/chestexercises"
                          )
                        }
                        className="chestIcon"
                      >
                        <img src={Chest} alt="Chest_logo" />
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/tricepsexercises"
                          )
                        }
                        className="tricepsIcon"
                      >
                        <img src={Triceps} alt="Triceps_logo" />
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/bicepsexercises"
                          )
                        }
                        className="bicepsIcon"
                      >
                        <img src={Biceps} alt="Biceps_logo" />
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/latissimusdorsiexercises"
                          )
                        }
                        className="latissimusDorsiIcon"
                      >
                        <img src={LatissimusDorsi} alt="LatissimusDorsi_logo" />
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/trapeziusexercises"
                          )
                        }
                        className="trapeziusIcon"
                      >
                        <img src={Trapezius} alt="Trapezius_logo" />
                      </button>

                      {/* <button className="deltoid">
                  <Link to={"/Graduation-Project/deltoidexercises"}>
                    <img src={Deltoid} alt="Deltoid_logo" />
                  </Link>
                </button> */}

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/quadricepsexercises"
                          )
                        }
                        className="quadricepsIcon"
                      >
                        <img src={Quadriceps} alt="Quadriceps_logo" />
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/hamstringsexercises"
                          )
                        }
                        className="hamstringsIcon"
                      >
                        <img src={Hamstrings} alt="Hamstrings_logo" />
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/glutesexercises"
                          )
                        }
                        className="glutesIcon"
                      >
                        <img src={Glutes} alt="Glutes_logo" />
                      </button>

                      <button
                        onClick={() =>
                          handleMuscleClick(
                            "/Graduation-Project/gastrocnemiusexercises"
                          )
                        }
                        className="gastrocnemiusIcon"
                      >
                        <img src={Gastrocnemius} alt="Gastrocnemius _logo" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
