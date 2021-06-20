import "./styles/App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
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
