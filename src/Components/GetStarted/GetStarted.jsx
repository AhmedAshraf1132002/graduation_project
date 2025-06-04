import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function GetStarted() {

const navigate = useNavigate();

  return (
    <>
      <div className="getStarted">
        <div className="layer"></div>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="row">
            <div className="col-md-12">
              <div className="getStartedContent">
                <div className="title ">
                  <h2 className="text-center">START YOUR <br /> JOURNEY <span>TODAY</span></h2>
                </div>
                <p className="pb-2">Flexzone is a gym in tj=he centre of progue.Come join us and start getting closer to your dream body.</p>
                    <div className="geStartedBtn text-center my-5 ">
                    <button onClick={()  => navigate("/login")}>Get Started <i className="fa-solid fa-arrow-right-long ms-1"></i></button>
                    </div>
                  <div className="d-flex justify-content-evenly align-items-center getStretedTexts">
                   <span>Meta Gym </span>
                   <span>Rogue </span>
                   <span>Gympass</span>
                  </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}
