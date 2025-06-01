import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Qr_Code from "/src/assets/Images/bg.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../../Contexts/UserIdContext";

export default function Members() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userId } = useContext(UserIdContext);
  const [hasValidID, setHasValidID] = useState(false);

  useEffect(() => {
    const isValid = localStorage.getItem("hasValidID") === "true";
    setHasValidID(isValid);
  }, []);

  const handleBasicPlanClick = () => {
    if (hasValidID && userId) {
      // If already has valid ID, go back to practise
      navigate("/practise");
    } else {
      // Go to ID verification with return path
      navigate("/id", {
        state: {
          returnPath: location.state?.returnPath,
        },
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Members</title>
      </Helmet>

      <div className="members overflow-auto d-flex flex-column justify-content-center">
        <div className="membership-header mb-5 w-auto text-center">
          <h2 className="membership-title">
            {t("MembersTitle")}
            <i className="fa-solid fa-face-smile ms-2"></i>
          </h2>
        </div>

        <div className="container mb-5 py-5 text-center">
          <div className="row">
            {/* Only show Basic Plan if user doesn't have valid ID */}
            {!hasValidID && (
              <div className="col-md-6">
                <div className="plan-box p-4 shadow rounded">
                  <p className="text-white">{t("MembersBasicParagraph")}</p>
                  <button
                    onClick={handleBasicPlanClick}
                    className="btn btn-primary btn-lg"
                  >
                    {t("MembersBasicButton")}
                  </button>
                </div>
              </div>
            )}

            <div className={`col-md-${hasValidID ? "12" : "6"}`}>
              <div className="plan-box-two p-4 shadow rounded">
                <p className="text-white">{t("MembersPremiumParagraph")}</p>
                <button
                  onClick={() => navigate("/coming-soon")}
                  className="btn btn-warning btn-lg"
                >
                  {t("MembersPremiumButton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
