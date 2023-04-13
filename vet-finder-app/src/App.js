import './App.css';
import { useState } from "react";
import { clinicData } from './clinic-info';
import { Search } from './pages/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/' map = {<Map />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
