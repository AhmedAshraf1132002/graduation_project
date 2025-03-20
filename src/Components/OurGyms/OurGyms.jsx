import React from "react";
import Weider from "/src/assets/Images/Weider.png";
import Fire from "/src/assets/Images/Fire.png";
 import Power from "/src/assets/Images/Power.png";
 import O_2 from "/src/assets/Images/O_2.png";
import { Link } from "react-router-dom";
export default function OurGyms() {
  return (
    <>
      <div className="ourGym ">
        <div className="layer"></div>
        <div className="container">
                <form>
                <div className="row my-5">
                <div className="col-md-12">
                  <input type="search" className="form-control" placeholder="Search..."/>
                </div>
                </div>
                </form>
          <div className="row my-5">
            <div className="col-md-3 overflow-auto">
              <div className="first content">
                <div className="topContent">
                  <img className="w-100" src={Weider} alt="Weider_Logo" />
                </div>
                <div className="bottomContnent  p-2 text-center text-white">
                  <h4 className="mb-3">Weider Gym</h4>
                  <p>  Tanta, Egypt , العنوان : العجيبى</p>
                  <span>الهاتف : 01280632055 </span>
                 <div className="Link mt-3">
                 <span className="fw-bold">Click Here <i className="fa-solid fa-arrow-right-long mx-2"></i></span>
                 <Link className="m-auto" to={"https://www.facebook.com/share/12FLjv9SEfz/?mibextid=wwXIfr"}>
                  <i className="fa-brands fa-facebook text-black"></i>
                  </Link> 
                 </div>
                </div>
               
              </div>
            </div>
            <div className="col-md-3   overflow-auto">
              <div className="content">
                <div className="topContent">
                  <img className="w-100" src={Fire} alt="Fire_Logo" />
                </div>
                <div className="bottomContnent  p-2 text-center text-white">
                  <h4 className="mb-3">Fire Gym</h4>
                  <p>  العنوان : كوبري منشية ناصر والمقطم, القاهرة </p>
                  <span>الهاتف : 01274492427 </span>
                 <div className="Link mt-3">
                 <span className="fw-bold">Click Here <i className="fa-solid fa-arrow-right-long mx-2"></i></span>
                 <Link className="m-auto" to={"https://www.facebook.com/share/16NiN9cxDK/?mibextid=wwXIfr"}>
                  <i className="fa-brands fa-facebook text-black"></i>
                  </Link> 
                 </div>
                </div>
               
              </div>
            </div>
            <div className="col-md-3   overflow-auto">
              <div className="content ">
                <div className="topContent">
                  <img className="w-100" src={Power} alt="Power_Logo" />
                </div>
                <div className="bottomContnent  p-2 text-center text-white">
                  <h4 className="mb-3">Power Gym</h4>
                  <p>العنوان  : 2 ص البوابه الثالثه بوابه منقرع - حدائق الاهرام, Giza, Egypt, 12556</p>
                  <span>الهاتف : 01022244044 </span>
                 <div className="Link mt-3">
                 <span className="fw-bold">Click Here <i className="fa-solid fa-arrow-right-long mx-2"></i></span>
                 <Link className="m-auto" to={"https://www.facebook.com/share/15NgtHgNhF/?mibextid=wwXIfr"}>
                  <i className="fa-brands fa-facebook text-black"></i>
                  </Link> 
                 </div>
                </div>
               
              </div>
            </div>
            <div className="col-md-3   overflow-auto">
              <div className="content ">
                <div className="topContent">
                  <img className="w-100" src={O_2} alt="O_2_Logo" />
                </div>
                <div className="bottomContnent  p-2 text-center text-white">
                  <h4 className="mb-3">O2 Gym</h4>
                  <p>العنوان  : 17شارع عبد الجزار متفرع من فرج يوسف حدائق المعادي, Cairo, Egypt</p>
                  <span>الهاتف : 01092172109 </span>
                 <div className="Link mt-3">
                 <span className="fw-bold">Click Here <i className="fa-solid fa-arrow-right-long mx-2"></i></span>
                 <Link className="m-auto" to={"https://www.facebook.com/share/12ERnDht6Uq/?mibextid=wwXIfr"}>
                  <i className="fa-brands fa-facebook text-black"></i>
                  </Link> 
                 </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
