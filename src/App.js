import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  // Using state to manage displayed information
  const [info] = useState({
    title: "Welcome to Fullstack Development - I",
    subtitle: "React JS Programming Week09 Lab exercise",
    studentId: "101443672",
    name: "Someet Bhanderi",
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      {/* React Logo */}
      <img src={logo} className="App-logo" alt="React logo" style={{ width: "150px", marginBottom: "20px" }} />

      {/* Main Content */}
      <h1>{info.title}</h1>
      <h2>{info.subtitle}</h2>
      <p>{info.studentId}</p>
      <p>{info.name}</p>
      <p>{info.college}</p>
    </div>
  );
}

export default App;
