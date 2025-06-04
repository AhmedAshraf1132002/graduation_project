import { Helmet } from "react-helmet-async";
import cover from "/src/assets/Images/cover.png";
import Chest_5 from "/src/assets/Videos/ChestEx/chest_5.mp4";

export default function InclineDumbbellBenchPress() {
  return (
   <>
    <Helmet>
      <title>
        Incline-Dumbbell-Bench-Press
      </title>
    </Helmet>
  
    <div
      className="incline-dumbbell-section d-flex justify-content-center align-items-center"
    >
      <div className="custom-card text-center p-4 shadow-lg rounded-4">
        <h2 className="text-white mb-4">Incline Dumbbell Bench Press</h2>
        <video
          width="100%"
          height="h-50"
          controls
          playsInline
          poster={cover}
          className="rounded-3 border border-white"
        >
          <source src={Chest_5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
     </>
  );
}
