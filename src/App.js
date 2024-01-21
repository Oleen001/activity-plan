import './App.css';
import RegistBadmintonDetail from './pages/badminton/detail';
import RegistBadmintonList from './pages/badminton/list';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app-body'>
      <Routes>
        <Route path="/" element={<RegistBadmintonDetail />} />
        <Route path="/list" element={<RegistBadmintonList />} />
      </Routes>
    </div>
  );
}

export default App;
