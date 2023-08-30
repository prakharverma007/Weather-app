import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/prakharverma007">
          | My Gihub Profile
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.facebook.com/mastermind.alice">
          Prakhar Verma
        </a>{" "}
        | All Copyrights reserved {" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          2023 |
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
