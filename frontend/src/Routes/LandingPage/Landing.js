import React from "react";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Footer/Footer.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     navigate("/home");
  //   }
  // }, [navigate]);

  return (
    <>
      <div className="landing ">
        <video src={require("../images/beach.mp4")} autoPlay loop muted />
        <div className="landing_name">
          <h1 className="landing-header">T r a v e l W a l l e t</h1>
          <p className="landing-desc">
            Exploring the World, One Expense at a Time.
          </p>
          <div>
            <NavLink to="/login">
              <button className="loginBtn">Log In</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="SignUp">Sign Up</button>
            </NavLink>
          </div>
        </div>

        <div className="landing-heading">
          <img
            align="left"
            className="landing-logo"
            src={require("../images/logo.jpg")}
            alt=""
          />
          <div className="landing-feature">
            <div className="landing-content">
              <h1>Maintaining travel logs</h1>
              <h1> has never been easier</h1>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> &nbsp;&nbsp;Plan new
                  trips
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> &nbsp;&nbsp;Split
                  travel expenses with friends
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> &nbsp;&nbsp;Access
                  details of all your previous trips
                </li>
              </ul>
            </div>
            <div className="link">
              <a href="/signup">
                <button className="landing-button"> Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Landing;
