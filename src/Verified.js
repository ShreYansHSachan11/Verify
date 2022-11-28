import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Register.css";

class Verified extends Component {
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
      height: "13vw",
      width: "13.5vw",
    };
   
    const loginbox = {
      height: "69vh",
      backgroundColor: "rgba(255, 255, 255, 0.57)",
borderRadius: "2px",
width:"52vw",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
    };
   
    const button = {
      marginBottom:"15px",
      width: "12vw",
      height: "42px",

      fontSize: "18px",
      borderRadius:"18px",
      marginTop: "20px",
    }
    

    
    const a = {
      textDecoration:"none",
      fontWeight: "900",
      fontSize: "20px",
      margin:"0",
     
    }
    return (
      <div style={myStyle}>
        <div style={loginbox} className="LoginBox">
          <img style={loginBoxImg} src="/images/email.png" alt="" srcset="" />
          <p style ={a} >Congratulations </p>
          <p style ={a} >
You have successfully verified the account</p>
<button style={button}  className="Signin">
                Login
              </button>
        </div>
      </div>
    );
  }
}

export default Verified;
