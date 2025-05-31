import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <div className="contact">
        <div className="layer"></div>
        <div className="contactTitle my-5">
          <h2 className="text-white">Contact</h2>
        </div>
        <div className="container text-black p-4">
          <div className="row">
            <div className="col-md-12">
              <div className="all">
                <div className="d-flex flex-column justify-content-center align-items-center ">
                  <span>+20 0101 430 3750 </span>
                  <span className="mt-2">Meta Gym@gmail.com</span>
                </div>
                <p className="text-center fw-bold mt-3">
                  ٣٣ شارع عبدالله العربي امتداد الطيران مدينه نصر الحي السابع ,
                  Cairo, Egypt, 11431
                </p>
                <div className="icons my-5">
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-brands fa-facebook-f fs-1"></i>
                    <Link className="ms-3 text-black fw-bold">
                      facebook.com
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center align-items-center my-4">
                    <i className="fa-brands fa-instagram fs-1"></i>
                    <Link className="ms-3 text-black fw-bold">
                      instgram.com
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-brands fa-twitter fs-1"></i>
                    <Link className="ms-3 text-black fw-bold">twitter.com</Link>
                  </div>
                </div>
                <p className="text-center">
                  Meta Gym ابق قويًا، وكن الأفضل! في <br /> القوة ليست مجرد
                  عضلات، بل عزيمة لا تنكسر <br /> 💪🔥! استمر في التحدي، ارفع
                  مستواك، واصنع أفضل نسخة منك
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
