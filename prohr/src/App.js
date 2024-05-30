import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar2 from './Components/Navbar2';
import Register from './Components/Register';
import Login from './Components/Login';
import Welcome from './Components/welcome';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar2 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/welcome' element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
