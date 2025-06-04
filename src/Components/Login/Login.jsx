// import React, { useContext, useEffect, useState } from "react";
// import login_photo from "/src/assets/Images/logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { Helmet } from "react-helmet-async";

// export default function Login() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const navigate = useNavigate();
//   const { userToken , setUserToken } = useContext(AuthContext);
//   const location = useLocation();

//   useEffect(() => {
//   if (userToken) {
//     navigate("/Graduation-Project");
//   }
// }, [userToken, navigate])

//   const validationSchema = Yup.object({
//     username: Yup.string()
//       .required("UserName is Required")
//       .min(3, "UserName length must be more than 3")
//       .max(20, "UserName length must be less than 20"),
//     password: Yup.string()
//       .required("Password is Required")
//       .matches(
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//         "Minimum eight characters, at least one letter, one number and one special character"
//       ),
//   });

//   async function onSubmit(values) {
//     setErrorMsg("");
//     setIsLoading(true);

//     try {
//       const formData = new URLSearchParams();
//       formData.append("username", values.username);
//       formData.append("password", values.password);

//       const { data } = await axios.post(
//         "https://d151-102-191-71-165.ngrok-free.app/api/v1/users/token",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         }
//       );

//       setUserToken({
//         access_token: data.access_token,
//         refresh_token: data.refresh_token,
//         token_type: data.token_type,
//       });
//       navigate("/Graduation-Project");
//     } catch (err) {
//       if (err.response?.status === 401) {
//         setErrorMsg("Invalid username or password");
//       } else if (err.response?.status === 429) {
//         setErrorMsg(
//           "Too many login attempts. Please wait a minute before trying again."
//         );
//         // Optional: disable login button temporarily here if you want
//       } else {
//         setErrorMsg(err.response?.data?.detail || "Login failed");
//       }
//     } finally {
//       setIsLoading(false);
      
//     }
//   }

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit,
//   });

//   const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
//     formik;

//   return (
//     <>
//       <Helmet>
//         <title>Login</title>
//       </Helmet>

//       <div className="login">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="photoContent d-flex flex-column w-25 justify-content-center align-items-center my-5">
//                 <div className="loginPhoto">
//                   <img className="w-100" src={login_photo} alt="login_photo" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-12">
//               <div className="loginContent">
//                 <div className="loginTitle my-5">
//                   <h2>Login..</h2>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                   <div className="formGroup my-5">
//                     <label className="text-white ms-1" htmlFor="userNameInput">
//                       UserName :
//                     </label>
//                     <input
//                       onBlur={handleBlur}
//                       onChange={handleChange}
//                       value={values.username}
//                       type="text"
//                       name="username"
//                       className="form-control text-white mt-1"
//                       id="userNameInput"
//                       placeholder="UserName"
//                     />
//                     {touched.username && errors.username && (
//                       <p className="text-danger">{errors.username}</p>
//                     )}
//                   </div>

//                   <div className="formGroup">
//                     <label className="text-white ms-1" htmlFor="passwordInput">
//                       Password :
//                     </label>
//                     <input
//                       onBlur={handleBlur}
//                       onChange={handleChange}
//                       value={values.password}
//                       type="password"
//                       name="password"
//                       className="form-control text-white mt-1"
//                       id="passwordInput"
//                       placeholder="Password"
//                     />
//                     {touched.password && errors.password && (
//                       <p className="text-danger">{errors.password}</p>
//                     )}
//                   </div>

//                   <div className="secondFormGroup mt-5 d-flex flex-column align-items-center">
//                     <button
//                       className={`text-black fw-bolder loginBtn mt-5  ${
//                         isLoading
//                           ? "bg-secondary"
//                           : ".login .loginContent form .secondFormGroup .loginBtn"
//                       }`}
//                       disabled={isLoading}
//                       type="submit"
//                     >
//                       Login{" "}
//                       {isLoading && <i className="fas fa-spinner fa-spin"></i>}{" "}
//                       <i className="fa-solid fa-arrow-right-long ms-1"></i>
//                     </button>

//                     {errorMsg && <p className="text-danger">{errorMsg}</p>}

//                     <button className="mt-4 fw-bolder SignUpBtn" type="button">
//                       <Link
//                         className="text-decoration-none text-black"
//                         to={"/Graduation-Project/signup"}
//                       >
//                         Register
//                       </Link>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useContext, useEffect, useState } from "react";
import login_photo from "/src/assets/Images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthContext";
import { Helmet } from "react-helmet-async";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { userToken, setUserToken } = useContext(AuthContext);
  const location = useLocation();


  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [userToken, navigate]);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("UserName is Required")
      .min(3, "UserName length must be more than 3")
      .max(20, "UserName length must be less than 20"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      ),
  });

  async function onSubmit(values) {
    setErrorMsg("");
    setIsLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("username", values.username);
      formData.append("password", values.password);

      const { data } = await axios.post(
        "https://qr-gym-production-d503.up.railway.app/api/v1/users/token",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // Store tokens in localStorage
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);

      setUserToken({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        token_type: data.token_type,
      });

      // Store the target path if it exists

        // ✅ Add delay before navigating to let LoadingScreen appear
    const targetPath = location.state?.from?.pathname || "/";
    setTimeout(() => {
      navigate(targetPath);
    }, 5000); // 1.5 seconds delay to show LoadingScreen

    } catch (err) {
      if (err.response?.status === 401) {
        setErrorMsg("Invalid username or password");
      } else if (err.response?.status === 429) {
        setErrorMsg(
          "Too many login attempts. Please wait a minute before trying again."
        );
      } else {
        setErrorMsg(err.response?.data?.detail || "Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    formik;

  if (isLoading) {
  return <LoadingScreen />;
}


  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="photoContent d-flex flex-column w-25 justify-content-center align-items-center my-5">
                <div className="loginPhoto">
                  <img className="w-100" src={login_photo} alt="login_photo" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="loginContent">
                <div className="loginTitle my-5">
                  <h2>Login..</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="formGroup my-5">
                    <label className="text-white ms-1" htmlFor="userNameInput">
                      UserName :
                    </label>
                    <input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.username}
                      type="text"
                      name="username"
                      className="form-control text-white mt-1"
                      id="userNameInput"
                      placeholder="UserName"
                    />
                    {touched.username && errors.username && (
                      <p className="text-danger">{errors.username}</p>
                    )}
                  </div>

                  <div className="formGroup">
                    <label className="text-white ms-1" htmlFor="passwordInput">
                      Password :
                    </label>
                    <input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      type="password"
                      name="password"
                      className="form-control text-white mt-1"
                      id="passwordInput"
                      placeholder="Password"
                    />
                    {touched.password && errors.password && (
                      <p className="text-danger">{errors.password}</p>
                    )}
                  </div>

                  <div className="secondFormGroup mt-5 d-flex flex-column align-items-center">
                    <button
                      className={`text-black fw-bolder loginBtn mt-5  ${
                        isLoading
                          ? "bg-secondary"
                          : ".login .loginContent form .secondFormGroup .loginBtn"
                      }`}
                      disabled={isLoading}
                      type="submit"
                    >
                      Login{" "}
                      {isLoading && <i className="fas fa-spinner fa-spin"></i>}{" "}
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </button>

                    {errorMsg && <p className="text-danger">{errorMsg}</p>}

                    <button className="mt-4 fw-bolder SignUpBtn" type="button">
                      <Link
                        className="text-decoration-none text-black"
                        to={"/signup"}
                      >
                        Register
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
