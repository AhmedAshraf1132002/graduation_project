import React from "react";
import HomeLogo from "/src/assets/Images/logo.png";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="layer"></div>
        <div className="container  vh-100 d-flex flex-column justify-content-center align-content-center">
          <div className="Caption text-white">
            <div className="homePhoto">
              <img className="w-100" src={HomeLogo} alt="Home-Logo" />
            </div>
            <h2 className="meta">Meta gym</h2>
            <h1 className="my-5 title">Scan For Your Muscles </h1>
            <button className="btn">
              Qr code.. <i className="fa-solid fa-qrcode text-black"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
