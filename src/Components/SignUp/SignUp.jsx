import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUpLogo from '/src/assets/Images/logo.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';


export default function SignUp() {

const [isLoading , setIsLoading] = useState(false);
const [errorMsg , setErrorMsg] = useState("");
const [successMsg , setSuccessMsg] = useState("");
const navigate =  useNavigate();       // bt3mly return l navigate function 34an aro7 mn signUp l login 3latol awl ma a3ml register 3n tare2 function msh Link ya3ny bstkhdam js

async function onSubmit(values) {
  setSuccessMsg("");
  setErrorMsg("");
  setIsLoading(true);

  const payload = {
    username: values.username,
    email: values.email,
    date_of_birth: values.date_of_birth,
    // phone_number: values.phone_number,
    password: values.password,
    confirm_password: values.confirm_password,
  };

  try {
    const { data } = await axios.post(
      "https://qr-gym-production-d503.up.railway.app/api/v1/users/signup",
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    setIsLoading(false);
    setSuccessMsg("Account created successfully!");
    setTimeout(() => {
    navigate("/verify-otp", {
    state: { 
      email: values.email,      // pass email
      username: values.username // pass username or whatever is needed by your API for OTP
    }
  });

}, 500);
  } catch (err) {
    setIsLoading(false);

    if (err.response?.data?.detail) {
      setErrorMsg(err.response.data.detail);
    } else {
      setErrorMsg("Something went wrong. Please try again.");
    }
  }
}


const { handleSubmit , values , handleChange , errors , touched , handleBlur} = useFormik({                // useFormic bt3ml return l object gwah mesthods w properties kteer mnha el initialValues
  initialValues : {                                                                                      // el values deh hya ely hbd2 ab3tha l Back-End
    "username": "",
    "email":"",
    // "phone_number" : "",
    "date_of_birth": "",
    "password":"",
    "confirm_password":"",
  },
  onSubmit ,   // lazem el data tkon valid 3lshan function of register ynf3 ytndh 3leha
  validationSchema : Yup.object({
    username : Yup.string().required("Name is Required").min(3 , "Name length must be more than 3").max(20 , "Name length must be less than 20"),
    email : Yup.string().required("Email is Required").email("Enter Valid Email"),
    // phone_number : Yup.string().required("Phone number is required").matches(/^01[0-2,5]{1}[0-9]{8}$/, "Enter a valid Egyptian phone number"),
    date_of_birth : Yup.date().required("Date of Birth is required").max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), "You must be at least 18 years old"),
    password : Yup.string().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ , "Minimum eight characters, at least one letter, one number and one special character"),
    confirm_password : Yup.string().required("Confirm Password is Required").oneOf([Yup.ref("password")] , "Password and confirm_password must be matched"),
    
  })
})

  return (
    <>
               <Helmet>
                 <title>SignUp</title>
                       </Helmet>
       
       <div className="signUp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className='d-flex flex-column w-25 justify-content-center align-items-center my-5 '>
                <div className="signUpLogo">
                <img className='w-100' src={signUpLogo} alt="signUpLogo" />
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="signUpContent">
                <form onSubmit={handleSubmit}>
    
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='usernameInput'>Username :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.username} type="text" name='username' className="form-control text-white mt-1" id="usernameInput" placeholder="Username"/>
                { touched.username && errors.username && <p className='text-danger'>{errors.username}</p>}
                </div>

                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='emailInput'>Email :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" name='email' className="form-control text-white mt-1" id="emailInput" placeholder="Email"/>
                { touched.email && errors.email && <p className='text-danger'>{errors.email}</p>}
               </div>

                {/* <div className="formGroup">
                <label className='text-white ms-1' htmlFor='phoneInput'>Phone_number :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.phone_number} type="tel" name='phone_number' className="form-control text-white mt-1" id="phoneInput" placeholder="phone"/>
                { touched.phone_number && errors.phone_number && <p className='text-danger'>{errors.phone_number}</p>}
               </div> */}

               <div className="formGroup">
                <label className='text-white ms-1' htmlFor='passwordInput'>Password :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name='password' className="form-control text-white mt-1" id="passwordInput" placeholder="password"/>
                { touched.password && errors.password && <p className='text-danger'>{errors.password}</p>}
               </div>

               <div className="formGroup">
                <label className='text-white ms-1' htmlFor='confirmPasswordInput'>Confirm Password :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.confirm_password} type="password" name='confirm_password' className="form-control text-white mt-1" id="confirmPasswordInput" placeholder="Confirm Password"/>
                { touched.confirm_password && errors.confirm_password && <p className='text-danger'>{errors.confirm_password}</p>}
               </div>

               <div className="formGroup ">
                <label className='text-white ms-1' htmlFor='dateInput'>Date_of_birth :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.date_of_birth} type="date" name='date_of_birth' className='form-control text-white text-secondary ' id="dateInput" />
                { touched.date_of_birth && errors.date_of_birth && <p className='text-danger'>{errors.date_of_birth}</p>}
               </div>

          
                <div className="secondFormGroup text-end mt-5">
                <button type='submit' className={`text-black fw-bolder  ${isLoading ? 'bg-secondary'  : '.signUp .signUpContent form .secondFormGroup button-primary'}`} disabled ={isLoading}> Register <i className="fa-solid fa-arrow-right-long ms-1"></i> { isLoading && <i className="fas fa-spinner fa-spin"></i>} </button>
                 { errorMsg && <p className='text-danger'>{errorMsg}</p>}
                 { successMsg && <p className='text-success'>{successMsg}</p>}
               </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
