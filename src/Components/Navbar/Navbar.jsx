import React, { useContext, useEffect, useState, useTransition } from "react";
import NavbarLogo from "/src/assets/Images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { userToken, setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function SignOut() {
    setUserToken("");
    localStorage.removeItem("token");
    navigate("/login");
  }

  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark px-3">
      <div className="container-fluid">
        {/* Brand / Logo */}

        <div>
          <Link
            className="navbar-brand d-flex align-items-center text-white"
            to="/"
          >
            <img
              src={NavbarLogo}
              alt="Nav-logo"
              width="100"
              height="100"
              className="me-2"
            />
          </Link>
        </div>

        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars fs-3"></i> {/* Custom icon */}
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Center nav links */}
          {userToken && (
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to="/">
                  {t("Home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to="/about">
                  {t("About Us")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to="/ourgyms">
                  {t("OurGyms")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to="/practise">
                  {t("Practise")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to="/contact">
                  {t("Contact")}
                </NavLink>
              </li>
            </ul>
          )}

          {/* Right-side links */}
          {userToken && (
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to="/members">
                  {t("Members")}
                </NavLink>
              </li>
              
              <li className="nav-item">
                <button
                  className="nav-link text-white fw-bold"
                  onClick={toggleLanguage}
                >
                  <i className="fa-solid fa-globe mx-1"></i>
                  {i18n.language === "en" ? "العربية" : "English"}
                </button>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="#">
                  {t("QrCode")}
                </Link>
              </li>
              
            </ul>
          )}

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {!userToken && (
              <>
                <li className="nav-item ms-5">
                  <NavLink className="nav-link text-white fw-bold" to="/login">
                    {t("Login")}
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link text-white fw-bold" to="/signup">
                    {t("Register")}
                  </NavLink>
                </li>
              </>
            )}

            {userToken && (
              <li className="nav-item">
                <button
                  onClick={SignOut}
                  className="nav-link text-white fw-bold"
                >
                  {t("SignOut")}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
