
import React, { useContext, useEffect, useState, useTransition } from "react";
import NavbarLogo from "/src/assets/Images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { useTranslation } from "react-i18next";


// export default function Navbar() {
//   return (
//     <>
//       <nav className="navbar-expand-lg">
//         <div className="navbar container-fluid d-flex justify-content-around pt-3">
//           <div>
//             <div className="left-nav d-flex flex-column justify-content-center align-items-center">
//               <img className="w-100" src={NavbarLogo} alt="Nav-logo" />
//             </div>
//             <span className="text-white">Meta Gym</span>
//           </div>
//           <div className="center-nav">
//             <ul className=" p-0 d-flex justify-align-content-center align-items-center">
//               <li>
//                 <NavLink className={"text-black fw-bold"} to={"/Graduation-Project"}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={"text-black fw-bold"} to={"/Graduation-Project/about"}>
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={"text-black fw-bold"} to={"/Graduation-Project/ourgyms"}>
//                   OurGym
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={"text-black fw-bold"} to={"/Graduation-Project/practise"}>
//                   Practise
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={"text-black fw-bold"} to={"/Graduation-Project/contact"}>
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="right-nav">
//             <ul className=" p-0 d-flex justify-align-content-center align-items-center">
//               <li>
//                 <Link>
//                   <i className="fa-solid fa-magnifying-glass"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link className={"text-black fw-bold english"}>
//                   {" "}
//                   <i className="fa-solid fa-globe mx-1 text-white"></i> English
//                 </Link>
//               </li>
//               <li>
//                 <Link className={"text-black fw-bold qrCode"}>Qr code</Link>
//               </li>
//               <li>
//                 <Link to={"/Graduation-Project/members"} className={" text-white fw-bold Members"}>
//                   Members
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

export default function Navbar() {

  

const {userToken , setUserToken} = useContext(AuthContext);
const navigate = useNavigate();


function SignOut()
{
  setUserToken("");
  localStorage.removeItem("token");
  navigate("/Graduation-Project/login");
}

 const { i18n , t } = useTranslation();

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
          to="/Graduation-Project"
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
        { userToken && <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project"
              >
               {t("Home")}

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project/about"
              >
                {t("About Us")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project/ourgyms"
              >
                {t("OurGyms")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project/practise"
              >
                {t("Practise")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project/contact"
              >
               {t("Contact")}
              </NavLink>
            </li>
          </ul>}

          {/* Right-side links */}
        { userToken && <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            
            <li className="nav-item">

              {/* <button className="nav-link text-white fw-bold" to="#">
                <i className="fa-solid fa-globe mx-1"></i> English
              </button> */}

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
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project/members"
              >
                {t("Members")}
              </NavLink>
            </li>
          </ul>}

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          { ! userToken && <>
            <li className="nav-item ms-5">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project/login"
              >
                {t("Login")}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link text-white fw-bold"
                to="/Graduation-Project/signup"
              >
                {t("Register")}
              </NavLink>
            </li>
            </>}
            
           { userToken && <li className="nav-item">
              <button onClick={SignOut}
                className="nav-link text-white fw-bold"
              >
                {t("SignOut")}
              </button>
            </li>}
          </ul>

        </div>
      </div>
    </nav>
  );
}
