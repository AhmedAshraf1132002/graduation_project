import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Id() {
  const { setUserId } = useContext(UserIdContext);
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasValidID = localStorage.getItem("hasValidID") === "true";
    if (hasValidID) {
      // If already has valid ID, go to the return path
      const returnPath =
        location.state?.returnPath || "/Graduation-Project/practise";
      navigate(returnPath);
    }
  }, [navigate, location]);

  const handleConfirm = async () => {
    if (!inputId.trim()) {
      setError("ID is required.");
      return;
    }

    const idPattern = /^(QRG|PREM)\d{8}$/;
    if (!idPattern.test(inputId)) {
      setError(
        "Invalid ID format. Must start with QRG or PREM followed by 8 digits."
      );
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        navigate("/Graduation-Project/login");
        return;
      }

      const res = await axios.post(
        "https://d151-102-191-71-165.ngrok-free.app/api/v1/gym-ids/verify",
        { access_id: inputId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.is_valid) {
        setUserId(inputId);
        localStorage.setItem("hasValidID", "true");
        localStorage.setItem("idType", res.data.id_type);
        // Navigate to the return path
        const returnPath =
          location.state?.returnPath || "/Graduation-Project/practise";
        navigate(returnPath);
      } else {
        setError("Invalid ID. Please try again.");
      }
    } catch (err) {
      console.error("Verification error:", err);

      if (err.response?.status === 401) {
        // Token expired or invalid — cleanup and redirect
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("hasValidID");
        localStorage.removeItem("idType");
        setError("Session expired. Please log in again.");
        navigate("/Graduation-Project/login");
      }
      // else if (err.response?.data?.detail) {
      //   setError(err.response.data.detail);
      // }
      else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="idInputSection text-white d-flex justify-content-center align-items-center">
        <div className="layer"></div>
        <div className="container text-center d-flex flex-column justify-content-center align-content-center">
          <div className="row">
            <div className="col-md-12">
              <label className="fs-3" htmlFor="userIdInput">
                Enter your Gym Access ID:
              </label>
              <input
                id="userIdInput"
                type="tel"
                className="form-control m-auto text-black w-50 my-2"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                placeholder="Enter QRG or PREM followed by 8 digits"
                disabled={isLoading}
              />
              <button
                onClick={handleConfirm}
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify ID"}
              </button>
              {error && <p className="text-danger fw-bold mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
