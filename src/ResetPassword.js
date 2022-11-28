import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Register.css";

class Register extends Component {
  render() {
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
      position: "relative",
    };
    const loginbox = {
      height: "60vh",
    };
    const subtitle = {
      fontSize: "14px",
      width: "20vw",
    
      color: "#9E9A9A",
    };
    const label = {
      fontSize: "15px",
      fontWeight:"600",
      marginBottom:"10px",
    };
    const middle = {
      
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection:"column",
      width:"25vw",
    };
    const h1 = {
      margin:"0",
    }
    const button = {
      marginBottom:"15px",
      width: "10vw",
      height: "39px",

      fontSize: "17px",

      marginTop: "20px",
    }
    const input = {
      width: "23vw",
      height: "4.2vw",
      padding:"15px",
      color: "#9E9A9A",
      border: "3px solid #746D6D",
borderRadius: "0px 5px 5px 0px",
fontWeight:"600",
fontSize: "14px",

    }
    const a = {
      textDecoration:"none",
      fontWeight: "800",
      fontSize: "14px",
      color: "#464242",
      margin:"15px",
    }
    return (
      <div style={myStyle}>
        <div style={loginbox} className="LoginBox">
          <div className="LoginBox-left">
            <img style={loginBoxImg} src="images/reset.png" alt="" srcset="" />
          </div>
          <div className="LoginBox-right">
            <div className="LoginBox-right-main">
              <h1 style={h1}>Reset your Password</h1>
            </div>
            <div style={middle} >
              <p style={subtitle}>
                The verification email will be sent to the mailbox. Please check
                It{" "}
              </p>
              <label style={label} htmlFor="email">
                Email
              </label>
              <input
                style={input}
                type="text"
                id="email"
                placeholder="Please enter your email"
              />
              <button style={button}  className="Signin">
                Send
              </button>
              <div className="register">
                <p>
                  <NavLink style={a}  to="/">Back to Login</NavLink>
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
