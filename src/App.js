import React from 'react';
import './style.css';
import logo from './assets/logo.png';
import banner from './assets/banner.png';
import { signInWithGoogle } from "./Firebase";

function App() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <img src={logo} alt="Logo" className="logo" />
          </li>
        </ul>
        <div className="buttons">
          <button className="signup-button" onClick={signInWithGoogle}>SIGN IN</button>
        </div>
      </div>

      <div className="header">
        <div className="header-content">
          <div className="header-text">
            <h2>
              <span className="get">Get Awareness Through</span>
              </h2>
              
              <h1>
              <span className="title">Wellness.ai</span>
            </h1>
            <br />
            <button className="header-button">Get Started</button>
            <p className="tagline">
              "Embrace Your Mind, Empower Your Life:
              <br />
              Mental Health Matters"
            </p>
          </div>

          <div className="header-image">
            <img src={banner} alt="Header Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
