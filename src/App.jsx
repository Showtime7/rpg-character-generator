import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Generator from './components/Generator';

import Welcome from './components/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/generator" element={<Generator />} />
    </Routes>
  );
}

export default App;
