import React from 'react'
import { Link } from 'react-router-dom'
import signUpLogo from '/src/assets/Images/logo.png';

export default function SignUp() {
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
                <label className='text-white ms-1' htmlFor='fullNameInput'>Full Name :</label>
                <input type="text" className="form-control text-white mt-1" id="fullNameInput" placeholder="Full Name"/>
               </div>
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='userNameInput'>User Name :</label>
                <input type="text" className="form-control text-white mt-1" id="userNameInput" placeholder="User Name"/>
               </div>
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='emailInput'>Full Name :</label>
                <input type="email" className="form-control text-white mt-1" id="emailInput" placeholder="Email"/>
               </div>
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='idInput'>Id :</label>
                <input type="number" className="form-control text-white mt-1" id="idInput" placeholder="Id"/>
               </div>
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='passwordInput'>Password :</label>
                <input type="password" className="form-control text-white mt-1" id="passwordInput" placeholder="password"/>
               </div>
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='confirmPasswordInput'>Confirm Password :</label>
                <input type="password" className="form-control text-white mt-1" id="confirmPasswordInput" placeholder="Confirm Password"/>
               </div>
                <div className="secondFormGroup mt-5 d-flex justify-content-around align-items-center ">
                <input type="date" className='form-control text-white text-secondary mx-3' id="dateInput" />
                <button className='mx-3' type='button'>sex</button>
                <Link to={"/login"}><button className='text-black fw-bolder confirm px-5 bg-danger mx-5' type='submit'>Login </button></Link>
                <button className='text-black fw-bolder confirm mx-5' type='submit'>Confirm <i className="fa-solid fa-arrow-right-long ms-1"></i></button>
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
