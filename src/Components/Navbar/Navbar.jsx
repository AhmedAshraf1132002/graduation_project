import React from "react";
import NavbarLogo from "/src/assets/Images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar-expand-lg">
        <div className="navbar container-fluid d-flex justify-content-around pt-3">
          <div>
            <div className="left-nav d-flex flex-column justify-content-center align-items-center">
              <img className="w-100 \" src={NavbarLogo} alt="Nav-logo" />
            </div>
            <span className="text-white">Meta Gym</span>
          </div>
          <div className="center-nav">
            <ul className=" p-0 d-flex justify-align-content-center align-items-center">
              <li>
                <NavLink className={"text-black fw-bold"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-black fw-bold"} to={"/about"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-black fw-bold"} to={"/ourgyms"}>
                  OurGym
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-black fw-bold"} to={"/practise"}>
                  Practise
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-black fw-bold"} to={"/contact"}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-black fw-bold"} to={"/signup"}>
                signUp
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-black fw-bold"} to={"/login"}>
                login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <ul className=" p-0 d-flex justify-align-content-center align-items-center">
              <li>
                <Link>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
              <li>
                <Link className={"text-black fw-bold english"}>
                  {" "}
                  <i className="fa-solid fa-globe mx-1 text-white"></i> English
                </Link>
              </li>
              <li>
                <Link className={"text-black fw-bold qrCode"}>Qr code</Link>
              </li>
              <li>
                <Link to={"/members"} className={" text-white fw-bold Members"}>
                  Members
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
