import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Register.css";

class MainPage extends Component {
  render() {
    const myStyle = {
      backgroundImage: "url(images/mainBack.png)",
      height: "100vh",
      overflow: "hidden",
     
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      
      zIndex:"1",
    };
    const loginBoxImg = {
      height: "13vw",
      width: "13.5vw",
    };
    const nav = {
      display:"flex",
      width:"100vw",
justifyContent:"flex-end",
alignItems:"center",
margin:"15px",
position:"relative",
left:"-150px",
    }
   
    const loginbox = {
      height: "69vh",
      position:"relative",
      top:"-14vh",
borderRadius: "2px",
width:"52vw",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
width:"100vw",
marginTop:"20px",
    };
   
    const button = {
      marginBottom:"15px",
      width: "10.5vw",
      height: "42px",
      background: "#153B75",
boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
fontWeight: "400",
      fontSize: "18px",
      borderRadius:"25px",
      margin: "9px",
    }
    const mount = {
      width: "85vw",
      position:"absolute",
      bottom:"0",
      left:"80px",
      zIndex:"2",
      height: "48vh",
    }
    const group = {
      width: "100vw",
      position:"absolute",
      
      bottom:"0",
      zIndex:"3",
      height: "29vh",
    }

    
    const p = {
      textDecoration:"none",
      fontWeight: "900",
      fontSize: "54px",
      margin:"0",
      
lineHeight: "86px",

color: "#FFFFFF",
textShadow:"-1.5px 1.5px 0 #746D6D, 1.5px 1.5px 0 #746D6D,1.5px -1.5px 0 #746D6D,-1.5px -1.5px 0 #746D6D",
        };
        const a = {
          textDecoration:"none",
          fontWeight: "600",
          fontSize: "20px",
          margin:"0 20px",
          
    
    
    color: "#FFFFFF",
    textShadow:"-1.5px 1.5px 0 #746D6D, 1.5px 1.5px 0 #746D6D,1.5px -1.5px 0 #746D6D,-1.5px -1.5px 0 #746D6D",
            };

     
    
    return (
      <div style={myStyle}>
        <div style={nav} className="navbar">
          <a style={a} href="">Home</a>
          <a style={a} href="">Services</a>
          <a style={a} href="">Portfolio</a>
          <a style={a} href="">Contact Us</a>
          <NavLink style={a} to="/">Logout</NavLink>
          <img src="/images/user.png" alt="" />
        </div>
        <div style={loginbox} className="LoginBox">
         <h1 style={p}>Welcome To Our Website</h1>
        
<button style={button}  className="Signin">
                JOIN NOW
              </button>
        </div>
        
          <img style={mount} src="images/mount.png" alt="" srcset="" />
          <img style={group} src="images/Group.png" alt="" srcset="" />
       
      </div>
    );
  }
}

export default MainPage;
