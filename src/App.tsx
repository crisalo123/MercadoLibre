
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react';
import './App.css'
import { StepTwoPage } from './pages/stepTwoPage'
import { UserProvider } from './context/userContext';
import { ConfirmationsPage } from './pages';

function App() {


  return (
    <UserProvider>  
    <React.StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<StepTwoPage />} />
        <Route path="/confirmacion" element={<ConfirmationsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </UserProvider>
    
  )
}

export default App
