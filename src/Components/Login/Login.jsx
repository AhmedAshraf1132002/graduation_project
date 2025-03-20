import React from 'react'
import login_photo from '/src/assets/Images/logo.png';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <>
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
                <input type="email" className="form-control text-white mt-1" id="emailInput" placeholder="Email"/>
               </div> 
                <div className="formGroup">
                <label className='text-white ms-1' htmlFor='passwordInput'>Password :</label>
                <input type="password" className="form-control text-white mt-1" id="passwordInput" placeholder="password"/>
               </div>
                <div className="secondFormGroup mt-5 d-flex flex-column ">
                <Link to={"/"}><button className='text-black fw-bolder loginBtn m-5 ' type='submit'>Login <i className="fa-solid fa-arrow-right-long ms-1"></i></button></Link>
                <Link to={"/signup"}><button className='text-black fw-bolder SignUpBtn mx-5' type='button'>SignUp </button></Link>
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
