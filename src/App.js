import './App.css';
import RegistBadminton from './pages/badminton';
import * as React from 'react';
import Lottie from "lottie-react";
import Badminton from '../src/badminton.json'

function App() {
  return (
    <div className='app-body'>
      <RegistBadminton></RegistBadminton>
      <Lottie style={{ height: 300 }} animationData={Badminton} loop={true} />
    </div>
  );
}

export default App;
