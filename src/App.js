import "./styles/App.css";
import Dictionary from "./Dictionary";
import React, { useState } from "react";
import { FaSun } from "react-icons/fa";




export default function App() {

const [lightMode, setLightMode] = useState(false);


const toggleLightMode = () => setLightMode (lightMode ? false : true);

  return (
    <div className="App" data-theme={lightMode ? "light" : "dark"}>
          <button className="toggler" onClick={toggleLightMode}>
             <FaSun/>
          </button>

           <div className="container">
        <header className="App-header">
          <h1 className="header-title">Dictionary</h1>
        </header>
        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p>Coded by Marta Dias</p>
        </footer>
      </div>
      </div>
   
  );
}

