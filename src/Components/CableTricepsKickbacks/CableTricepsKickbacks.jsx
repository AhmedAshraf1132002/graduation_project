
import cover from "/src/assets/Images/cover.png";
import triceps_1 from "/src/assets/Videos/TricepsEx/triceps_2.mp4";
import { Helmet } from "react-helmet-async";
export default function CableTricepsKickbacks() {
  return (
    <>
    <Helmet>
      <title>
        Cable-Triceps-Kickbacks
      </title>
    </Helmet>
      <div className="cable-triceps-kickbacks-section d-flex justify-content-center align-items-center">
        <div className="custom-card text-center p-4 shadow-lg rounded-4">
          <h2 className="text-white mb-4"> cable-triceps-kickbacks</h2>
          <video
            width="100%"
            height="h-50"
            controls
            playsInline
            poster={cover}
            className="rounded-3 border border-white"
          >
            <source src={triceps_1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
