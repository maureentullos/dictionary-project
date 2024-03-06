import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="integrity" />
      </main>
      <footer className="App-footer">
        This project was coded by Maureen Tullos and is{" "}
        <a href="https://github.com/maureentullos/dictionary-project.git">
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a href="https://mellow-kringle-dfcad6.netlify.app/">
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}

 