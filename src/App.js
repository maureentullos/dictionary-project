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
          <Dictionary defaultKeyword="integrity"/>
        </main>
      <footer className="App-footer">Coded by Maureen Tullos</footer>
    </div>
  );
}

 