
import { Helmet } from "react-helmet-async";
import cover from "/src/assets/Images/cover.png";
import shoulder_2 from "/src/assets/Videos/ShouldersEx/shoulder_2.mp4";
export default function DumbbellLateralRaise() {
  return (
    <>
    <Helmet>
      <title>
        Dumbbell-Lateral-Raise
      </title>
    </Helmet>
        <div className="dumbbell-lateral-raise-section d-flex justify-content-center align-items-center">
              <div className="custom-card text-center p-4 shadow-lg rounded-4">
                <h2 className="text-white mb-4"> dumbbell-lateral-raise</h2>
                <video
                  width="100%"
                  height="h-50"
                  controls
                  playsInline
                  poster={cover}
                  className="rounded-3 border border-white"
                >
                  <source src={shoulder_2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
    </>
  )
}
