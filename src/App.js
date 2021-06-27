import React, { useState } from "react";
import Dictionary from "./Dictionary";

import "./styles/App.css";
import { FaSun } from "react-icons/fa";

export default function App() {

const [lightMode, setLightMode] = useState(false);


const toggleLightMode = () => setLightMode (lightMode ? false : true);

  return (
    <div className="App">
          <button className="toggler" onClick={toggleLightMode}>
            <FaSun/>
          </button>
           <div className="container">
        <header className="App-header">
          <h1 className="header-title">Dictionary</h1>
        </header>
        <main className="App-main" data-theme={lightMode ? "light" : "dark"}>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p>Coded by Marta Dias</p>
        </footer>
      </div>
      </div>
  );
}

