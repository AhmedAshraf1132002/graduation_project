import React from "react";
import About_Logo from '/src/assets/Images/about.png';
import { Helmet } from 'react-helmet-async';

export default function AboutMetaGym() {
  return (
    <> 
             <Helmet>
        <title>About</title>
      </Helmet>

      <div className="about py-5">
        <div className="container">
          <h2 className="text-center mt-5 pb-5 ">Who We Are</h2>
          <div className="row  my-5  justify-content-center align-items-end">
            <div className="col-md-6  pe-5">
              <div className="aboutLeft">
                <h3>About Us</h3>
                <div className="paragraphs text-white">
                  <p>
                    At Gym and Fitness, we believe that fitness and wellbeing
                    are the cornerstones of a full and vibrant life, we began
                    our journey as a family-owned business dedicated to
                    providing exceptional gym equipment at affordable prices.
                    But, we dreamed bigger than just being an ordinary fitness
                    equipment supplier; we aspired to lead the industry.
                  </p>
                  <p>
                    Our real success lies in the thousands of customers we've
                    empowered to live longer, more joyful, and healthier lives.
                    We're more than just a fitness company – we're your partners
                    in health, your cheerleaders on the sideline, motivating you
                    to reach your personal fitness goals. Embrace the fitness
                    journey with us and see how it transforms your world.
                  </p>
                  <p>
                    Join us in our mission to improve lives through fitness and
                    wellness, because at Gym and Fitness, your health is our
                    passion.
                  </p>
                  <p>
                    We've moved beyond just supplying gear – we've become
                    advocates for fitness, wellbeing and life enrichment. Our
                    commitment to excellence is reflected not only in the
                    quality equipment we provide but also in the lives we've
                    improved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6  ps-5">
              <div className="aboutRight">
                <img className="w-100" src={About_Logo} alt="about_Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
