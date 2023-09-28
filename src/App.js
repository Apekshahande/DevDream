
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import VoiceRecognition from './components/VoiceRecognition';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/voice-recognition" element={<VoiceRecognition />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;