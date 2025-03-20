import React from "react";

export default function Members() {
  return (
    <>
      <div className="members">
        <div className="layer"></div>
        <div className="container">
          <div className="membersTitle text-center my-5">
            <h2>Members</h2>
          </div>
          <div className="row py-5">
            <div className="col-md-4">
              <div className=" membarsContent bg-black py-4">
                <h3 className="text-center">For Free Plan</h3>
                <div className="py-2">
                <p>Lorem ipsu dolor sit amet</p>
                <p>Consectetur adipiscing elit</p>
                <p>Morbi ac sapie orci. nam vitae</p>
                <p>Efficitur massa, et congue enim</p>
                </div>
                <div className="selectThis">Select This</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" membarsContent bg-black py-4">
                <h3 className="text-center">For Free Plan</h3>
                <div className="py-2">
                <p>Lorem ipsu dolor sit amet</p>
                <p>Consectetur adipiscing elit</p>
                <p>Morbi ac sapie orci. nam vitae</p>
                <p>Efficitur massa, et congue enim</p>
                </div>
                <div className="selectThis">Select This</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" membarsContent bg-black py-4">
                <h3 className="text-center">For Free Plan</h3>
                <div className="py-2">
                <p>Lorem ipsu dolor sit amet</p>
                <p>Consectetur adipiscing elit</p>
                <p>Morbi ac sapie orci. nam vitae</p>
                <p>Efficitur massa, et congue enim</p>
                </div>
                <div className="selectThis">Select This</div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-evenly align-items-center membersTexts">
            <span>Meta Gym </span>
            <span>Rogue </span>
            <span>Gympass</span>
          </div>
        </div>
      </div>
    </>
  );
}
