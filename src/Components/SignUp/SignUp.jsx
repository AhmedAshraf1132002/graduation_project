import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUpLogo from '/src/assets/Images/logo.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


export default function SignUp() {


const [isLoading , setIsLoading] = useState(false);
const [errorMsg , setErrorMsg] = useState("");
const [successMsg , setSuccessMsg] = useState("");
const navigate =  useNavigate();       // bt3mly return l navigate function 34an aro7 mn signUp l login 3latol awl ma a3ml register 3n tare2 function msh Link ya3ny bstkhdam js


let { handleSubmit , values , handleChange , errors , touched , handleBlur} = useFormik({                // useFormic bt3ml return l object gwah mesthods w properties kteer mnha el initialValues
  initialValues : {                                                                                      // el values deh hya ely hbd2 ab3tha l Back-End
    "name": "",
    "email":"",
    "password":"",
    "rePassword":"",
    "id":""
  },
  onSubmit,     // lazem el data tkon valid 3lshan functio of register ynf3 ytndh 3leha
  validationSchema : Yup.object({
    name : Yup.string().required("Name is Required").min(3 , "Name lenght must be more than 3").max(20 , "Name lenght must be less than 20"),
    email : Yup.string().required("Email is Required").email("Enter Valid Email"),
    password : Yup.string().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ , "Minimum eight characters, at least one letter, one number and one special character"),
    rePassword : Yup.string().required("RePassword is Required").oneOf([Yup.ref("password")] , "Password and rePassword must be matched"),
    id : Yup.string().required("Id is Required")
  })
})



// function validateData(values)
// {

// let errors = {};

// if(values.name == "")
//    errors.name = "Name is Required";
//   else if (values.name.length < 3)
//     errors.name = "Name lenght must be more than 3"
//   else if (values.name.length > 20)
//     errors.name = "Name lenght must be less than 20"

//   if(values.email == "")
//     errors.email = "Email is Required";

//   if(values.password == "")
//     errors.password = "password is Required";

//   else if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password) != true)
//     errors.password = "Minimum eight characters, at least one letter, one number and one special character"


//   if(values.rePassword == "")
//     errors.rePassword = "  RePassword is Required";
//   else if(values.rePassword != values.password)
//     errors.rePassword = "Password and repassword must be matched"

//   if(values.id == "")
//     errors.id = "  Id is Required";

// return errors;

// }

  async function onSubmit()
  {
    setSuccessMsg("");
    setErrorMsg("");

    setIsLoading(true);

     await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" ,values).then(({data}) => {

      setIsLoading(false);
      setSuccessMsg(data.message)
     setTimeout(() => {
      navigate("/Graduation-Project/login")
     })

      console.log(data);
      
    }).catch((err) => {
      setIsLoading(false);
      setErrorMsg(err.response.data.message);
      
      
      
    })
    
    
    
  }


  return (
    <>
         
       
       <div className="signUp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className='d-flex flex-column w-25 justify-content-center align-items-center my-5 '>
                <div className="signUpLogo">
                <img className='w-100' src={signUpLogo} alt="signUpLogo" />
              </div>
              <span className='text-white fs-4'>Meta Gym</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="signUpContent">
                <form>
    
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='nameInput'>Name :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.name} type="text" name='name' className="form-control text-white mt-1" id="nameInput" placeholder="Name"/>
                { touched.name && errors.name && <p className='text-danger'>{errors.name}</p>}
                </div>

                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='emailInput'>Email :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" name='email' className="form-control text-white mt-1" id="emailInput" placeholder="Email"/>
                { touched.email && errors.email && <p className='text-danger'>{errors.email}</p>}
               </div>

               <div className="formGroup">
                <label className='text-white ms-1' htmlFor='passwordInput'>Password :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name='password' className="form-control text-white mt-1" id="passwordInput" placeholder="password"/>
                { touched.password && errors.password && <p className='text-danger'>{errors.password}</p>}
               </div>

               <div className="formGroup">
                <label className='text-white ms-1' htmlFor='confirmPasswordInput'>Confirm Password :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.rePassword} type="password" name='rePassword' className="form-control text-white mt-1" id="confirmPasswordInput" placeholder="Confirm Password"/>
                { touched.rePassword && errors.rePassword && <p className='text-danger'>{errors.rePassword}</p>}
               </div>

                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='idInput'>Id :</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.id} type="number" name='id' className="form-control text-white mt-1" id="idInput" placeholder="Id"/>
                { touched.id && errors.id && <p className='text-danger'>{errors.id}</p>}
               </div>

                <div className="secondFormGroup mt-5 d-flex justify-content-around align-items-center ">
                <input type="date" className='form-control text-white text-secondary mx-3' id="dateInput" />
                {/* <button className='mx-3' type='button'>sex</button> */}
                <Link to={"/Graduation-Project/login"}><button className='text-black fw-bolder confirm px-5 bg-danger mx-5' type='submit'>Login </button></Link>
                <button onClick={handleSubmit} type='submit' className={`text-black btn fw-bolder confirm mx-5 ${isLoading ? 'bg-secondary'  : 'bg-primary'}`} disabled ={isLoading}> Register { isLoading && <i className="fas fa-spinner fa-spin"></i>} </button>
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
