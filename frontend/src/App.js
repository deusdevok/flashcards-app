import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import ManageFlashcards from './components/ManageFlashcards';
import StudyFlashcards from './components/StudyFlashcards';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/manage">Manage</Link>
          <Link to="/study">Study</Link>
        </nav>
        <Routes>
          <Route path="/manage" element={<ManageFlashcards />} />
          <Route path="/study" element={<StudyFlashcards />} />
          <Route path="*" element={<Navigate to="/manage" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;