import './App.css';
import RegistBadmintonDetail from './pages/badminton/detail';
import RegistBadmintonList from './pages/badminton/list';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: '#2E4B6B',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <div className='app-body'>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<RegistBadmintonDetail />} />
          <Route path="/list" element={<RegistBadmintonList />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
