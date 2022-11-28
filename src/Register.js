import React, { useState, Component } from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Register.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "./api/axios";
import Loader from "./components/loader/loader";
const LOGIN_URL = "https://curdapibyanirudh.herokuapp.com/register";
const Register = () => {
   {
    const[verified,setVerified]= useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
      function onChange(value) {
          console.log("Captcha value:", value);
          setVerified(true);
          document.getElementsByClassName(".Signin").style.color='black';
          
        }
        function myFunction() {
          window.location.href="/";  
              }
    const myStyle = {
      backgroundImage: "url(images/background.jpg)",
      height: "100vh",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const loginBoxImg = {
      height: "23vw",
      width: "24vw",
    };
    const register = {
      width: "13vw",
      height: "45px",

      fontSize: "21px",

      marginTop: "20px",
    };
    const mainBox = {
     position:"relative",
     
    }
    const login = {
      
      height: "87vh",}
    return (
      <div style={myStyle}>
        <div style={login} className="LoginBox">
          <div className="LoginBox-left">
            <img
              style={loginBoxImg}
              src="images/register.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="LoginBox-right">
            <div className="LoginBox-right-main">
              <h1>Registration</h1>
              <div className="formContainer">
                <form action="">
                  <div className="mainFormBox">
                    <div className="inputItems">
                      <label htmlFor="fullName"> Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Please enter your name"
                      />
                    </div>

                    <div className="inputItems">
                      <label htmlFor="rollNo"> Roll No.</label>
                      <input
                        type="text"
                        id="rollNo"
                        placeholder="Please enter your Roll no"
                      />
                    </div>

                    <div className="inputItems">
                      <label htmlFor="year"> Year </label>
                      <select id="year">
                        <option value="" disabled selected>
                          --Please select--
                        </option>
                        <option value="1st year"> 1st year</option>
                        <option value="2nd year"> 2nd year</option>
                        <option value="3rd year"> 3rd year</option>
                        <option value="4th year"> 4th year</option>
                      </select>
                    </div>

                    <div className="inputItems">
                      <label htmlFor="branch"> Branch </label>
                      <select id="branch">
                        <option value="" disabled selected>
                          --Please select--
                        </option>
                        <option value="cse">
                          {" "}
                          Computer Science and Engineering
                        </option>
                        <option value="cseds">
                          {" "}
                          Computer Science and Engineering(Data Science)
                        </option>
                        <option value="cseai">
                          {" "}
                          Computer Science and Engineering(Artificial
                          Intelligence )
                        </option>
                        <option value="csit">
                          {" "}
                          Computer Science and Information Technology
                        </option>
                        <option value="it"> Information Technology</option>
                        <option value="ece">
                          {" "}
                          Electronics and Communication Engineering
                        </option>
                        <option value="eee">
                          {" "}
                          Electrical and Electronics Engineering
                        </option>
                        <option value="mechanical">
                          {" "}
                          Mechanical and Mechatronics{" "}
                        </option>
                      </select>
                    </div>

                    <div className="inputItems">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please enter your email"
                      />
                    </div>

                    <div className="inputItems">
                      <label htmlFor="number">Mobile Number</label>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Please enter your mobile no"
                      />
                    </div>

                    <div className="inputItems">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Please enter your password"
                      />
                    </div>
                    <div className="inputItems">
                      <label htmlFor="cpassword">Confirm Password</label>
                      <input
                        type="cpassword"
                        name="cpassword"
                        id="cpassword"
                        placeholder="Re-enter the same password"
                      />
                    </div>
                  </div>
                  <label>Gender</label>
                  <div className="radio">
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="male"
                    />{" "}
                    Male
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="female"
                    />{" "}
                    Female
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="male"
                    />{" "}
                    Other
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="male"
                    />{" "}
                    Prefer not to say
                  </div>
                </form>
              </div>
              <div className="checkboxContainer2">
                <div className="checkboxContainer-Left">
                <div className='captcha'>
                  <ReCAPTCHA className='recaptcha'
          sitekey="6LcN-RcjAAAAAI4gi4UmdyKZylVPZ5TheoK2HZa3"
          onChange={onChange}
        /></div>
                </div>
                <div className="checkboxContainer-right">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
              

              <button disabled={!verified} onClick={myFunction} style={register} className="Signin">
                Register
              </button>
              <div className="register">
                <p>
                  Already have an account?{" "}
                  <span>
                  <NavLink to="/">Sign in</NavLink>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
