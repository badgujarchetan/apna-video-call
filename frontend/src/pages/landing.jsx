import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Apna Video Call</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/YourMeetIdHere"); // Replace with actual meet ID or logic to generate one
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/register"); // Navigate to register page
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/login"); // Navigate to login page
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by Apna Video Call</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
