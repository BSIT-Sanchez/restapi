// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLists from './components/userLists';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLists/>} />
      </Routes>
    </Router>
  );
};

export default App;
