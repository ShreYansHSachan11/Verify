import React, {
  useRef,
  useState,
  Component,
  useEffect,
  useContext,
} from "react";
import AuthContext from "./auth/AuthProvider";
import axios from "./api/axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "./components/loader/loader";
const LOGIN_URL = "https://curdapibyanirudh.herokuapp.com/login";
const Login = () => {
  const [verified, setVerified] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      setIsLoading(false);
      setAuth({  accessToken,user, pwd });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
      setIsLoading(false);
    }
  };
  function onChange(value) {
    setVerified(true);
    document.getElementsByClassName(".Signin").style.color = "black";
  }

  {
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
    return (
      <>
        {success ? (
          <section>
            {function myFunction() {
              window.location.href = "/mainpage";
            }}
          </section>
        ) : (
          <section>
            <div style={myStyle}>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="LoginBox">
                <div className="LoginBox-left">
                  <img src="images/login.png" alt="" srcset="" />
                </div>
                <div className="LoginBox-right">
                  <div className="LoginBox-right-main">
                    <h1>Login</h1>
                    <div className="input-border">
                      <div className="icons">
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                      </div>

                      <input
                        type="text"
                        placeholder="Username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                      />
                    </div>
                    <form method="POST" onSubmit={handleSubmit}>
                      <div className="input-border">
                        <div className="icons">
                          <FontAwesomeIcon icon="fa-solid fa-key" />
                        </div>

                        <input
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                        />
                        <div className="icons">
                          <FontAwesomeIcon icon="fa-solid fa-eye" />
                        </div>
                      </div>
                      <div className="forgetPassword">
                        <p>
                          <NavLink to="/ResetPassword">
                            Forget Password?
                          </NavLink>
                        </p>
                      </div>
                      <div className="checkboxContainer">
                        <div className="checkboxContainer-left">
                          <div className="captcha">
                            <ReCAPTCHA
                              className="recaptcha"
                              sitekey="6LcN-RcjAAAAAI4gi4UmdyKZylVPZ5TheoK2HZa3"
                              onChange={onChange}
                            />
                          </div>
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
                      <>
                        {isLoading ? <Loader /> : console.log("hi")}
                        {}

                        <button
                          onClick={handleSubmit}
                          disabled={!verified}
                          className="Signin"
                        >
                          Sign In
                        </button>
                      </>
                    </form>
                    <div className="register">
                      <p>
                        Don't have a account?{" "}
                        <span>
                          <NavLink to="/Register">Register</NavLink>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
};

export default Login;
