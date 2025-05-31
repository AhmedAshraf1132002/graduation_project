
import UpperChest_2 from "/src/assets/Images/ChestPhotos/UpperCh_2.png";
import UpperChest_3 from "/src/assets/Images/ChestPhotos/UpperCh_3.png";
import LowerChest_1 from "/src/assets/Images/ChestPhotos/LoweCh_1.png";
import LowerChest_2 from "/src/assets/Images/ChestPhotos/LowerCh_2.png";
import { useNavigate } from "react-router-dom";

export default function Chest() {

  const navigate =  useNavigate();
  return (
    <>
      {/* <div className="chestMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            💥 Build That Chest Strength 💥
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
              <div className="video">
                <video
                  width={440}
                  height={350}
                  controls
                  playsInline
                  className="pb-3"
                  poster={cover}
                >
                  <source src={Chest_5} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
              <div className="video">
                <video
                  width={440}
                  height={350}
                  controls
                  playsInline
                  className="pb-3"
                  poster={cover}
                >
                  <source src={Chest_6} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
              <div className="video">
                <video
                  width={440}
                  height={350}
                  controls
                  playsInline
                  className="pb-3"
                  poster={cover}
                >
                  <source src={Chest_1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <h2 className="text-center my-5 fw-bold">
            🧠 Information About the Muscle
          </h2>

          <p className="text-center">
            The <strong>chest muscles</strong>, primarily made up of the
            <strong> pectoralis major</strong> and{" "}
            <strong>pectoralis minor</strong>, play a key role in upper body
            strength and movement. The pectoralis major, a large, fan-shaped
            muscle, enables pushing and lifting, while the pectoralis minor
            stabilizes the scapula and aids in breathing. Common exercises like
            push-ups, bench presses, and chest flys are essential to strengthen
            and develop these muscles.
          </p>
        </div>
      </div> */}

      <div className="chestMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            💥 Build That Upper Chest Strength 💥
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
              <div className="content text-center">
                <div className="logo">
                  <img
                    className="w-100 h-75 rounded-5"
                    src={UpperChest_2}
                    alt="UpperChest_logo"
                  />
                  <button  className="text-center">Incline-Bench-Press</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
             <div className="content text-center">
               <div className="logo">
                <img
                  className="w-100 h-75 rounded-5"
                  src={UpperChest_3}
                  alt="UpperChest_logo"
                />
                <button onClick={() => navigate("/Graduation-Project/incline-dumbbell-bench-press")} className="text-center">
                  Incline-Dumbbell-Bench-Press
                </button>
              </div>
             </div>
            </div>
          </div>

          {/* <h2 className="text-center my-5 fw-bold">
            🧠 Information About the Muscle
          </h2> */}

          {/* <p className="text-center">
            The <strong>chest muscles</strong>, primarily made up of the
            <strong> pectoralis major</strong> and{" "}
            <strong>pectoralis minor</strong>, play a key role in upper body
            strength and movement. The pectoralis major, a large, fan-shaped
            muscle, enables pushing and lifting, while the pectoralis minor
            stabilizes the scapula and aids in breathing. Common exercises like
            push-ups, bench presses, and chest flys are essential to strengthen
            and develop these muscles.
          </p> */}
        </div>
      </div>

      <div className="chestMuscle">
        <div className="layer"></div>
        <div className="container pt-5">
          <h1 className="my-5 text-center fw-bolder">
            💥 Build That Lower Chest Strength 💥
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
            <div className="content text-center">
                <div className="logo">
                <img
                  className="w-100 h-75 rounded-5 "
                  src={LowerChest_1}
                  alt="UpperChest_logo"
                />
                <button className="text-center">Flat-Bench Press</button>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4 d-flex justify-content-center">
             <div className="content text-center">
               <div className="logo">
                <img
                  className="w-100 h-75 rounded-5"
                  src={LowerChest_2}
                  alt="UpperChest_logo"
                />
                <button className="text-center">Flat-Dumbbell-Bench-Press</button>
              </div>
             </div>
            </div>
             <h2 className="text-center my-5 fw-bold">
            🧠 Information About the Muscle
          </h2>

          <p className="text-center">
            The <strong>chest muscles</strong>, primarily made up of the
            <strong> pectoralis major</strong> and{" "}
            <strong>pectoralis minor</strong>, play a key role in upper body
            strength and movement. The pectoralis major, a large, fan-shaped
            muscle, enables pushing and lifting, while the pectoralis minor
            stabilizes the scapula and aids in breathing. Common exercises like
            push-ups, bench presses, and chest flys are essential to strengthen
            and develop these muscles.
          </p>
          </div>

          {/* <h2 className="text-center my-5 fw-bold">
            🧠 Information About the Muscle
          </h2> */}

          {/* <p className="text-center">
            The <strong>chest muscles</strong>, primarily made up of the
            <strong> pectoralis major</strong> and{" "}
            <strong>pectoralis minor</strong>, play a key role in upper body
            strength and movement. The pectoralis major, a large, fan-shaped
            muscle, enables pushing and lifting, while the pectoralis minor
            stabilizes the scapula and aids in breathing. Common exercises like
            push-ups, bench presses, and chest flys are essential to strengthen
            and develop these muscles.
          </p> */}
        </div>
      </div>
    </>
  );
}
