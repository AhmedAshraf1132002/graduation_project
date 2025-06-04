// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Helmet } from "react-helmet-async";

// export default function VerifyOtp() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { email, username } = location.state || {};

//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   // Resend OTP cooldown timer state
//   const [resendTimer, setResendTimer] = useState(0);
//   const RESEND_COOLDOWN = 30; // seconds

//   // Countdown effect for resend cooldown
//   useEffect(() => {
//     let interval = null;
//     if (resendTimer > 0) {
//       interval = setInterval(() => {
//         setResendTimer((prev) => prev - 1);
//       }, 1000);
//     } else if (resendTimer === 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [resendTimer]);

//   const formik = useFormik({
//     initialValues: {
//       otp_code: "",
//     },
//     validationSchema: Yup.object({
//       otp_code: Yup.string()
//         .required("OTP is required")
//         .length(6, "OTP must be exactly 6 digits"),
//     }),
//     onSubmit: async (values) => {
//       setErrorMsg("");
//       setSuccessMsg("");
//       setIsLoading(true);

//       try {
//         const response =  await axios.post(
//           "https://d4db-196-138-30-198.ngrok-free.app/api/v1/users/verify-otp",
//            { username, otp_code: values.otp_code },
//            { headers: { "Content-Type": "application/json" } }
//            );

//         setIsLoading(false);
//         setSuccessMsg("OTP verified successfully!");

//         setTimeout(() => {
//           navigate("/Graduation-Project/login");
//         }, 1500);
//       } catch (error) {
//         setIsLoading(false);
//         if (error.response?.data?.detail) {
//           setErrorMsg(error.response.data.detail);
//         } else {
//           setErrorMsg("Failed to verify OTP. Please try again.");
//         }
//       }
//     },
//   });

//   const handleResendOtp = async () => {
//     setErrorMsg("");
//     setSuccessMsg("");
//     setIsLoading(true);

//     try {
//       await axios.post(
//         "https://d4db-196-138-30-198.ngrok-free.app/api/v1/users/resend-otp",
//         { email, username },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       setIsLoading(false);
//       setSuccessMsg("OTP resent successfully. Please check your email.");

//       // Start cooldown
//       setResendTimer(RESEND_COOLDOWN);
//     } catch (error) {
//       setIsLoading(false);
//       if (error.response?.data?.detail) {
//         setErrorMsg(error.response.data.detail);
//       } else {
//         setErrorMsg("Failed to resend OTP. Please try again.");
//       }
//     }
//   };

//   if (!email || !username) {
//     return (
//       <div className="container mt-5">
//         <h3>Invalid Access</h3>
//         <p>Please sign up or login first.</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Verify OTP</title>
//       </Helmet>
//       <div className="verifyOtp vh-100 d-flex flex-column justify-content-center  text-center">
//         <div className="  container mt-5 w-50">
//           <h3>Verify Your Account</h3>
//           <p>
//             Please enter the 6-digit OTP sent to your email:{" "}
//             <strong>{email}</strong>
//           </p>

//           <form onSubmit={formik.handleSubmit}>
//             <div className="form-group mb-3">
//               <label htmlFor="otpInput">OTP Code:</label>
//               <input
//                 id="otpInput"
//                 name="otp"
//                 type="tel"
//                 pattern="\d*"
//                 maxLength={6}
//                 className={`form-control ${
//                   formik.touched.otp && formik.errors.otp ? "is-invalid" : ""
//                 }`}
//                 value={formik.values.otp}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Enter OTP"
//               />
//               {formik.touched.otp && formik.errors.otp ? (
//                 <div className="invalid-feedback">{formik.errors.otp}</div>
//               ) : null}
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary"
//               disabled={isLoading}
//             >
//               Verify OTP{" "}
//               {isLoading && <i className="fas fa-spinner fa-spin ms-2"></i>}
//             </button>
//           </form>

//           <div className="mt-3">
//             <button
//               className="btn btn-secondary"
//               disabled={resendTimer > 0 || isLoading}
//               onClick={handleResendOtp}
//             >
//               {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
//             </button>
//           </div>

//           {errorMsg && <p className="text-danger mt-3">{errorMsg}</p>}
//           {successMsg && <p className="text-success mt-3">{successMsg}</p>}
//         </div>
//       </div>
//     </>
//   );
// }






import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();

  const { email, username } = location.state || {};

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Resend OTP cooldown timer state
  const [resendTimer, setResendTimer] = useState(0);
  const RESEND_COOLDOWN = 30; // seconds

  // Countdown effect for resend cooldown
  useEffect(() => {
    let interval = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const formik = useFormik({
    initialValues: {
      otp_code: "",
    },
    validationSchema: Yup.object({
      otp_code: Yup.string()
        .required("OTP is required")
        .length(6, "OTP must be exactly 6 digits"),
    }),
    onSubmit: async (values) => {
      setErrorMsg("");
      setSuccessMsg("");
      setIsLoading(true);

      try {
        const response = await axios.post(
          "https://qr-gym-production-d503.up.railway.app/api/v1/users/verify-otp",
          { 
            username, 
            otp_code: values.otp_code 
          },
          { 
            headers: { "Content-Type": "application/json" } 
          }
        );

        // Store tokens if they exist in response
        if (response.data.access_token) {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
        }

        setIsLoading(false);
        setSuccessMsg("OTP verified successfully!");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } catch (error) {
        setIsLoading(false);
        if (error.response?.data?.detail) {
          setErrorMsg(error.response.data.detail);
        } else {
          setErrorMsg("Failed to verify OTP. Please try again.");
        }
      }
    },
  });

  const handleResendOtp = async () => {
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      await axios.post(
        "https://qr-gym-production-d503.up.railway.app/api/v1/users/resend-otp",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      setIsLoading(false);
      setSuccessMsg("OTP resent successfully. Please check your email.");

      // Start cooldown
      setResendTimer(RESEND_COOLDOWN);
    } catch (error) {
      setIsLoading(false);
      if (error.response?.data?.detail) {
        setErrorMsg(error.response.data.detail);
      } else {
        setErrorMsg("Failed to resend OTP. Please try again.");
      }
    }
  };

  if (!email || !username) {
    return (
      <div className="container mt-5">
        <h3>Invalid Access</h3>
        <p>Please sign up or login first.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Verify OTP</title>
      </Helmet>
      <div className="verifyOtp vh-100 d-flex flex-column justify-content-center text-center">
        <div className="container mt-5 w-50">
          <h3 className="text-white">Verify Your Account</h3>
          <p className="text-white">
            Please enter the 6-digit OTP sent to your email:{" "}
            <strong>{email}</strong>
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label className="text-white" htmlFor="otpInput">OTP Code:</label>
              <input
                id="otpInput"
                name="otp_code"
                type="tel"
                pattern="\d*"
                maxLength={6}
                className={`form-control ${
                  formik.touched.otp_code && formik.errors.otp_code ? "is-invalid" : ""
                }`}
                value={formik.values.otp_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter OTP"
              />
              {formik.touched.otp_code && formik.errors.otp_code ? (
                <div className="invalid-feedback">{formik.errors.otp_code}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              Verify OTP{" "}
              {isLoading && <i className="fas fa-spinner fa-spin ms-2"></i>}
            </button>
          </form>

          <div className="mt-3">
            <button
              className="btn btn-secondary"
              disabled={resendTimer > 0 || isLoading}
              onClick={handleResendOtp}
            >
              {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
            </button>
          </div>

          {errorMsg && <p className="text-danger mt-3">{errorMsg}</p>}
          {successMsg && <p className="text-success mt-3">{successMsg}</p>}
        </div>
      </div>
    </>
  );
}