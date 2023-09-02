import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './scenes/home';
import DrumKit from './scenes/drumkit';
import JsClock from './scenes/jsClock';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drumkit" element={<DrumKit/>}/>
        <Route path="/jsClock" element={<JsClock/>}/>
      </Routes>
    </div>
  );
}

export default App;
