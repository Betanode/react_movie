import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Summary from './Summary';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Form from './Form';
function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route exact path="/summary/:id" element={<Summary />} />
          <Route exact path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
