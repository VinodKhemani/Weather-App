import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      {<div className="footer-info">
        To Connect{" "}
        <a target="_blank" href="https://www.linkedin.com/in/vinod-khemani-5790a1222/">
          Linkedin
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://vinodkhemani.netlify.app/">
          Vinod Khemani
        </a>{" "}
        <div>
          Made with ❤️ in India
        </div>
      </div>}
    </React.Fragment>
  );
}

export default App;
