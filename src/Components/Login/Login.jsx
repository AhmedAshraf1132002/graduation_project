import React, { useContext, useEffect, useState } from 'react'
import login_photo from '/src/assets/Images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';

export default function Login() {

const [isLoading , setIsLoading] = useState(false);
const [errorMsg , setErrorMsg] = useState("");
const navigate =  useNavigate(); 
const { setUserToken } = useContext(AuthContext);




const validationSchema = Yup.object({
  email : Yup.string().required("Email is Required").email("Enter Valid Email"),
  password : Yup.string().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ , "Minimum eight characters, at least one letter, one number and one special character"),
})

const initialValues = {                                                                                      // el values deh hya ely hbd2 ab3tha l Back-End
  "email":"",
  "password":"",
};

let { handleSubmit , values , handleChange , errors , touched , handleBlur} = useFormik({                // useFormic bt3ml return l object gwah mesthods w properties kteer mnha el initialValues
  initialValues,
  onSubmit,     // lazem el data tkon valid 3lshan function of Login ynf3 ytndh 3leha
  validationSchema,
})

   async function onSubmit()
   {
          setErrorMsg("");
          setIsLoading(true);
          await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" ,values).then(({data}) => {
          setIsLoading(false);
          setUserToken(data.token);
          localStorage.setItem("token", data.token);
              
          if(location.pathname == "/Graduation-Project/login")
          {
            navigate("/Graduation-Project");
          }
          else
          {
          navigate(location.pathname);
          }

          }).catch((err) => {
            setIsLoading(false);
            setErrorMsg(err.response.data.message);
          })
   }


  return (
    <>
              {/* <Helmet>
        <title>Login</title>
              </Helmet> */}
             
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="photoContent d-flex flex-column w-25 justify-content-center align-items-center my-5">
                <div className="loginPhoto">
                  <img className='w-100' src={login_photo} alt="login_photo" />
                </div>
                <span className='text-white fs-4 '>Meta gym</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="loginContent">
                <div className="loginTitle my-5">
                  <h2>Login..</h2>
                </div>
                <form>
                <div className="formGroup my-5">
                <label className='text-white ms-1' htmlFor='emailInput'>Email :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" name='email' className="form-control text-white mt-1" id="emailInput" placeholder="Email"/>
                { touched.email && errors.email && <p className='text-danger'>{errors.email}</p>}
               </div>

                <div className="formGroup ">
                <label className='text-white ms-1' htmlFor='passwordInput'>Password :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name='password' className="form-control text-white mt-1" id="passwordInput" placeholder="password"/>
                { touched.password && errors.password && <p className='text-danger'>{errors.password}</p>}
               </div>

                <div className="secondFormGroup mt-5 d-flex flex-column ">
                <button onClick={handleSubmit} className={`text-black fw-bolder loginBtn m-5 ${isLoading ? 'bg-secondary'  : 'bg-primary'}`} disabled ={isLoading} type='submit'>Login { isLoading && <i className="fas fa-spinner fa-spin"></i>} <i className="fa-solid fa-arrow-right-long ms-1"></i></button>
                { errorMsg && <p className='text-danger'>{errorMsg}</p>}
               <Link to={"/Graduation-Project/signup"}> <button  className='text-black fw-bolder SignUpBtn mx-5' type='button'>Register</button></Link>
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
