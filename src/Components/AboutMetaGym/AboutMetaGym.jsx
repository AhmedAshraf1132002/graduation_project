
import About_Logo from "/src/assets/Images/about.png";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function AboutMetaGym() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div className="about position-relative text-white">
        <div className="layer position-absolute w-100 h-100"></div>
        <div className="container position-relative py-5">
          <h2 className="text-center mb-5"> {t("About_Title")} </h2>
          <div className="row justify-content-center align-items-end ">
            <div className="col-lg-6 mb-4 mb-lg-0 pe-5">
              <div className="aboutLeft">
                <h3>{t("AboutHeading")}</h3>
                <div className="paragraphs">
                  <p>{t("FirstParagraph")}</p>
                  <p>{t("SecondParagraph")}</p>
                  <p>{t("ThirdParagraph")}</p>
                  <p>{t("FourthParagraph")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="aboutRight">
                <img
                  className="img-fluid rounded shadow"
                  src={About_Logo}
                  alt="about_Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
