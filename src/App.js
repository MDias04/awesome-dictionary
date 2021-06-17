import "./styles/App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="header-title">Dictionary</h1>
      </div>
      <div className="App-main">
        <Dictionary />
      </div>
      <div className="App-footer">
        <p className="footer-text">Coded by Marta Dias</p>
      </div>
    </div>
  );
}
