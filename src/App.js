import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        
      </header>
        <main>
          <Dictionary />
        </main>
      <footer className="text-center">Coded by Maureen Tullos</footer>
    </div>
  );
}

 